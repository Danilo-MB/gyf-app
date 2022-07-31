import React from 'react';
import {
  Wrapper,
  TextContainer,
  ButtonText,
} from './styled';
import { colors } from '../../styles';

const Button = props => {
  const {
    backgroundColor,
    text,
    onPress,
    isDisabled = false,
    height,
  } = props;

  return (
    <Wrapper
      height={height}
      backgroundColor={isDisabled ? colors.gray : backgroundColor}
      onPress={onPress}
      disabled={isDisabled}
      >
      <TextContainer>
        <ButtonText>{text}</ButtonText>
      </TextContainer>
    </Wrapper>
  );
};

export default Button;
