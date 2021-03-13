import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    },
    textTransform: "uppercase"
  },
  active: {
    background: "blue",
    color: "white",
    padding: "8px 15px",
    borderRadius: "4px",
    textDecoration: "none !important"
  },
  link: {
    padding: "8px 15px",
    textDecoration: "none !important"
  }
}));

export default function FilterMenu(props) {
  const classes = useStyles();

  return (
    <div style={{ padding: 15 }}>
      <Typography className={classes.root}>
        {props.menuItems.map((menuLink, index) => (
          <Link
            href="#"
            onClick={props.handleClick}
            data-type={menuLink}
            key={menuLink}
            className={
              menuLink === props.linkClicked ? classes.active : classes.link
            }
          >
            {menuLink}
          </Link>
        ))}
      </Typography>
    </div>
  );
}
