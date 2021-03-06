import { Insurer, TInsuranceProduct } from "./definitions";

export const insuranceProducts: TInsuranceProduct[] = [
  {
    id: "protectoABC",
    insurerName: Insurer.Protecto,
    description:
      "Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
    monthlyPrice: 12.5,
  },
  {
    id: "umbrellaABC",
    insurerName: Insurer.Umbrella,
    description:
      "Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
    monthlyPrice: 35.73,
  },
  {
    id: "thorABC",
    insurerName: Insurer.Thor,
    description:
      "Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
    monthlyPrice: 79.3,
  },
];
