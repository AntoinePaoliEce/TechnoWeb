import {useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { Checkbox, Grid, TextField , Paper} from '@material-ui/core';

//https://material-ui.com/components/lists/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = (theme) => ({
    root: {
      backgroundColor: '#373B44',
      overflow: 'hidden',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    },
    card: {
        textAlign: 'center',
      },
  })

const initialValues = {
    channelName: 'New channel',
    email: '',
}

export default () => {
    const styles = useStyles(useTheme())

    //const [values, setValues] = useState();
    return (
      <div css={styles.root}>
      <form>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
        >
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
        </Grid>
      </form>
      </div>
    );
  }
  