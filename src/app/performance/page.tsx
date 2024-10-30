import { Hero } from "@/components";
import performanceImg from "public/performance.jpg";

export default function Reliability() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
