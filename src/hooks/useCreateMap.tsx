import { loadModules } from "esri-loader";
import { useEffect } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Polygon from "@arcgis/core/geometry/Polygon";
import { SHOPES } from "../constants/appData";
import { useDispatch } from "react-redux";
import { selectShop } from "../redux/shop/shopSlice";

export const useCreateMap = (mapRef: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let view: any;

    const initializeMap = async (mapRef: any) => {
      const modules = ["esri/Map", "esri/views/MapView"];
      const [Map, MapView] = await loadModules(modules);
      const map = new Map({ basemap: "streets-relief-vector" });

      const graphicsLayer = new GraphicsLayer();

      const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };

      view = new MapView({
        map: map,
        zoom: 17,
        container: mapRef.current,
        center: [71.4565559, 51.119393],
      });

      SHOPES.forEach(({ id, rings }) => {
        const polygon = new Polygon({
          rings,
        });

        const attributes = {
          id,
        };

        const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol,
          attributes: attributes,
        });
        graphicsLayer.add(polygonGraphic);

        view.graphics.add(polygonGraphic);
      });

      view.on("click", function (event: any) {
        view.hitTest(event.screenPoint).then(function (response: any) {
          const polygon = response.results.find((el: any) => el.layer === null)
            ?.graphic.attributes;

          if (polygon) dispatch(selectShop({ id: polygon.id }));
          else dispatch(selectShop(null));
        });
      });
    };

    initializeMap(mapRef);

    return () => view?.destroy();
  }, [mapRef]);
};
