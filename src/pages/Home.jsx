import React from 'react';
import HeroBento from '../components/HeroBento';
import FeatureCards from '../components/FeatureCards';
import TheProcess from '../components/TheProcess';
import RoofEngineering from '../components/RoofEngineering';
import SmartMonitoring from '../components/SmartMonitoring';
import FAQ from '../components/FAQ';
import GridIndependence from '../components/GridIndependence';

const Home = () => {
    return (
        <>
            <HeroBento />
            <FeatureCards />
            <TheProcess />
            <RoofEngineering />
            <SmartMonitoring />
            <FAQ />
            <GridIndependence />
        </>
    );
};

export default Home;
