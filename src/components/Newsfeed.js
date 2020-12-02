import React from 'react';
import '../styles/newsfeed.css'
import Linegraph from "./Linegraph";

const Newsfeed = () => {
    return (
        <div className='newsfeed'>
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,524.84</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <Linegraph/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsfeed;
