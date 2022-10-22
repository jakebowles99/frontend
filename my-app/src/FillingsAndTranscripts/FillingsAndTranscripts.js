import Table from "./Table/Table";
import "./FillingsAndTranscripts.css";
import { tableData } from "../data/tableData";

export default function FillingsAndTranscripts() {
  return (
    <div className="fillings-container">
      <div className="title">Filings and Transcripts</div>
      <Table tableData={tableData} />
    </div>
  );
}
