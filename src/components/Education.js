import React from "react";

const Education = () => (
    <div className="row education">
        <div className="three columns header-col">
            <h1>
                <span>Education</span>
            </h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>EPITA</h3>
                    <p className="info">
                        Ecole pour l'informatique et les techniques avancées
                        <span>&bull;</span>
                        <em className="date">2020</em>
                    </p>

                    <p>
                        Computer science engineer (Titre d'ingénieur français). Security, System and Network master.
                    </p>
                </div>
            </div>

            <div className="row item">
                <div className="twelve columns">
                    <h3>Bac S/SVT</h3>
                    <p className="info">
                        Spécialité mathématiques
                        <span>&bull;</span>
                        <em className="date">2014</em>
                    </p>

                    <p>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Education;
