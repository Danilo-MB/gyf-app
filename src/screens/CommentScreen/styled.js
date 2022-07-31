import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors, getFont } from '../../styles';

export const MainWrapper = styled(View)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
`;

export const CommentsSectionHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-right: 10px;
`;

export const CommentsHeader = styled(Text)`
  font-size: 14px;
  color: ${colors.black};
  ${getFont('Poppins', '700')};
`;

export const AddCommentWrapper = styled(TouchableOpacity)`

`;