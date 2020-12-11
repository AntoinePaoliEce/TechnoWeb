/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { Grid, TextField , Paper, ButtonGroup, Button} from '@material-ui/core';
//Submit button
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react'
import AddList from './channelCreation/AddList'

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
    const [users, setUsers] = useState([])
    const [fetch, setFetch] = useState(true)
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
                label="Channel name"></TextField>
            </Grid>
            
            <Grid item xs={12}>
              <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                <AddList users={users} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup>
                  <Button 
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to='/'>
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    endIcon={<ArrowForwardIosIcon />}
                    component={Link}
                    to='/channels'>
                    Create
                  </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
      </form>
      </div>
    );
  }
  