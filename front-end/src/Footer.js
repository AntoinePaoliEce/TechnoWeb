/** @jsx jsx */
import { jsx } from '@emotion/core'
import { GridList, Grid, Typography, Box } from '@material-ui/core';

const styles = {
  footer: {
    height: '30px',
    backgroundColor: '#1f4287',
    flexShrink: 0,
  },
  contact: {
    width: "60%",
    marginLeft: "10px",
    border: "3px",
    padding: "10px",
    float: "left"
  },
  copyright: {
    width: "30%",
    margin: "auto",
    border: "3px",
    padding: "10px",
    float: "left",
  }
}

export default () => {
  return (
    <footer style={styles.footer}>
      <div css={styles.contact}>
        <Typography variant="caption">
          <Box fontWeight="fontWeightLight"
              fontStyle="oblique">
            Contact: antoine.paoli@edu.ece.fr | matheo.cambier@edu.ece.fr
          </Box>
        </Typography>
      </div>
      <div css={styles.copyright}>
        <Typography variant="caption">
          <Box fontWeight="fontWeightLight"
              fontStyle="oblique">
            © 2020 by ECE Messenger
          </Box>
        </Typography>
      </div>
    </footer>
  );
}
