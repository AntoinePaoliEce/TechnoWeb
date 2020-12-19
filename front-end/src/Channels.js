import {useContext, useEffect} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Context from './Context'
import { useTheme } from '@material-ui/core/styles';
import {useHistory, Link} from 'react-router-dom'
import { List, ListItem, Typography, Button } from '@material-ui/core';


const useStyles = (theme) => ({
    root: {
      width: '100%',
      backgroundColor: '#373B44',
    },
    channel: {
      padding: '.2rem .5rem',
      whiteSpace: 'nowrap',
    }
  })

export default () => {
  const {
    oauth,
    channels, setChannels,
    setCurrentChannel
  } = useContext(Context)
  const history = useHistory();
  const styles = useStyles(useTheme())
  useEffect( () => {
    const fetch = async () => {
      try{
        const {data: channels} = await axios.get('http://localhost:3001/channels', {
          headers: {
            'Authorization': `Bearer ${oauth.access_token}`
          }
        })
        setChannels(channels)
      }catch(err){
        console.error(err)
      }
    }
    fetch()
  }, [oauth, setChannels])
  return (
    <div css={styles.root}>
    <List>
      { channels.map( (channel, i) => (
        <ListItem css={styles.channel} button
            component={Link}
            to={`/channels/${channel.id}`}
            onClick={ (e) => {
              e.preventDefault()
              setCurrentChannel(channel.id)
              history.push(`/channels/${channel.id}`)
            }}
          >
            <Typography>{channel.name}</Typography>
        </ListItem>
      ))}
    </List>
    </div>
  );
}
