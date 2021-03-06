import React, { useEffect } from 'react';
import { MDBDataTableV5, MDBNavLink } from 'mdbreact';
import { getEmployees } from '../../Redux/EmployeesDucks'
import { useSelector, useDispatch } from 'react-redux';

export default function WithCheckBoxesEnd() {
  const employees = useSelector(state => state.employees)
  const dispatch = useDispatch()

  //useEffect(() => dispatch(getEmployees()));

  const [datatable, setDatatable] = React.useState({
    columns: [
        {
            label: 'NickName',
            field: 'nickname',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
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
        label: 'Movil',
        field: 'movil',
        width: 270,
      },
      {
        label: 'Email',
        field: 'email',
        width: 200,
      },
      {
        label: 'Labor',
        field: 'labor',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Project',
        field: 'project',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: employees.array
  });
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <div className="mx-3">
      <button onClick= {() => (dispatch(getEmployees()))} >presioname perro</button>
      
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