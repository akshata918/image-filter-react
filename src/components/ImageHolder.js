import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  figureStyle: {
    width: "100%"
  },
  noMargin: {
    margin: 0
  }
});
export default function ImageHolder({ images }) {
  const classes = useStyles();
  return images.map((image, index) => (
    <Grid item xs={4} key={index}>
      <Paper>
        <figure className={classes.noMargin} data-type={image.type}>
          <img
            src={image.src}
            alt={image.title}
            className={classes.figureStyle}
          />
          <figcaption>{image.title}</figcaption>
        </figure>
      </Paper>
    </Grid>
  ));
}
