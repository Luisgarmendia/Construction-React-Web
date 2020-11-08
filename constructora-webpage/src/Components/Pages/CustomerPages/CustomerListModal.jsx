import React from 'react';
import {Collapse} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { MDBDataTableV5 } from 'mdbreact';

const CustomerList = (props) => {
  const isOpen = useSelector(store => store.collapseStatus);
  const customerList = useSelector(store => store.clients.clientList);
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Contact Name',
        field: 'contactName',
        width: 270,
      },
      {
        label: 'Contact Phone',
        field: 'contactPhone',
        width: 200,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: customerList

  });
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <div className="mx-3">
      
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              checkbox
              headCheckboxID='id4'
              bodyCheckboxID='checkboxes4'
              getValueCheckBox={(e) => {
                showLogs2(e);
              }}
              checkboxFirstColumn
            />

      <div className="container primary"> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</div>
    </div>
  );
}

export default CustomerList;