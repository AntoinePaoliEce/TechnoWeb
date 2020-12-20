import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
// import Icon from "@material-ui/core/Icon"
//Submit button
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

const useStyles = (theme) => {
  // See https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/OutlinedInput/OutlinedInput.js
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    form: {
      borderTop: `2px solid ${borderColor}`,
      padding: '.5rem',
      display: 'flex',
    },
    content: {
      flex: '1 1 auto',
      '&.MuiTextField-root': {
        marginRight: theme.spacing(1),
      },
    },
  }
}

export default ({
  channelName,
  members,
  resetForm,
}) => {
  const onSubmit = async () => {
    const {data: newChannel} = await axios.post(
      `http://localhost:3001/channels/`
    , {
      name: channelName,
      members: members,
      messages: [],
    })
    //console.log("channel created :")
    //console.log(channelName)
    //console.log(members)
    resetForm()
  }
  const onCancel = () => {
    resetForm()
  }
  return (
    <ButtonGroup>
      <Button 
        variant="contained"
        color="secondary"
        onClick={onCancel}
        component={Link}
        to='/'>
        Cancel
      </Button>
      {
        (channelName === "" && members.lengh === undefined) ? (
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<ArrowForwardIosIcon />}>
            Create
          </Button>
        ) : (
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<ArrowForwardIosIcon />}
            onClick={onSubmit}
            component={Link}
            to='/channels'>
            Create
          </Button>
        )
      }
      
    </ButtonGroup>
  )
}
