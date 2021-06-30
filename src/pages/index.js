import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from '../components/InfoSection/Data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
			<Footer />
		</div>
	);
};

export default Home;
