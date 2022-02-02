import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./index.css";

export default function Router() {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="*">
					<h1>404: Page not found</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
function Home() {
	return <p>Home Page</p>;
}
function About() {
	return <p>About</p>;
}
function Contact() {
	let { url, path } = useRouteMatch();
	return (
		<div>
			<h1>Contact</h1>
			<ul>
				<li>
					<Link to={url + "/c1"}>c1</Link>
				</li>
				<li>
					<Link to={url + "/c2"}>c2</Link>
				</li>
				<li>
					<Link to={url + "/c3"}>c3</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path}>
					<p>Please select any one.</p>
				</Route>
				<Route path={path + "/:id"}>
					<Individual />
				</Route>
			</Switch>
		</div>
	);
}
function Individual() {
	let { id } = useParams();
	return <p>{id}</p>;
}
