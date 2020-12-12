import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ChannelIcon} from './icons/channel.svg';
import {ReactComponent as FriendsIcon} from './icons/friends.svg';
import {ReactComponent as SettingsIcon} from './icons/settings.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = (theme) => ({
  root: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
  },
  icon: {
    width: '30%',
    fill: '#fff',
  },
  hello: {
    backgroundColor: 'red',
  }
})

export default () => {
  const styles = useStyles(useTheme())
  return (
    <div css={styles.hello}>hello</div>
  );
}
