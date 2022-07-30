import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <style>.a{fill:${color};}</style>
    </defs>
    <path class="a" d="M15.863,13.906l-3.132-3.132a.753.753,0,0,0-.534-.22h-.512a6.531,6.531,0,1,0-1.131,1.131V12.2a.753.753,0,0,0,.22.534l3.132,3.132a.751.751,0,0,0,1.065,0l.889-.889A.757.757,0,0,0,15.863,13.906ZM6.534,10.554a4.021,4.021,0,1,1,4.021-4.021A4.018,4.018,0,0,1,6.534,10.554Z"/>
    </svg>
`;

export default ({ color, width, height }) => {
  return (
    <View style={{ width: width, height: height }}>
      <SvgCss xml={xml(color, width, height)} width="100%" height="100%" />
    </View>
  );
};
