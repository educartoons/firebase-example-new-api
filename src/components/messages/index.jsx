import React, {useState, useEffect} from 'react';
import { orderBy } from 'lodash';
import {collection, onSnapshot} from 'firebase/firestore'
import styled from '@emotion/styled'
import Message from '../message';
import SendMessage from '../SendMessage';

import {db} from '../../firebase'


const BoxStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2em 0;
  height: 100vh;
`;

const Messages = () => {
  const [user, setUser] = useState('Eduar');
  const [messages, setMessages] = useState([]);

  useEffect(()=>{

    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot)=>{
      const data = snapshot.docs.map(document=>({id: document.id, ...document.data()}))
      setMessages(orderBy(data, 'createdAt'));
    });

    return () => {
      unsubscribe();
    }

  }, [])

  return <BoxStyled>
    {
      messages.map(message=><Message key={message.id} owner={user===message.user} message={message.message} createdAt={message.createdAt}/>)
    }
    <SendMessage />
  </BoxStyled>
}

export default Messages;