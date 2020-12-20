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
import {useContext} from 'react'
import Context from './Context'

const useStyles = (theme) => ({
  root: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',

    // background: 'rgba(0,0,0,.2)',
  },
  card: {
    textAlign: 'center',
  },
  icon: {
    width: '30%',
    fill: '#0e153a',
  },
  icon_dark : {
    width: '30%',
    fill: '#fff',
  },

  text :{
    color : '#0e153a',
  },
  text_dark :{
    color : '#fff',
  }
})

export default () => {
  const styles = useStyles(useTheme())
  const {dark_mode} = useContext(Context)
  var mode_icon;
  var mode_text;
  if (dark_mode==false)
    {
      mode_icon=styles.icon
      mode_text=styles.text
    }
  else {
    mode_icon=styles.icon_dark
    mode_text=styles.text_dark
  }
  return (
    <div css={styles.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs>
          <div css={styles.card}>
            <Button to='/users/createchannel'
              component={Link}>
              <ChannelIcon css={mode_icon} />
              <Typography css={mode_text}>
                Create channels
              </Typography>
            </Button>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card}>
            <FriendsIcon css={mode_icon} />
            <Typography css={mode_text}>
              Invite friends
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card}>
          <Button to='/users/settings'
            component={Link}>
            <SettingsIcon css={mode_icon} />
            <Typography css={mode_text}>
              Settings
            </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
