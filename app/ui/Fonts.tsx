import { Alegreya, Dosis } from "next/font/google";

const roboto_mono = Dosis({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export { roboto_mono, alegreya };
