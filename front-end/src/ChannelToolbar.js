import { useContext } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import { List, ListItem,ListItemText, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from './Context';
import MemberList from './channel/MemberList';

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
  const {currentChannel,} = useContext(Context)
  const styles = useStyles(useTheme())
  //console.log(currentChannel)
  //Delete Channel
  const deleteChannel = async () => {
    await axios.post(
      `http://localhost:3001/channels/delete/${currentChannel.id}`,
      {
        id: currentChannel.id,})
  }
  return (
    //<div css={styles.hello}>hello</div>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <Button color="secondary" onClick={deleteChannel}
                component={Link}
                to="/">
            <DeleteIcon/>
            <ListItemText primary="Delete"/>
          </Button>
        </ListItem>
        <ListItem>
          {//<ListItemText primary="Members" />
}
          <MemberList/>
        </ListItem>
      </List>
  );
}
