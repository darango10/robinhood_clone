import React, {useEffect, useState} from 'react';
import '../styles/stats.css'
import axios from 'axios'
import StockRow from "./StockRow";

const BASE_URL = 'https://finnhub.io/api/v1/quote?symbol=';
const TOKEN = 'bv3evbv48v6v86e89gd0';

const Stats = () => {

    const [stockData, setStockData] = useState([]);

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}${stock}&token=${TOKEN}`)
            .catch((e) => {
                console.log("ERROR", e.message)
            })
    }

    useEffect(() => {
        let tempStockData = [];
        const stockList = ['MDB', 'FIVN', 'PODD', 'WING', 'OTIS', 'AMZN', 'TSLA'];
        let promises = [];
        stockList.map((stock) => {
            promises.push(
                getStockData(stock)
                    .then(res => {
                        tempStockData.push({
                            name: stock,
                            ...res.data
                        })
                    })
            )
        })

        // getMyStocks();
        // console.log(tempStockData)

        Promise.all(promises).then(() => {
            // console.log(tempStockData);
            setStockData(tempStockData)
        })


    }, []);


    return (
        <div className='stats'>
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                    {/*<p>...</p>*/}
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                    {/*<p>...</p>*/}
                    {/*Stocks we can buy*/}
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {/*Our Current Stocks*/}
                        {stockData.map(stock => (
                           <StockRow stock={stock} key={stock.name}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stats;
