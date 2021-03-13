export const images = [
  {
    id: "image1",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image2",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image3",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image4",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image5",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image6",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image7",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image8",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image9",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image10",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image11",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image12",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image13",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image14",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image15",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image16",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image17",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image18",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image19",
    title: "Nature",
    src: "http://via.placeholder.com/640x360",
    type: "nature"
  },
  {
    id: "image20",
    title: "Food",
    src: "http://via.placeholder.com/640x360",
    type: "food"
  },
  {
    id: "image21",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image22",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  },
  {
    id: "image23",
    title: "City",
    src: "http://via.placeholder.com/640x360",
    type: "city"
  }
];

let types = images.map((item) => {
  return item.type;
});

export let menuItems = ["all", ...new Set(types)];
