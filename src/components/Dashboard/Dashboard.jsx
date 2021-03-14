import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InvitationCard from "./InvitationCard";
import NewsCard from "./NewsCard";

const Dashboard = () => {
	const newsCardContent = [
		{
			badgeText: "NEW REPORT",
			headerText: "Black Friday & Cyber Week Insights",
			content:
				"The report looks at computer behavior at the end of last year during Black Friday and Cyber Week",
		},
		{
			badgeText: "NEW FEATURE",
			headerText: "Lorem Ipsum",
			content:
				"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
		},
	];
	return (
		<div>
			<Container>
				<Typography variant="h5">Welcome</Typography>
				<InvitationCard />
				<Grid container spacing={2}>
					{newsCardContent.map((news, index) => (
						<Grid item xs={6} key={"new" + index}>
							<NewsCard cardContent={news} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
