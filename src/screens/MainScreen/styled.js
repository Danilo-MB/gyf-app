import styled from 'styled-components';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { colors } from '../../styles';

export const MainWrapper = styled(View)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding-left: 10px;
  padding-right: 10px;
`;

export const InputSection = styled(View)`
  padding-top: 20px;
`;

export const CardsSection = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;