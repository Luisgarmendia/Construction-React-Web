import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBDataTable } from "mdbreact";
import { Collapse } from 'react-bootstrap';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import AddNewHotel from '../Modal/AddNewHotel';
import Button from '../../../../Reusables/Button';

const HotelCollapse = () => {
    const isOpen = useSelector(state => state.collapseStatus.hotelOpen);
    const hotelsList = useSelector(state => state.hotels.hotels);
    const projectList = useSelector(state => state.projects.actives);
    const dispatch = useDispatch();
    
    const data = {
            columns: [
            {
                label: "name",
                field: 'name',
                sort: "asc",
                width: 150
            },
            {
                label: "address",
                field: "address",
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
            rows: hotelsList
        };

        return(
            <Collapse in={isOpen}>
                <div>
                    <div className="col-4">
                        <Button type="submit" text="New hotel" onClick={() => dispatch(changeStatus('hotel', true))} />
                    </div>
                <AddNewHotel />
                <MDBDataTable  striped
                columns={data.columns} 
                rows={data.rows} />
                </div>
            </Collapse>
        )
}

export default HotelCollapse;