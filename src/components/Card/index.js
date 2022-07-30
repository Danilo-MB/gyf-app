import React from "react";
import {
  Wrapper,
  TitleSection,
  Title,
  BodySection,
  Body,
  AuthorSection,
  IconWrapper,
  AuthorInfoSection,
  AuthorName,
  CommentsIconWrapper,
} from "./styled";
import { firstUppercase, colors } from "../../styles";
import UserIcon from "../icons/User";
import CommentsIcon from "../icons/Comments";

const Card = ({
  title = "",
  body = "",
  authorName = "",
  authorEmail = "",
  onPress = () => {},
}) => {
  return (
    <Wrapper>
      <TitleSection>
        <Title>{firstUppercase(title)}</Title>
      </TitleSection>
      <BodySection>
        <Body>{firstUppercase(body)}</Body>
      </BodySection>
      <AuthorSection>
        <IconWrapper>
          <UserIcon color={colors.white} width={12} height={14} />
        </IconWrapper>
        <AuthorInfoSection>
          <AuthorName>{authorName}</AuthorName>
          <AuthorName>{authorEmail}</AuthorName>
        </AuthorInfoSection>
      </AuthorSection>
      <CommentsIconWrapper onPress={onPress}>
        <CommentsIcon color={colors.black} width={24} height={24} />
      </CommentsIconWrapper>
    </Wrapper>
  );
};

export default Card;
