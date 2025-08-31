import React from 'react';
import { HomePage } from './components/HomePage';
import { Info } from './components/HomePage';
import {Header} from './components/HomePage'
import { Slider } from './components/HomePage';
import BaseStory from './components/BaseStory';
import Services from  './components/Services';
import  { About, BeautiText } from './components/About';
import ProjectSlider from './components/ProjectSlider';
import  { Article, Partner, Footer } from './components/Article';

function App() {
  return (
    <>
    <HomePage />
    <Info />
    <Slider />
    <Header />
    <BaseStory />
    <Services />
    <About />
    <BeautiText />
    <ProjectSlider />
    <Article />
    <Partner />
    <Footer />
    </>
  );
}

export default App;
