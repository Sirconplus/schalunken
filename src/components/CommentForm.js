import React from 'react';

const CommentForm = (props) => {
  return (
    <form method="POST" action="https://niklsstaticman.herokuapp.com/v2/entry/Sirconplus/schalunken/master/comments">
      <input name="options[redirect]" type="hidden" value="http://localhost:8000/thanksforposting" />
      <input name="options[title]" type="hidden" value={props.title} />
      <input name="options[id]" type="hidden" value={props.id} />
      <label>
        <input name="fields[name]" type="text" required />
        Name
      </label>
      <label>
        <textarea name="fields[message]" required />
        Message
      </label>
      <label>
        <textarea name="fields[email]" />E mail
      </label>
      <button type="submit">Go!</button>
    </form>
  );
};

export default CommentForm;
