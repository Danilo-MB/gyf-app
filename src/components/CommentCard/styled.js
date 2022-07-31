import styled from 'styled-components';
import { View, Text } from 'react-native';
import { colors, getFont } from '../../styles';

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.gray2};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const TitleSection = styled(View)`
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled(Text)`
  font-size: 15px;
  color: ${colors.black};
  ${getFont('Poppins', '700')};
`;

export const BodySection = styled(View)`
  width: 100%;
`;

export const Body = styled(Text)`
  font-size: 15px;
  color: ${colors.black};
  ${getFont('Poppins', '500')};
`;