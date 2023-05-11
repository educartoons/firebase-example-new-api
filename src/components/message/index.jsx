import React from 'react';
import styled from '@emotion/styled'

const MessageStyled = styled.div`
  background-color: ${(props)=>props.owner ? '#F8E4CB': '#F2F2F2'};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: ${(props)=>props.owner ? '8px': '0'};
  border-bottom-right-radius: ${(props)=>props.owner ? '0': '8px'};
  padding: 1em 1em;
`;

const WrapperMessageStyled = styled.div`
  display: flex;
  justify-content: ${(props)=>props.owner? 'flex-end': 'flex-start'};
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 0.5em 0;
`;

const Message = (props) => {
  return <WrapperMessageStyled owner={props.owner}>
    <div>
      <MessageStyled owner={props.owner}>
        {props.message}
      </MessageStyled>
    </div>
  </WrapperMessageStyled>
}

export default Message;