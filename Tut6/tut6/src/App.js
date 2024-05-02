import logo from './logo.svg';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { useEffect, useState } from 'react';
import { Button, Badge } from 'reactstrap';
import './App.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

/*
const table = {
  columns: [
    { headerName: "Make", field: "make", sortable: true },
    { headerName: "Model", field: "model", filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true },
  ],
  rowData: [
    { make: "Toyota", model: "Camry", price: 28000 },
    { make: "Ford", model: "Focus", price: 16700 },
    { make: "Hyundai", model: "Kona", price: 23500 },
  ]
};
*/


function App() {
  const columns = [
    { headerName: "Title", field: "title", sortable: true},
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id", sortable: true}
  ];
  
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://openlibrary.org/subjects/drama.json?published_in=2000")
      .then((result) => result.json())
      .then((data) => data.works)
      .then(works => works.map(book => {
          return {
            title: book.title,
            author: book.authors[0].name,
            editionCount: book.edition_count,
            id: book.cover_id
          };
        })
      )
      .then(books => setRowData(books));
  }, []);
  return (
    <div className='container'>
      <h1>Book Catalogue</h1>
      <p>
        <Badge color="success">{rowData.length}</Badge> Books published in 2000 in the Drama catagory
      </p>
      <div
        className="ag-theme-balham"
        style={{ height: "300px", width: "800px" }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={7}
          onRowClicked={(row) => navigate(`/book?title=${row.data.title}`)}
        />
      </div>
      <Button
      color="info"
      size="sm"
      className="mt-3"
      href="http://openlibrary.org/developers/api"
      target="_blank"
      > Go To Open Library API</Button>
    </div>
  );
}

export default App;
