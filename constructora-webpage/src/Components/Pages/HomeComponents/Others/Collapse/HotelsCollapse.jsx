import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Collapse } from 'react-bootstrap';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import AddNewHotel from '../Modal/AddNewHotel';

const HotelCollapse = () => {
    const isOpen = useSelector(state => state.collapseStatus.hotelOpen)
const dispatch = useDispatch();
const projectList = useSelector(state => state.projects.actives);

    const data = {
            columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150
            },
            {
                label: "Address",
                field: "address",
                sort: "asc",
                width: 100
            },
            {
                label: "City",
                field: "city",
                sort: "asc",
                width: 150
            },
            {
                label: "State",
                field: "state",
                sort: "asc",
                width: 150
            },
            ],
            rows: [
            {
                name: "Tiger Nixon",
                address: "System Architect",
                city: "Edinburgh",
                state: "61"
            },
            {
                name: "Yuri Berry",
                address: "Chief Marketing Officer (CMO)",
                city: "New York",
                state: "40",
            },
            {
                name: "Caesar Vance",
                address: "Pre-Sales Support",
                city: "New York",
                state: "21",
            },
            {
                name: "Doris Wilder",
                address: "Sales Assistant",
                city: "Sidney",
                state: "23",
            },
            {
                name: "Angelica Ramos",
                address: "Chief Executive Officer (CEO)",
                city: "London",
                state: "47",
            },
            ]
        };

        return(
            <Collapse in={isOpen}>
                <div>
                <button onClick={() => dispatch(changeStatus('hotel', true))}>new</button>
                <AddNewHotel />
                <MDBTable  striped>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
                </MDBTable>
                </div>
            </Collapse>
        )
}

export default HotelCollapse;