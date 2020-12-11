import {forwardRef} from 'react'
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

export default forwardRef(({users,}, ref) => {
  const styles = useStyles(useTheme())
  
  return (
    <List >
      {users.map(user => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
        <ListItem key={user.id} button>
            <ListItemAvatar>
            <span>logo</span>
            </ListItemAvatar>
            <ListItemText id={labelId} primary={user.username}/>
            <ListItemSecondaryAction>
            <Checkbox
                edge="end"
            />
            </ListItemSecondaryAction>
        </ListItem>
        );
        })}
    </List>
  )
})

