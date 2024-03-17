import React from "react";
import { View } from "react-native";
import bgImage from "../../../assets/ireland_constituency_map.png"
import useDimensions from "../../state/hooks/useDimensions";

export default function RelativeToBg(props) {
  const { relativeDimensions } = props;
  const { scaledImageDimensions } = useDimensions(bgImage);

  return (
    <View
      style={{
        position: "absolute",
        top:
          scaledImageDimensions.height * relativeDimensions.y -
          scaledImageDimensions.yZero,
        left:
          scaledImageDimensions.width * relativeDimensions.x -
          scaledImageDimensions.xZero,
        width: scaledImageDimensions.width * relativeDimensions.w,
        height: scaledImageDimensions.height * relativeDimensions.h
      }}
    >
      {props.children}
    </View>
  );
}