import React from "react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ProjectsPage from "../components/ProjectsPage";

export default function Home() {
  return (
    <div>
      <Header theme="dark" selectedMenuItem="About" />
      {/*<HomePage />*/}
      {/*<AboutPage />*/}
      <ProjectsPage />
    </div>
  );
}
