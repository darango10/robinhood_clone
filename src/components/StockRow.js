import React from 'react';
import '../styles/stockRow.css'

const StockRow = ({stock}) => {
    return (
        <div className='row'>
            <div className="row__intro">
                <h1>{stock?.name}</h1>
                <p>200 shares</p>
            </div>
            <div className="row__chart">

            </div>
            <div className="row__numbers">
                <p className="row__price">${stock?.c}</p>
                <p className="row__percentage">+0.84%</p>
            </div>

        </div>
    );
};

export default StockRow;
