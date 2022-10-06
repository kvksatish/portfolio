import React, { useState, useEffect } from "react";

import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";

import { greeting } from "../../portfolio.js";
import Githubstats from "../../components/githubstats/githubstats";

export default function Projects() {

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          ;
        })}
      </div>

      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />

    </div>
  );
}
