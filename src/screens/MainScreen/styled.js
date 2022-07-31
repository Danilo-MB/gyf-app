import styled from 'styled-components';
import { View } from 'react-native';
import { colors } from '../../styles';

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