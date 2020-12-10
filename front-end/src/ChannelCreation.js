import {useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { Checkbox, Grid, TextField , Paper, ButtonGroup, Button} from '@material-ui/core';
//Submit button
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//https://material-ui.com/components/lists/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = (theme) => ({
    root: {
      backgroundColor: '#373B44',
      overflow: 'hidden',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      //position: 'relative',
      justify: 'center',
      alignItems: 'center',
    },
    form: {
      width: '50%',
      margin: 'auto',
    }
  })

const fetchUsers = async () => {
  //const {data: users} = await axios.get(`http://localhost:3001/users`)
  //console.log(users)
}
export default () => {
    const styles = useStyles(useTheme())

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
              <List >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  return (
                    <ListItem key={value} button>
                      <ListItemAvatar>
                        <span>logo</span>
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          edge="end"
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup>
                  <Button variant="contained" 
                          color="secondary"
                          component={Link}
                          to='/'>
                    Cancel
                  </Button>
                  <Button variant="contained" 
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
  