import { Hero } from "@/components";
import scaleImg from "public/scale.jpg";

export default function Scale() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="stell factory"
      title="Scale your app to infinity."
    />
  );
}
