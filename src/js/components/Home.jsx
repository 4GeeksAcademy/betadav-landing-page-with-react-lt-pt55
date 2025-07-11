import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import CardGrid from "./Cardgrid";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container-sm">
				<Jumbotron />
				<CardGrid />
			</div>
			<Footer/>
		</>
	)
};

export default Home;