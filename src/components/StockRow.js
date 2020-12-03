import React from 'react';
import '../styles/stockRow.css'
import StockSVG from '../assets/images/stock.svg'
import {db} from "../firebase";



const StockRow = ({name, price, openPrice, shares}) => {

    const percentage = ((price - openPrice) / openPrice) * 100;

    const buyStock = () => {

        db.collection('myStocks')
            .where("ticker", "==", name)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {
                    // update
                    querySnapshot.forEach(doc => {
                        db.collection('myStocks')
                            .doc(doc.id)
                            .update({
                                shares: doc.data().shares += 1
                            })
                    })
                } else {
                    // buy 1 share
                    db.collection('myStocks')
                        .add({
                            ticker: name,
                            shares: 1
                        })
                }
            })


    }

    return (
        <div className='row' onClick={buyStock}>
            <div className="row__intro">
                <h1>{name}</h1>
                <p>{shares && (shares + " shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} alt="stock" height={16}/>
            </div>
            <div className="row__numbers">
                <p className="row__price">${price}</p>
                <p className="row__percentage"
                   style={percentage < 0 ? {color: 'red'} : null}>{Number(percentage).toFixed(2)}%</p>
            </div>

        </div>
    );
};

export default StockRow;
