import Slider from "../../../ui/Slider";

import Slide1 from "../../../../assets/slider.jpg";
import Slide2 from "../../../../assets/slider2.jpg";
import Slide3 from "../../../../assets/slider3.jpg";
import Slide4 from "../../../../assets/slider4.jpg";
import Slide5 from "../../../../assets/slider5.jpg";

import { ISliderData } from "@/app/db/ts/interfaces";

const carouselData: ISliderData[] = [
  { title: "Slide 1", src: Slide1 },
  { title: "Slide 2", src: Slide2 },
  { title: "Slide 3", src: Slide3 },
  { title: "Slide 4", src: Slide4 },
  { title: "Slide 5", src: Slide5 },
];

const MainCarousel = () => {
  return <Slider items={carouselData} isFullWidthImg />;
};

export default MainCarousel;
