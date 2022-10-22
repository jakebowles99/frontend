import './TableRow.css';
import { HiOutlineDocument } from "react-icons/hi";

export default function TableRow(props) {
  const { rowData } = props;
  return (
    <div className="table-row-container">
    <div className="table-cell">{rowData.ticker}</div>
    <div className="table-cell">{rowData.type}</div>
    <div className="table-middle-cell"><HiOutlineDocument/> {rowData.title}</div>
    <div className="table-cell">{rowData.date}</div>
    </div>
  );
}
