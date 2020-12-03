import React, {useState} from 'react';
import '../styles/newsfeed.css'
import Linegraph from "./Linegraph";
import Timeline from "./Timeline";
import Chip from "@material-ui/core/Chip";
import {Avatar} from "@material-ui/core";

const Newsfeed = () => {

    const [popularTopics, setPopularTopics] = useState(
        ['Crypto', 'All-time High', 'FAANG', 'Portfolio', 'China', 'Trump', 'EE.UU', 'Crypto', 'Crypto', 'All-time High', 'FAANG', 'Portfolio', 'China', 'Trump', 'EE.UU', 'Crypto', 'All-time High', 'FAANG', 'Portfolio', 'China', 'Trump', 'EE.UU']
    );



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
                        <Timeline/>
                    </div>
                </div>
                <div className="newsfeed__buyingSection">
                    <h2>Buying Power</h2>
                    <h2> $4.11</h2>
                </div>
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p>Market Closed</p>
                        <h2>Happy Thanksgiving</h2>
                    </div>
                </div>
                <div className="newsfeed__popularLists__section">
                    <div className="newsfeed__popularLists__intro">
                        <h1>Popular Lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed__popularLists__badges">
                        {popularTopics.map(topic => (
                            <Chip
                                className='topic__badge'
                                variant='outlined'
                                label={topic}
                                avatar={<Avatar src={`https://avatars.dicebear.com/api/human/${topic}.svg`}/>}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Newsfeed;
