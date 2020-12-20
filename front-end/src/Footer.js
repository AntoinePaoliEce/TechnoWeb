import {useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Context from './Context'

const styles = {
  footer: {
    height: '30px',
    backgroundColor: '#1f4287',
    flexShrink: 0,
  },

}

export default () => {
  const {dark_mode} = useContext(Context)
  return (
    <footer style={styles.footer}>
      footer
    </footer>
  );
}
