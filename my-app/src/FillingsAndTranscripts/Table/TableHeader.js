import './TableHeader.css';

export default function TableHeader() {
  return (
    <div className="table-header-row-container">
    <div className="table-header-cell">Ticker</div>
    <div className="table-header-cell">Type</div>
    <div className="table-header-middle-cell">Title</div>
    <div className="table-header-cell">Date</div>
    </div>
  );
}
