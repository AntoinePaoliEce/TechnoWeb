import React, {useState} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

const style = {
    height: '60px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  }

export default function Header() {
  return (<header className="App-header" css={style}>
        <h1>header</h1>
      </header>);
}
