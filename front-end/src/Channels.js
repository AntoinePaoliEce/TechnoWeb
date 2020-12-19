import {useContext, useEffect} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
// Local
import Context from './Context'
import { useTheme } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'



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
    <ul style={styles.root}>
      { channels.map( (channel, i) => (
        <li key={i} css={styles.channel}>
          <Link
            href={`/channels/${channel.id}`}
            onClick={ (e) => {
              e.preventDefault()
              setCurrentChannel(channel.id)
              history.push(`/channels/${channel.id}`)
            }}
          >
            {channel.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
