import { Button, TextField } from '@material-ui/core'
import React, {useContext, useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';
import Context from '../Context';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import DoneIcon from '@material-ui/icons/Done';

export default ({creation, author}) => {
    const [enterText, setEnterText] = useState(false)
    const [message, setMessage] = useState("")
    const {currentChannel,oauth} = useContext(Context)
    const handleClick = () => {
        setMessage("") //change for old message
        setEnterText(!enterText)
    }
    const handleChange = e => {
        setMessage(e.target.value)
        console.log(message)
    }
    const modifyMessage = async () => {
      const {data: messages} = await axios.get(`http://localhost:3001/channels/${currentChannel.id}/messages`)
      console.log(messages)
      const message = messages.map(message => {
        if(message.creation === creation.creation)
          return message
      })
      handleClick()
      console.log(message)
      console.log("modified")
    }
    if(author === oauth.email)
      return (
        <div>
        {enterText ?
            (<div>
                <TextField id="outlined-basic"
                        variant="outlined"
                        value={message}
                        onChange={handleChange}/>
                <Button onClick={handleClick}>
                    <KeyboardArrowLeftIcon/>
                </Button>
                <Button onClick={modifyMessage}>
                    <DoneIcon/>
                </Button>
            </div>) :
            (         
                <Button onClick={handleClick}
                    color="secondary">
                    <CreateIcon/>
                </Button>
          )
        }
        </div>
      )
    else
      return <span></span>
}