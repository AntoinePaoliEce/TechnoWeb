/** @jsx jsx */
import React from 'react';
import {useContext} from 'react';
import { jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { Grid, TextField , Paper} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import {ReactComponent as Avatar1} from './Avatar/avatar1.svg';
import {ReactComponent as Avatar2} from './Avatar/avatar2.svg';
import {ReactComponent as Avatar3} from './Avatar/avatar3.svg';
import Context from './Context'
import axios from 'axios';
import {useState} from 'react'


const useStyles = (theme) => ({
    root: {
      backgroundColor: '#88bef5',
      overflow: 'hidden',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      justify: 'center',
      alignItems: 'center',
      color: '#0e153a'
    },
    dark: {
      backgroundColor: '#373B44',
      overflow: 'hidden',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      justify: 'center',
      alignItems: 'center',
    },
    form: {
      width: '50%',
      margin: 'auto',
    },
    avatar: {
      width: '40%',
      fill: '#fff',
    }
  })

  export default () => {
      const styles = useStyles(useTheme())
      const {dark_mode, setDark_mode} = useContext(Context)
      const handleToggle = () => {
        setDark_mode(!dark_mode)
      }
      var mode;
      if (!dark_mode) {
        mode = styles.root
      }
      else {
        mode = styles.dark
      }
      return (
        <div css={mode}>
        <form css={styles.form}>
        <ListItem>
         <ListItemText>
          Dark mode :
          </ListItemText>
          <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle}
            checked={dark_mode}
          />
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
          Select an avatar :
          </ListItemText>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs>
                <Button >
                  <Avatar1 css={styles.avatar}/>
                </Button>
            </Grid>
            <Grid item xs>
              <Button >
                <Avatar2 css={styles.avatar}/>
              </Button>
            </Grid>
            <Grid item xs>
              <Button >
                <Avatar3 css={styles.avatar}/>
                </Button>
            </Grid>
          </Grid>
          </ListItem>
        </form>
        </div>
      )
    }
