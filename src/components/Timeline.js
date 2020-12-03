import React from 'react';
import '../styles/timeline.css'

const Timeline = () => {
    return (
        <div className='timeline'>
            <div className="timeline__buttonsContainer">
                <div className="timeline__button">LIVE</div>
                <div className="timeline__button">1D</div>
                <div className="timeline__button">1W</div>
                <div className="timeline__button">1M</div>
                <div className="timeline__button">YTD</div>
                <div className="timeline__button">1Y</div>
                <div className="timeline__button active">ALL</div>
            </div>
        </div>
    );
};

export default Timeline;
