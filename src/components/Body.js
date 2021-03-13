import React from "react";
import { Grid } from "@material-ui/core";
import ImageHolder from "../components/ImageHolder";
import FilterMenu from "../components/FilterMenu";
import { images } from "../ImageData.js";
import { menuItems } from "../ImageData.js";

export default class Body extends React.Component {
  state = {
    type: "all"
  };
  handleClick(event) {
    event.preventDefault();
    let filterValue = event.target.dataset.type;
    return this.setState({ type: filterValue, addClass: true });
  }
  filterImages() {
    let type = this.state.type;
    if (type === "all") {
      return images;
    } else {
      let newImages = images.filter((image) => image.type === type);
      return newImages;
    }
  }
  render() {
    return (
      <div style={{ padding: 15 }}>
        <FilterMenu
          menuItems={menuItems}
          handleClick={this.handleClick.bind(this)}
          linkClicked={this.state.type}
        />
        <Grid container spacing={3}>
          <ImageHolder images={this.filterImages()} />
        </Grid>
      </div>
    );
  }
}
