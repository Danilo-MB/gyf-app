import React, { useState} from 'react';
import { MainWrapper, HeaderSection, Header } from './styled';
import Input from '../Input';
import Button from '../Button';

const CommentForm = ({ sendComment }) => {

  const [form, setForm] = useState({
    email: '',
    comment: '',
  });

  const [errorForm, setErrorForm] = useState({
    email: '',
    comment: '',
  });

  const { email, comment } = form;

  const { emailError, commentError } = errorForm;


  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
    setErrorForm({
      emailError: '',
      commentError: '',
    });
  };

  return (
    <MainWrapper>
      <HeaderSection>
        <Header>Post a comment</Header>
      </HeaderSection>
      <Input 
        placeholder='email'
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Input 
        placeholder='comment'
        name="comment"
        value={comment}
        onChange={handleChange}
      />
      <Button 
        text='Send'
        onPress={() => sendComment(email, comment)}
      />
    </MainWrapper>
  )

};

export default CommentForm;