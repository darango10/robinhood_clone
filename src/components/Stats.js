import React, {useEffect, useState} from 'react';
import '../styles/stats.css'
import axios from 'axios'
import StockRow from "./StockRow";
import {db} from "../firebase";

const BASE_URL = 'https://finnhub.io/api/v1/quote?symbol=';
const TOKEN = 'bv3evbv48v6v86e89gd0';

const Stats = () => {

    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getMyStocks = () => {
        db.collection('myStocks')
            .onSnapshot(snapshot => {
                let tempStockData = [];
                let promises = [];
                snapshot.docs.map(doc => {
                    promises.push(getStockData(doc.data().ticker)
                        .then(res => {
                            tempStockData.push({
                                id: doc.id,
                                data: doc.data(),
                                info: res.data
                            })
                        })
                    )
                })
                Promise.all(promises).then(() => {
                    setMyStocks(tempStockData)
                })
            })


    }

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

        getMyStocks();

        Promise.all(promises).then(() => {
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
                <div className="stats__content">
                    <div className="stats__rows">
                        {/*Our Current Stocks*/}
                        {myStocks.map(stock => (
                            <StockRow
                                key={stock.id}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
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
                            <StockRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                shares={stock.shares}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stats;
