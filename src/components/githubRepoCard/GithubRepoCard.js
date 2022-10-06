import React from "react";

import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import Tilt from 'react-parallax-tilt';
import Button from "../button/Button";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" >
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} >
          <div className="szman" >
            <div >
              <Tilt className="repo-img" onClick={() => openRepoinNewTab(repo.url)} >
                <img src={repo.img} /></Tilt>
              <Button text={" Github Link "}


                href={repo.url}
                newTab={true}
                theme={theme} />

              <Button text={"Deployed Link"}
                href={repo.deploy}
                newTab={true}
                theme={theme} />
            </div>
            <div className="repodes" >
              <div className="repo-name-div">


                <p className="repo-name" style={{ color: theme.text }}>
                  {repo.name}
                </p>
              </div>
              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description}
              </p>
              {
                repo.ts && <><p className="repo-description" style={{ color: theme.text }}><u>Tech Stack :</u></p>
                  {<ul>
                    {repo.ts.map((ele) => {
                      return <li> <p className="repo-description" style={{ color: theme.text }}>{ele}

                      </p></li>
                    })}
                  </ul>}
                </>
              }

              {
                repo.fet && <> <p className="repo-description" style={{ color: theme.text }}><u>Features :</u> </p>
                  {<ul>
                    {repo.fet.map((ele) => {
                      return <li> <p className="repo-description" style={{ color: theme.text }}>{ele}

                      </p></li>
                    })}
                  </ul>}
                </>
              }{
                repo.ars && <><p className="repo-description" style={{ color: theme.text }}><u>Areas of Responsibilities :</u></p>
                  {<ul>
                    {repo.ars.map((ele) => {
                      return <li> <p className="repo-description" style={{ color: theme.text }}>{ele}

                      </p></li>
                    })}
                  </ul>}
                </>
              }


            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
