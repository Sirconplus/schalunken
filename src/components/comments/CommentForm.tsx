import React from 'react';
import { TextField } from '@material-ui/core';
import { NameAndEmail, StyledCommentForm } from './CommentForm.styles';

interface CommentFormProps {
  title: string;
  id: string;
  slug: string;
}

const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { title, id, slug } = props;
  return (
    <StyledCommentForm
      method="POST"
      action="https://niklsstaticman.herokuapp.com/v2/entry/Sirconplus/schalunken/master/comments"
    >
      <input name="options[redirect]" type="hidden" value={`${slug}#commented`} />
      <input name="options[title]" type="hidden" value={title} />
      <input name="fields[episode]" type="hidden" value={id} />
      <NameAndEmail>
        <TextField name="fields[name]" id="name" label="Name" variant="outlined" required />
        <TextField type="email" name="fields[contact]" id="email" label="E mail" variant="outlined" />
      </NameAndEmail>
      <TextField id="message" label="Kommentar" name="fields[message]" multiline rows={4} variant="outlined" required />
      <button type="submit">Schicken</button>
    </StyledCommentForm>
  );
};

export default CommentForm;
