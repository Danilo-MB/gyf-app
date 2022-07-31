import React from "react";
import {
  Wrapper,
  TitleSection,
  Title,
  BodySection,
  Body,
} from "./styled";
import { firstUppercase } from "../../styles";

const CommentCard = ({
  name = "",
  email = "",
  body = "",
}) => {
  return (
    <Wrapper>
      <TitleSection>
        <Title>{firstUppercase(name)}</Title>
      </TitleSection>
      <TitleSection>
        <Title>{email}</Title>
      </TitleSection>
      <BodySection>
        <Body>{firstUppercase(body)}</Body>
      </BodySection>
    </Wrapper>
  );
};

export default CommentCard;
