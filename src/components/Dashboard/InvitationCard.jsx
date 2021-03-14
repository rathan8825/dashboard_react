import React  from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";

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

const InvitationCard = () => {
  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "15px" }}>
        <Grid container>
          <Grid item xs={9}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              Invite your colleagues
            </div>
            <div style={{ fontSize: "14px", color: "grey", marginTop: "20px" }}>
              Invite your teammates to collaborate on insights and share
              reports.
            </div>
            <CustomButton>Add team members</CustomButton>
          </Grid>
          <Grid item xs={3}>
            <div style={{marginTop:"15px", color:"gray"}}>
              <span style={{ fontSize: "32px" }}>2/</span>5
              <div style={{fontSize: "16px"}}>Team members joined</div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default InvitationCard;
