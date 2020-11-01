import React from 'react';
import './Styles/AddButtons.css'
import Modal from './ModalProject'
import ModalUser from './ModalUser'
import ModalEmployee from './ModalEmployee'


const AddButton = (props) => {
	const [open, setOpen] = React.useState(false);
	const [openUser, setOpenUser] = React.useState(false);
	const [openEmployee, setOpenEmployee] = React.useState(false);

    const openModal = (a) =>  () => {
		switch(a){
			case 'project':
				setOpen(true);
			break;
			case 'user':
				setOpenUser(true);
			break;
			case 'employee':
				setOpenEmployee(true);
			break
			default:
		}
    }
	
    return(
        <div className="container add-button">
			<Modal isOpen = {open}  modal = "project" />
			<ModalUser isOpen = {openUser} />
			<ModalEmployee isOpen = {openEmployee} />
		
			<h1 className="text-center">Tecno Contruction Plus</h1>
			
			<h4>Add +</h4>
			
			<div className="row mt-3">
				<div className="col">
					<button onClick={openModal('project')} className="col btn btn-dark-moon btn-rounded">New project</button>
				</div>

				<div className="col">
					<button onClick={openModal('user')} className="col btn btn-dark-moon btn-rounded">New user</button>
				</div>

				<div className="col">
					<button onClick={openModal('employee')} className="col btn btn-dark-moon btn-rounded">New employee</button>
				</div>
			</div>
    <hr className="my-4" />
</div>
    )
}

export default AddButton;