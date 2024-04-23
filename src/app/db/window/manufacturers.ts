import { IDbManufacturer } from "../ts/interfaces";

import imgMilgard from "@/app/assets/manufacturers/milgard_logo.jpg";
import imgWindsor from "@/app/assets/manufacturers/windsor.jpg";
import imgCascade from "@/app/assets/manufacturers/cascade.jpg";
import imgIwc from "@/app/assets/manufacturers/iwc.jpg";
import imgSimolton from "@/app/assets/manufacturers/simonton.jpg";
import imgAmsco from "@/app/assets/manufacturers/amsco-windows.png";
import imgSuperior from "@/app/assets/manufacturers/superior.jpg";
import imgAtrium from "@/app/assets/manufacturers/atrium.jpg";
import imgComfort from "@/app/assets/manufacturers/comfortdesign.jpg";
import imgEmpPacific from "@/app/assets/manufacturers/empirepacific.jpg";
import imgVpi from "@/app/assets/manufacturers/vpi-windows-logo.png";

const data: IDbManufacturer[] = [
  {
    id: 1,
    title: "milgard",
    image: imgMilgard,
    itemTypes: [
      {
        sudo: "milgard-aluminum",
        title: "aluminum",
      },
      {
        sudo: "milgard-fiberglass",
        title: "fiberglass",
      },
      {
        sudo: "milgard-vinyl",
        title: "vinyl",
      },
      {
        sudo: "milgard-wood",
        title: "wood",
      },
    ],
  },
  {
    id: 2,
    title: "windsor",
    image: imgWindsor,
    itemTypes: [
      {
        sudo: "windsor-wood",
        title: "wood",
      },
    ],
  },
  {
    id: 3,
    title: "cascade",
    image: imgCascade,
    itemTypes: [
      {
        sudo: "cascade-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 4,
    title: "IWC",
    image: imgIwc,
    itemTypes: [
      {
        sudo: "iwc-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 5,
    title: "simonton",
    image: imgSimolton,
    itemTypes: [
      {
        sudo: "simonton-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 6,
    title: "amsco",
    image: imgAmsco,
    itemTypes: [
      {
        sudo: "amsco-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 7,
    title: "superior",
    image: imgSuperior,
    itemTypes: [
      {
        sudo: "superiorl-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 8,
    title: "atrium",
    image: imgAtrium,
    itemTypes: [
      {
        sudo: "atrium-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 9,
    title: "comfort design",
    image: imgComfort,
    itemTypes: [
      {
        sudo: "comfort-design-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 10,
    title: "empire pacific",
    image: imgEmpPacific,
    itemTypes: [
      {
        sudo: "empire-pacific-vinyl",
        title: "vinyl",
      },
    ],
  },
  {
    id: 11,
    title: "VPI quality windows",
    image: imgVpi,
    itemTypes: [
      {
        sudo: "quality-windows-vinyl",
        title: "vinyl",
      },
    ],
  },
];

export default data;
