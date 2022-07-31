import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors, getFont } from '../../styles';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: ${colors.black};
  background-color: ${colors.black};
  width: 200px;
`;

export const TextContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${colors.white};
  ${getFont('Poppins', '700')};
`;
