import axios from 'axios';
import React from 'react';

const DeleteArticle = ({id}) => {

  const handleDelete = () => {
    axios.delete(`https://crud-react-json-server.herokuapp.com/api/articles/${id}`);
    window.location.reload();
  };

  return (
    <button onClick={() => {
      if (window.confirm('Voulez-vous supprimer cet article?')) {
        handleDelete();
      }
    } }>Supprimer</button>
  );
};

export default DeleteArticle;<h1>Delete</h1>
