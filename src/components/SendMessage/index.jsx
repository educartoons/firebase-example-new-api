import React, {useState} from 'react';
import styled from '@emotion/styled'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../firebase'

const SendMessageStyled = styled.div`
  background-color: #F1F1F1;
  border-radius: 8px;
  padding: 1em 1em;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  textarea{
    background-color: transparent;
    border: 0;
    display: block;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    outline: none;
    width: 100%;
  }
  button{
    background: black;
    border: 0;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    padding: 0.5em 1em;
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
`;

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const docRef = addDoc(collection(db, 'messages'), {
      message,
      user: 'Eduar',
      createdAt: Date.now()
    })
    setMessage('');
    console.log(docRef)
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return <SendMessageStyled>
    <textarea onChange={handleChange} value={message} name="" id="" cols="30" rows="5" placeholder='Message to Conference Meeting'>
    </textarea>
    <button onClick={handleSendMessage}>Send now</button>
  </SendMessageStyled>
}

export default SendMessage;