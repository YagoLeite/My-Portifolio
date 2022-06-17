import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Util, Line } from "pts";
import { Flex, Text, Box } from "@chakra-ui/react";

const MeuBago = () => {
  return (
    <Flex
      position="absolute"
      // zIndex="-1"
      bg="green"
      top="0"
      left="0"
      bottom="0"
      right="0"
    >
      <PtsCanvas
        className="testing"
        onAnimate={(space, form, time) => {
          let subs = space.innerBound.map((p) =>
            Line.subpoints([p, space.pointer], 20)
          );
          form.strokeOnly("#FDC", 2).rects(Util.zip(subs));
        }}
      />
    </Flex>
  );
};

export default MeuBago;
