import {forwardRef, useLayoutEffect, useRef, useImperativeHandle, useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';

//https://material-ui.com/components/lists/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Checkbox } from '@material-ui/core';
//import Avatar from '@material-ui/core/Avatar';

import Context from '../Context'

const useStyles = (theme) => ({
  root: {
    position: 'relative',
    flex: '1 1 auto',
    'pre': {
      
      overflowY: 'auto',
    },
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  message: {
    padding: '.2rem .5rem',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.05)',
    },
  },
  fabWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50px',
  },
  fab: {
    position: 'fixed !important',
    top: 0,
    width: '50px',
  },
})

export default forwardRef(({users, members, setMembers,}) => {
  const styles = useStyles(useTheme())
  const {oauth,} = useContext(Context)
  // Get member from tick
  const handleTick = e => {
    var userId = e.target.value
    var current_members = [...members] //used to check and avoid duplicates
    if(e.target.checked && !current_members.includes(userId)){
      setMembers([... members, userId])
    }
    else if(!e.target.checked && current_members.includes(userId))
      setMembers(current_members.filter(element => userId !== element))
  }
  setTimeout(() => {  console.log(members) }, 2000)
  return (
    <List >
      {users.map(user => {
        const labelId = `checkbox-list-secondary-label-${user.id}`
        if(user.username !== oauth.email)
        return (
        <ListItem key={user.id} button>
            <ListItemAvatar>
            <span>logo</span>
            </ListItemAvatar>
            <ListItemText id={labelId} primary={user.username}/>
            <ListItemSecondaryAction>
            <Checkbox
                value={user.id}
                edge="end"
                onChange={handleTick}
            />
            </ListItemSecondaryAction>
        </ListItem>
        );
        })}
    </List>
  )
})

