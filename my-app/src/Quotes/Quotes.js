import "./Quotes.css";
import QuoteBox from "./QuoteBox";
import { stockData } from "../data/stockData";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";

export default function Quotes() {
  return (
    <div className="quotes-container">
      <div className="quotes-header">
        <div className="header-title">Quotes</div>
        <div>
          <button className="header-button">Unfollow Sector</button>
        </div>
      </div>
      <div className="quotes-grid">
        <QuoteBox stockData={stockData.DAL} />
        <QuoteBox stockData={stockData.LUV} />
        <QuoteBox stockData={stockData.UAL} />
        <QuoteBox stockData={stockData.AAL} />
        <QuoteBox stockData={stockData.RYAAY} />
        <QuoteBox stockData={stockData.ZNH} />
        <QuoteBox stockData={stockData.CEA} />
        <QuoteBox stockData={stockData.ALK} />
        <QuoteBox stockData={stockData.LTM} />
        <QuoteBox stockData={stockData.JBLU} />
        <QuoteBox stockData={stockData.CPA} />
        <QuoteBox stockData={stockData.AZUL} />
      </div>
      <div className="footer">
        <button className="footer-button">
          Show more stocks{" "}
          <div className="footer-button-icon">
            <IoIosArrowDown />
          </div>
        </button>
      </div>
    </div>
  );
}
