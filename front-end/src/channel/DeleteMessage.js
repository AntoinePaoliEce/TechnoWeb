import { Button } from '@material-ui/core'
import React, {useContext} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Context from '../Context';

export default (creation) => {
    const {currentChannel,} = useContext(Context)
    const deleteMessage = async () => {
        await axios.post(
            `http://localhost:3001/channels/${currentChannel.id}/messages/${creation.creation}`, 
        {
          id: currentChannel.id,
          creation: creation.creation,
        })
        console.log("deleted")
    }
    return (
        <Button onClick={deleteMessage}
            color="secondary">
            <DeleteIcon/>
        </Button>
    )
}