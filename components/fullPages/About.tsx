"use client";

import { animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import image from "../../steve-johnson-XJq3GS84acg-unsplash.jpg";
interface IPageProps {
  offset: number;
  speed: number;
}
export const About = ({ offset, speed }: IPageProps) => {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <div className="flex justify-center h-screen w-full bg-gradient-to-b from-indigo-500">
        <h1>About</h1>
      </div>
    </ParallaxLayer>
  );
};
