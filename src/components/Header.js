import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Image Filter</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
