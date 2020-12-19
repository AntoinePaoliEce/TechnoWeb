import { Button } from '@material-ui/core'
import React, {useContext} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Context from '../Context';

export default ({creation, author, fetchMessages}) => {
    const {currentChannel,oauth,} = useContext(Context)
    const deleteMessage = async () => {
        await axios.post(
            `http://localhost:3001/channels/${currentChannel.id}/messages/${creation}`, 
        {
          id: currentChannel.id,
          creation: creation,
        })
        console.log("deleted")
        fetchMessages()
    }
    if(author === oauth.email)
      return (
        <Button onClick={deleteMessage}
          color="secondary">
          <DeleteIcon/>
        </Button>
      )
    else
      return <span></span>
}