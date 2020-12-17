import { Button } from '@material-ui/core'
import React, {useContext} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';
import Context from '../Context';

export default (author) => {
    const {currentChannel,oauth} = useContext(Context)
    const modifyMessage = async () => {
        /*await axios.post(
            `http://localhost:3001/channels/${currentChannel.id}/messages/${creation.creation}`, 
        {
          id: currentChannel.id,
          creation: creation.creation,
        })*/
        console.log("modified")
    }
    if(author.author === oauth.email)
      return (
        <Button onClick={modifyMessage}
            color="secondary">
            <CreateIcon/>
        </Button>
      )
    else
      return <span></span>
}