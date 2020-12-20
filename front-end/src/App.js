import { useContext, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Oups from './Oups'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Login from './Login'
import Context from './Context'
import ChannelCreation from './ChannelCreation'
import Settings from './Settings'
// Rooter
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom"

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    padding: '50px',
  },
  dark : {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#303a52',
    padding: '50px',
  }
}

export default () => {
  const location = useLocation()
  const {oauth} = useContext(Context)
  const [drawerMobileVisible, setDrawerMobileVisible] = useState(false)
  const drawerToggleListener = () => {
    setDrawerMobileVisible(!drawerMobileVisible)
  }
  const {dark_mode} = useContext(Context)
  var theme;
  if (dark_mode==false)
    {
      theme=styles.root;
    }
  else {
    theme=styles.dark
  }
  return (
    <div className="App" css={theme}>
      <Header drawerToggleListener={drawerToggleListener}/>
      <Switch>
        <Route exact path="/">
          {
            oauth ? (
              <Redirect
                to={{
                  pathname: "/channels",
                  state: { from: location }
                }}
              />
            ) : (
              <Login />
            )
          }
        </Route>
        <Route path="/channels">
          {
            oauth ? (
              <Main />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        </Route>
        <Route path="/users/createchannel">
          <ChannelCreation />
        </Route>
        <Route path="/users/settings">
          <Settings />
        </Route>
        <Route path="/Oups">
          <Oups />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
