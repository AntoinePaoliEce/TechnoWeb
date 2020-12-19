/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { Grid, TextField , Paper} from '@material-ui/core';

import axios from 'axios';
import {useState} from 'react'
import AddList from './channelCreation/AddList'
import CreateChannel from './channelCreation/CreateChannel'

const useStyles = (theme) => ({
    root: {
      backgroundColor: '#373B44',
      overflow: 'hidden',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      justify: 'center',
      alignItems: 'center',
    },
    form: {
      width: '50%',
      margin: 'auto',
    }
  })

export default () => {
    const styles = useStyles(useTheme())
    //Get users
    const [fetch, setFetch] = useState(true)
    const [members, setMembers] = useState([])
    const [users, setUsers] = useState([])
    /*const addUsers = (users) => {
      fetchUsers()
    }*/
    const fetchUsers = async () => {
      setUsers([])
      const {data: users} = await axios.get(`http://localhost:3001/users`)
      console.log(users)
      setUsers(users)
    }
    if(fetch === true) {
      fetchUsers()
      setFetch(false)
    }
    //Get channel name
    const [channelName, setChannelName] = useState("")
    const handleChange = e => {
      setChannelName(e.target.value)
      console.log(e.target.value)
    }
    //Reset form when submit or cancel
    const resetForm = e => {
      setChannelName("")
      setMembers([])
    }

    return (
      <div css={styles.root}>
      <form css={styles.form}>
        <Grid
            container
            spacing={3}
            //direction="column"
            alignItems="center"
            justify="center">

            <Grid item xs={12}>
              <h2>New Channel</h2> 
            </Grid>
            <Grid item xs={12}>
                <TextField
                variant="outlined"
                label="Channel name"
                value={channelName}
                onChange={handleChange}
                required></TextField>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                <AddList users={users} members={members} setMembers={setMembers}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
                <CreateChannel channelName={channelName} members={members} resetForm={resetForm}/>
            </Grid>
        </Grid>
      </form>
      </div>
    );
  }
  