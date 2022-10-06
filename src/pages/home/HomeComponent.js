import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export const Home = ({ theme: theme1 }) => {

  return (
    <div id="home" >

      <Greeting theme={theme1} />
      <Skills theme={theme1} />
      {/* <Footer theme={this.props.theme} /> */}
      <TopButton theme={theme1} />
    </div>
  );
}


export default Home;
