import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Collapse } from 'react-bootstrap';
import { changeStatus } from '../../../../../../Redux/Actions/Modals';

const SummaryCollapse = () => {
    const isOpen = useSelector(state => state.collapseStatus.summaryProjectPay);
    const employeesList = useSelector(state => state.projects.employeesByProject);
    const dispatch = useDispatch();
    const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]);
    
    const dat = {
            columns: [
            {
                title: "First name",
                field: 'firstName',
                editable: 'never',
                sort: "asc",
            },
            {
                title: "Last name",
                field: "lastName",
                editable: 'never',
                sort: "asc",
            },
            {
                title: "Regular time",
                field: "regularTime",
                sort: "asc",
            },
            {
                title: "Over time",
                field: "overTime",
                sort: "asc",
            },
            {
                title: "Pay regular",
                field: "regularPay",
                sort: "asc",
            },
            {
                title: "Pay over time",
                field: "overPay",
                sort: "asc",
            },
            {
                title: "Total pay",
                field: "total",
                sort: "asc",
            },
            ],
            rows: employeesList
        };

        return(
            <Collapse in={isOpen}>
                <div>
                    <MaterialTable
                        title={`Summary ${Date.toString}` }
                        columns={dat.columns}
                        data={[
                            { nickName: 'Mehmet', firstName: 'Baran', lastName: 1987, salary: 63 },
                            { nickName: 'Zerya Betül', firstName: 'Baran', lastName: 2017, salary: 34 },
                        ]}
                        />
                </div>
            </Collapse>
        )
}


export default SummaryCollapse;