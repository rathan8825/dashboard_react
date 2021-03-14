import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import logo from "../../assets/logo.png";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import SettingsIcon from "@material-ui/icons/Settings";
import Dashboard from "../Dashboard/Dashboard";
import Reports from "../Reports/Reports";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		backgroundColor: "white",
		color: "black",
	},
	
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	grow: {
		flexGrow: 1,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

export default function Layout(props) {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar >
						<TextField
							style = {{width: 500}}
							id="outlined-basic"
							placeholder="Search.."
							variant="outlined"
						/>
						<div className={classes.grow} />
						<div style={{ display: "flex" }}>
							<p>Rathan</p>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
				>
					<div className={classes.toolbar} >
						<img
						src={logo}
						alt="CRM logo"
						style={{ width: "160px", height: "60px", marginLeft: "30px", marginTop: "5px" }}
						/>
					</div>
					
					<Divider />
					<List>
						<ListItem button key={"Dashboard"} >
							<ListItemIcon> 
								<DashboardIcon />
							</ListItemIcon>
							<Link to="/">
								<ListItemText  primary={<Typography style={{  color: '#1E90FF' }}>Dashboard</Typography>}/>
							</Link>
						</ListItem>

						<ListItem button key={"Reports"}>
							<ListItemIcon>
								<BookIcon />
							</ListItemIcon>
							<Link to="/reports">
								<ListItemText primary={<Typography type="body2" style={{  color: '#1E90FF' }}>Reports</Typography>} />
							</Link>
						</ListItem>

						<ListItem button key={"Analytics"}>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<Link to="/reports">
								<ListItemText primary={<Typography type="body2" style={{  color: '#1E90FF' }}>Analytics</Typography>} />
							</Link>
						</ListItem>
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Route path="/reports" exact component={Reports} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}
