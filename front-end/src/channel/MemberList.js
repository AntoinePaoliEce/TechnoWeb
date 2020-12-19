import React,{useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Context from '../Context';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const {currentChannel,} = useContext(Context)
  //console.log(currentChannel.lengh)
  const handleClick = () => {
    setOpen(!open);
  }
  //users
  /*const [fetch, setFetch] = useState(true)
  const [members, setMembers] = useState([])
  const fetchUsers = async () => {
    setMembers([])
    const {data: members} = await axios.get(`http://localhost:3001/channels/${currentChannel.id}/members`,
              {id: currentChannel.id})
    //setMembers(members)
    console.log('members:')
    console.log(members)
  }
  if(fetch === true) {
    fetchUsers()
    setFetch(false)
  }*/
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={"Members ("+3+")"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}