import "./QuoteBox.css";
import { ImPlus } from "react-icons/im";
import finnhub from "../api/finnhub";
import React from "react";

export default function Quote(props) {
  const { stockData } = props;
  const isGreen = stockData.stockDifference > 0 ? true : false;
  const [price, setPrice] = React.useState(0);

  const FINNHUB_KEY = "bu39lnf48v6sn0ijjuq0";
  const getStockPrice = React.useCallback(
    async (stockTicker) => {
      const response = await finnhub.get("/quote", {
        params: {
          symbol: stockTicker,
          token: FINNHUB_KEY
        }
      });

      setPrice(response.data.c.toFixed(2));
    },
    [setPrice]
  );

  React.useEffect(() => {
    getStockPrice(stockData.stockTicker);
  }, [getStockPrice, stockData]);

  return (
    <div className="box">
      <div className={isGreen ? "box-header-green" : "box-header-red"}>
        <div className="box-header-title">{stockData.stockTicker}</div>
        <div className="box-header-icon">
          <ImPlus />
        </div>
      </div>
      <div className="box-content">
        <div className="stock-name">{stockData.stockName}</div>
        <div className="stock-price">{price}</div>
        <div className="stock-other-data">
          <div>
            {stockData.stockDifference > 0
              ? "+" + stockData.stockDifference.toFixed(2)
              : stockData.stockDifference.toFixed(2)}
          </div>
          <div>
            <div
              className={
                isGreen ? "percentage-symbol-green" : "percentage-symbol-red"
              }
            >
              ●{" "}
            </div>
            {stockData.stockPercentage}
          </div>
        </div>
      </div>
    </div>
  );
}
