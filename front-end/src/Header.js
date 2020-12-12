
import { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import Logout from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Context from './Context'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = (theme) => ({
  header: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: 'rgba(255,255,255,.3)',
    //flexShrink: 0,
  },
  headerLogIn: {
    width: "100%",
    //backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  menu: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    /*[theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },*/
  },
})

export default ({
  drawerToggleListener
}) => {
  const styles = useStyles(useTheme())
  const {
    oauth, setOauth,
    drawerVisible, setDrawerVisible
  } = useContext(Context)
  const drawerToggle = (e) => {
    setDrawerVisible(!drawerVisible)
  }
  const onClickLogout = (e) => {
    e.stopPropagation()
    setOauth(null)
  }
  return (
    //<header css={styles.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={drawerToggle}
            css={styles.menu}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            to='/'
            component={Link}
            css={styles.menu}
          >
            <SettingsIcon />
            <Typography>More options</Typography>
          </Button>
          {
            oauth ?
              <span css={styles.headerLogIn}>
                {oauth.email}
                <Button variant="contained" color="secondary" startIcon={<Logout />}
                    onClick={onClickLogout}>logout</Button>
              </span>
            :
              <span>new user</span>
          }
        </Toolbar>
      </AppBar>
    //</header>
  );
}
