import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  AddCommentWrapper,
  CommentsHeader,
  CommentsSectionHeader,
  MainWrapper,
} from "./styled";
import PostCard from "../../components/PostCard";
import CommentCard from "../../components/CommentCard";
import useFetchData from "../../utils/useFetchData";
import AddCommentIcon from "../../components/icons/AddComment";
import { colors } from "../../styles";
import CommentForm from "../../components/CommentForm";

const CommentScreen = ({ route }) => {
  const { post } = route.params;
  const [commentFormOpen, setCommentFormOpen] = useState(false);

  const userData = useFetchData().getUserData;

  const renderItem = ({ item }) => (
    <CommentCard name={item.name} email={item.email} body={item.body} />
  );

  return (
    <MainWrapper>
      {!commentFormOpen &&
      <PostCard
        title={post.title}
        body={post.body}
        authorName={userData(post.userId).userName}
        authorEmail={userData(post.userId).userEmail}
        showCommentLink={false}
      />}
      <CommentsSectionHeader>
        {commentFormOpen ? (
          <CommentForm 
            sendComment={(email, comment) => {
              // POST email y comment
              setCommentFormOpen(false)
            }
            }
          />
        ) : (
          <>
            <CommentsHeader>Comments</CommentsHeader>
            <AddCommentWrapper onPress={() => setCommentFormOpen(true)}>
              <AddCommentIcon color={colors.black} width={24} height={24} />
            </AddCommentWrapper>
          </>
        )}
      </CommentsSectionHeader>
      <FlatList
        data={useFetchData().getCommentsByPost(post.id)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CommentScreen;
