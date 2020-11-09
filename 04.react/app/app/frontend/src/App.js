import React, {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {MessageForm} from './MessageForm.js';
import Header from './Header.js';
import State from './Messages.js';
import Messages from './Messages.js';

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  footer: {
    height: '30px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  main: {
    backgroundColor: '#373B44',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  channels: {
    minWidth: '200px',
  },
  channel: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  messages: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
}

export default ({
  channel = {
    name: 'Fake channel'
  }
}) => {
  const addMessage = (message) => {
    setMessages([
      ...messages,
      message
    ])
  }
  return (
    <div className="App" css={styles.root}>
	  {Header()}
      <main className="App-main" css={styles.main}>
        <div css={styles.channels}>
        </div>
        <div css={styles.channel}>
          <div css={styles.messages}>
            <h1>Messages for {channel.name}</h1>
            {Messages()}
          </div>
          <MessageForm addMessage={addMessage} />
        </div>
      </main>
      <footer className="App-footer" style={styles.footer}>
        footer
      </footer>
    </div>
  );
}
