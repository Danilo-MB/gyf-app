import styled from 'styled-components';
import { Input } from 'react-native-elements';
import { colors, getFont } from '../../styles';

export const StyledInput = styled(Input).attrs({
  textAlign: 'left',
  color: colors.gray,
  fontSize: 15,
  ...getFont('Poppins', '500'),
  lineSpacing: 23,
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray2,
    backgroundColor: colors.white,
    paddingLeft: 18,
    paddingRight: 10,
  },
  labelStyle: {
    color: colors.black,
    fontSize: 15,
    ...getFont('Poppins', '500'),
    marginTop: 10,
    marginBottom: 10,
  },
})``;
