import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MediaCard from "./MediaCard";

const Reports = () => {
  const mediaCardContent = [
    {
      title: "Image-1",
      subHeadLine: "They are Lovely",
      date: "10-10-2020",
      creator: "Rathan",
    },
    {
      title: "Image-2",
      subHeadLine: "Lorem Ipsum",
      date: "10-10-2020",
      creator: "Rathan",
    },
  ];
  return (
    <div>
      <Container>
        <Typography variant="h5">REPORTINGS</Typography>
        <Grid container spacing={2}>
          {mediaCardContent.map((media, index) => (
            <Grid item xs={10} key={"media"+index}>
              <MediaCard cardContent={media} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Reports;
