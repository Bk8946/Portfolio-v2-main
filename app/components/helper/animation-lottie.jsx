"use client";
import Lottie from "lottie-react";

export default function AnimationLottie({ animationPath, width = "95%" }) {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width }}
    />
  );
}
