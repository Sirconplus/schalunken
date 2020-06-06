import React from 'react';
import { StyledCommentForm } from './CommentForm.styles';

interface CommentFormProps {
  title: string;
  id: string;
}

const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { title, id } = props;
  return (
    <StyledCommentForm
      method="POST"
      action="https://niklsstaticman.herokuapp.com/v2/entry/Sirconplus/schalunken/master/comments"
    >
      <input name="options[redirect]" type="hidden" value="http://localhost:8000/thanksforposting" />
      <input name="options[title]" type="hidden" value={title} />
      <input name="options[episode]" type="hidden" value={id} />
      <label>
        Name
        <input name="fields[name]" type="text" required />
      </label>
      <label>
        Kommentar
        <textarea name="fields[message]" required />
      </label>
      <label>
        E mail
        <input type="email" name="fields[contact]" />
      </label>
      <button type="submit">Schicken</button>
    </StyledCommentForm>
  );
};

export default CommentForm;
