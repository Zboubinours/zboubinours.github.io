import React from "react";

const Work = () => (
    <div className="row work">
        <div className="three columns header-col">
            <h1>
                <span>Work</span>
            </h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>Milleis Banque, Paris</h3>
                    <p className="info">
                        Web developer
                        <span>&bull;</span>
                        <em className="date">Oct 2018 - Sept 2020</em>
                    </p>

                    <p>
                        Fullstack web developer at Milleis Banque (apprenticeship).
                    </p>
                </div>
            </div>

            <div className="row item">
                <div className="twelve columns">
                    <h3>Web editor (internship)</h3>
                    <p className="info">
                        FrAndroid, Paris
                        <span>&bull;</span>
                        <em className="date">Aug 2017 - Dec 2017</em>
                    </p>

                    <p>
                        News articles writing, smartphones - and other smart devices - reviews, videos on FrAndroid's
                        YouTube channel, video editing, community managing, etc.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
