import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import butterfly from "../../assets/butterfly.jpeg";

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginTop: "20px",
		marginLeft: "30%",
	},
	media: {
		height: 300,
	},
});

export default function MediaCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				
				<CardMedia className={classes.media} src={butterfly} component="img" />
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2">
						{props.cardContent.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.cardContent.subHeadLine}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.cardContent.date}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.cardContent.creator}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
