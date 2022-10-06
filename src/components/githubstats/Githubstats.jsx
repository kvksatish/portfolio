import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "./gt.css"

const Githubstats = () => {
    return (
        <div>
            <h1 className="skills-header" style={{ color: "001C55" }}>
                My Skills
            </h1>
            <div id='calenderDiv' style={{ backgroundColor: "white", color: "black", width: "90%", margin: "auto", marginTop: "5%", padding: "1.5% 2%", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <h2 className='git' style={{ color: "black" }}>My Github Contributions</h2>
                <GitHubCalendar style={{ width: "100%", margin: "auto" }} username="kvksatish" />
            </div>
            <div>
                <div id="gitStatis" >
                    <img height="100%" id='git1' src="https://github-readme-streak-stats.herokuapp.com/?user=kvksatish&" alt="kvksatish" />
                    <img height="100%" id='git2' src="https://github-readme-stats.vercel.app/api?username=kvksatish&show_icons=true&locale=en" alt="kvksatish" />
                </div>
            </div>
        </div>
    )
}

export default Githubstats