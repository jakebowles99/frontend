import "./Table.css";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function Table(props) {
  const { tableData } = props;
  return (
    <div className="table-container">
      <div className="table-header"></div>
      <TableHeader />
      <TableRow rowData={tableData.ZNH}/>
      <TableRow rowData={tableData.RYAAY}/>
      <TableRow rowData={tableData.AAL}/>
      <TableRow rowData={tableData.VLRS1}/>
      <TableRow rowData={tableData.DAL1}/>
      <TableRow rowData={tableData.DAL2}/>
      <TableRow rowData={tableData.VLRS2}/>
      <TableRow rowData={tableData.GOL}/>
    </div>
  );
}
