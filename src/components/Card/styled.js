import styled from 'styled-components';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { colors, getFont } from '../../styles';

const { width } = Dimensions.get('window');

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

export const AuthorSection = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-top: 20px;
`;

export const IconWrapper = styled(View)`
  width: 30px;
  height: 30px;
  background-color: ${colors.black};
  border-width: 1px;
  border-color: ${colors.black};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const AuthorInfoSection = styled(View)`
  flex-direction: column;
`;

export const AuthorName = styled(Text)`
  font-size: 14px;
  color: ${colors.black};
  ${getFont('Poppins', '500')};
`;

export const CommentsIconWrapper = styled(TouchableOpacity)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
