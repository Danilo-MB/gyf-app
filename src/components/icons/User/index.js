import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <style>
        .a{fill:${color};}
      </style>
    </defs>
    <path class="a" d="M6,6.857A3.429,3.429,0,1,0,2.571,3.429,3.428,3.428,0,0,0,6,6.857Zm2.4.857H7.953a4.663,4.663,0,0,1-3.905,0H3.6a3.6,3.6,0,0,0-3.6,3.6v1.114a1.286,1.286,0,0,0,1.286,1.286h9.429A1.286,1.286,0,0,0,12,12.429V11.314A3.6,3.6,0,0,0,8.4,7.714Z"/>
  </svg>
`;

export default ({ color, width, height }) => {
  return (
    <View style={{ width: width, height: height }}>
      <SvgCss xml={xml(color, width, height)} width="100%" height="100%" />
    </View>
  );
};
