import styled from 'styled-components';
import { View, Text } from 'react-native';
import { colors, getFont } from '../../styles';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.gray2};
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const HeaderSection = styled(View)`
  padding-bottom: 10px;
`;

export const Header = styled(Text)`
  font-size: 14px;
  color: ${colors.black};
  ${getFont('Poppins', '700')};
`;