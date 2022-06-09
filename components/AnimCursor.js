import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={10}
      color="60, 211, 311"
      outerAlpha={0.4}
      innerScale={0.1}
      outerScale={3}
      //   clickables={[
      //     "a",
      //     'input[type="text"]',
      //     'input[type="email"]',
      //     'input[type="number"]',
      //     'input[type="submit"]',
      //     'input[type="image"]',
      //     "label[for]",
      //     "select",
      //     "textarea",
      //     "button",
      //     ".link",
      //   ]}
    />
  );
};

export default AnimCursor;
