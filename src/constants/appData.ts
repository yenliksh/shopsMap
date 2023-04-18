import { IShop } from "../models/IShop";

export let SHOPES: IShop[] = [
  {
    id: 1,
    name: "Happy cake",
    address: "Улица Жумекен Нажимеденов 4",
    contacts: ["87077771144", "happycake.kz"],
    images: [
      "https://cachizer3.2gis.com/reviews-photos/7565e9f2-4144-4146-ace8-3c4fee5c705a.jpg?w=1920",
      "https://i0.photo.2gis.com/images/branch/0/30258560074651619_5a73.jpg",
      "https://funcakes.com/content/uploads/2022/05/Fun-Cakes-20220414-Festival_Wedding_cake-01-600x400.jpg",
    ],
    description: `Торты в Астане 🎂\n 🍰 Печём вкусные, воздушные торты по домашней технологии\n🌟 Сертификат Халал\n 👩🏻‍🍳 Работаем без выходных и перерывов`,
    rings: [
      [
        [71.45861164038138, 51.12043419883108],
        [71.45913489109972, 51.120402424021435],
        [71.45917342439152, 51.12025303469814],
        [71.45860768824879, 51.120281878974644],
      ],
    ],
    todos: [],
  },

  {
    id: 2,
    name: "Тап татти",
    address: "Улица Жумекен Нажимеденов 3",
    contacts: ["87077771144", "taptatti.kz"],
    images: [
      "https://avatars.mds.yandex.net/get-altay/1546430/2a0000016d352bf30211388cbfbcce98186c/XXXL",
      "https://halaldamu.kz/storage/app/media/uploaded-files/about-text-img.a56a515e.png",
      "https://tengrinews.kz/userdata/news/2019/news_362230/thumb_m/photo_271322.jpg",
    ],
    description: `Торты в Астане 🎂\n 🍰 Печём вкусные, воздушные торты по домашней технологии\n🌟 Сертификат Халал\n 👩🏻‍🍳 Работаем без выходных и перерывов`,
    rings: [
      [
        [71.45728351699303, 51.120478107688896],
        [71.45759371529027, 51.12049313291526],
        [71.45760126149014, 51.120382443083926],
        [71.457199457275, 51.12040467036878],
      ],
    ],
    todos: [],
  },
];

export const ADDTODO = (id: number, todo: string) => {
  let shop = SHOPES.find((el) => el.id === id);
  if (!shop) return;
  const shopInd = SHOPES.findIndex((el) => el.id === id);
  SHOPES[shopInd] = { ...shop, todos: [...shop.todos, todo] };
};
