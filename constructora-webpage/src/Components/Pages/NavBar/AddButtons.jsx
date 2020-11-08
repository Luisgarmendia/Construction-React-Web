import React from 'react';
import './Styles/AddButtons.css'
import Modal from './ModalProject'
import ModalUser from './ModalUser'
import ModalEmployee from './ModalEmployee'
import CustomerModal from './ModalCustomer';
import { changeStatus } from '../../../Redux/Actions/Modals';
import { useDispatch } from 'react-redux';

const AddButton = () => {
	const dispatch = useDispatch();

    const openModal = (a) =>  () => dispatch(changeStatus(a, true))
		
    return(
        <div className="container add-button">
			<Modal />
			<ModalUser />
			<ModalEmployee />
			<CustomerModal />
		
			<h1 className="text-center">Tecno Contruction Plus</h1>
			
			<h4>Add +</h4>
			
			<div className="row mt-3">
				<div className="col-sm-6 col-lg-3 col-xs-12 mb-2">
					<button onClick={openModal('project')} className="col btn btn-dark-moon btn-rounded">New project</button>
				</div>

				<div className="col-sm-6 col-lg-3 col-xs-12 mb-2">
					<button onClick={openModal('user')} className="col btn btn-dark-moon btn-rounded">New user</button>
				</div>

				<div className="col-sm-6 col-lg-3 col-xs-12 mb-2">
					<button onClick={openModal('employee')} className="col btn btn-dark-moon btn-rounded">New employee</button>
				</div>
				<div className="col-sm-6 col-lg-3 col-xs-12 mb-2">
					<button onClick={openModal('customer')} className="col btn btn-dark-moon btn-rounded">New customer</button>
				</div>
			</div>
    <hr className="my-4" />
</div>
    )
}

export default AddButton;