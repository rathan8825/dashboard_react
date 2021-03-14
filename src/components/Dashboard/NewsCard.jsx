import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import Chip from '@material-ui/core/Chip';

const CustomButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: blue[50],
    color: blue[600],
    marginTop: "20px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})(Button);

const NewsCard = (props) => {
  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "15px"}}>
      <Chip
        label={props.cardContent.badgeText}
        variant="outlined"
        size="small"
        style={{color:blue[600]}}
      />
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {props.cardContent.headerText}
            </div>
            <div style={{ fontSize: "14px", color: "grey", marginTop: "5px", minHeight:"100px" }}>
              {props.cardContent.content}
            </div>
            <CustomButton>Read now</CustomButton>    
      </Paper>
    </div>
  );
};

export default NewsCard;
