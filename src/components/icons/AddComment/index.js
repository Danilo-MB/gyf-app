import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg style="width:${width}px;height:${height}px" viewBox="0 0 ${width} ${height}">
      <path fill="${color}" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />
  </svg>
`;

export default ({ color, width, height }) => {
  return (
    <View style={{ width: width, height: height }}>
      <SvgCss xml={xml(color, width, height)} width="100%" height="100%" />
    </View>
  );
};