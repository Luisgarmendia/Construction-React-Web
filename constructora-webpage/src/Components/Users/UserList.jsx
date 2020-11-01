import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function WithCheckBoxesEnd() {
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
    rows: [
      {
        name: 'Tiger Nixon',
        labor: 'System Architect',
        nickname: 'Edinburgh',
        project: '61',
        salary: '$320',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Michael Bruce',
        labor: 'Javascript Developer',
        nickname: 'Singapore',
        project: '2011/06/27',
        salary: '$183',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Donna Snider',
        labor: 'Customer Support',
        nickname: 'New York',
        project: '2011/01/25',
        salary: '$112',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Tiger Nixon',
        labor: 'System Architect',
        nickname: 'Edinburgh',
        project: '61',
        salary: '$320',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Michael Bruce',
        labor: 'Javascript Developer',
        nickname: 'Singapore',
        project: '2011/06/27',
        salary: '$183',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Donna Snider',
        labor: 'Customer Support',
        nickname: 'New York',
        project: '2011/01/25',
        salary: '$112',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Tiger Nixon',
        labor: 'System Architect',
        nickname: 'Edinburgh',
        project: '61',
        salary: '$320',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Michael Bruce',
        labor: 'Javascript Developer',
        nickname: 'Singapore',
        project: '2011/06/27',
        salary: '$183',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
      {
        name: 'Donna Snider',
        labor: 'Customer Support',
        nickname: 'New York',
        project: '2011/01/25',
        salary: '$112',
        movil: '+504 4332-4332',
        email: 'bnit@kmlo.com'
      },
    ],
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