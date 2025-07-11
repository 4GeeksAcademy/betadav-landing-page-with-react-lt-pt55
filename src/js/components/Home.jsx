import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container-sm">
				<Jumbotron />
				<Card />
			</div>
			<Footer/>
		</>
	)
};

export default Home;