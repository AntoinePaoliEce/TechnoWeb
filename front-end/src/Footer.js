
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useContext } from 'react';
import Context from './Context';

const styles = {
  footer: {
    height: '30px',
    backgroundColor: '#1f4287',
    flexShrink: 0,
  },
}

export default () => {
  return (
    <footer style={styles.footer}>
      footer
    </footer>
  );
}
