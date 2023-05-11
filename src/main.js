import React from 'react';
import {render} from 'react-dom'
import Messages from './components/messages';

const Home = () => {
  return <Messages />
}

render(<Home />, document.getElementById('app'))