import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IShop } from "../../models/IShop";
import "./index.css";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import { addTodo } from "../../redux/shop/shopSlice";

export const SideView = () => {
  const shop: IShop = useSelector((state: any) => state.shop);
  const [currentImage, setCurrentImage] = useState(0);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(addTodo({ id: shop?.id, todo }));
    setTodo("");
  };

  return Object.keys(shop).length !== 0 ? (
    <div className="side-view">
      <div className="side-view__slider">
        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev >= 1 ? prev - 1 : shop.images.length - 1
            )
          }
          className="btn slider__btn"
        >
          <img src={prev} alt="prev icon"></img>
        </button>
        <div className="side-view__img">
          <img src={shop.images[currentImage]} alt="img"></img>
        </div>
        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev < shop.images.length - 1 ? prev + 1 : 0
            )
          }
          className="btn slider__btn"
        >
          <img src={next} alt="next icon"></img>
        </button>
      </div>
      <div className="side-view__info">
        <h4>{shop.name}</h4>
        <p className="side-view__info__description">{shop.description}</p>
        <hr />
        <p>Адрес: {shop.address}</p>
        <h5>Контакты:</h5>
        {shop?.contacts?.map((el) => (
          <p>{el} </p>
        ))}
      </div>
      <div className="side-view__todos">
        <div className="side-view__todos__wrapper">
          <input
            className="side-view__todos__input"
            value={todo}
            onChange={(e) => setTodo(e.currentTarget.value)}
          ></input>
          <button
            className="btn side-view__todos__btn"
            onClick={() => onAddTodo()}
          >
            Добавить продукты
          </button>
        </div>
        {shop.todos?.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </div>
  ) : null;
};
