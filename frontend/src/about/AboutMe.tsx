import React from "react";
import MyImage from "../portfolioPhoto.jpg"

export default function AboutMe() {

    return (
        <main className="about">
            <div className="description">
                <h1>About Me</h1>
                <div className="text-description">
                    <p>
                        Hi! My name is <strong>Yaroslav Stopenchuk</strong>. I am a frontend developer. <br/>
                        “Reality is created by the mind” and I love to create it with a computer and keyboard. I want to
                        create the most user-friendly websites which bring value and purpose. <br/>
                        My toolset contains HTML, CSS, JavaScript, TypeScript, React, React Router, Node.js, REST API,
                        GIT & MySQL. <br/>
                        Besides that, I love to meet new people, read books, hike, and learn new foreign languages.
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src={MyImage} alt="Its me"/>
            </div>
        </main>
    );
}
