import React from 'react';
import {Link, useParams} from "react-router-dom";
import examples from '../examples';

function Details() {

    const params = useParams();

    if (!params.id || !examples[params.id]){
        document.location.href = "/";
        return null;
    }

    let example = examples[params.id];

    let keys = Object.keys(examples);
    let curIndex = keys.indexOf(params.id);
    let nextId = curIndex+1 < keys.length ? curIndex+1 : 0;
    let lastId = curIndex-1 < 0 ? keys.length - 1 : curIndex-1;

    let buttons;

    if (example.isPrototype){
        buttons = <div className="detailsActions">
            <a target="_BLANK" href={example.demoUrl ? example.demoUrl : "#"}>
                <button className="button primary">View Prototype</button>
            </a>
        </div>;
    } else {
        buttons = <div className="detailsActions">
            <a target="_BLANK" href={example.demoUrl ? example.demoUrl : "#"}>
                <button className="button primary">View Demo</button>
            </a>
            <a target="_BLANK" href={example.githubUrl ? example.githubUrl : "#"}>
                <button className="button">View on Github</button>
            </a>
        </div>;
    }

    return (
        <div>
        <Link to={"/details/" + keys[lastId]} className="backButton">
            <img src="images/icons-arrow-left.svg" alt="Previous" />
        </Link>
        <Link to={"/details/" + keys[nextId]} className="nextButton">
            <img src="images/icons-arrow-left.svg" alt="Next" />
        </Link>
        <div className="pageWrapper contentContainer">
            <div className="detailsContainer">
                <div className="detailsImage">
                    <img src={example.imageUrl}
                         srcSet={example.imageUrl.replace('.png', '') + '@2x.png 800w, ' + example.imageUrl.replace('.png', '') + '@3x.png 1200w'}
                         alt="Example" />
                </div>
                <div className="detailsInfo">
                    <div>
                        <label>Name</label>
                        <h2>{example.name}</h2>
                    </div>
                    <div>
                        <label>Technology</label>
                        <p>{example.technology}</p>
                    </div>
                    <div>
                        <label>When?</label>
                        <p>{example.published}</p>
                    </div>
                    <div>
                        <label>Description</label>
                        <p>{example.description}</p>
                    </div>
                    {buttons}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Details;