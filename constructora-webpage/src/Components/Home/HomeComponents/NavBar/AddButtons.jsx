import React from 'react';
import './Styles/AddButtons.css'
import Modal from './ModalProject'
import ModalUser from './ModalUser'


const AddButton = (props) => {
	const [open, setOpen] = React.useState(false);

    const openModal = () => {
        setOpen(true);
    }
	
    return(
        <div className="container">
			<Modal isOpen = {open} />
			
		
			<h1 className="text-center">Tecno Contruction Plus</h1>
			
			<h4>Add +</h4>
			
			<div className="row mt-3">
				<div className="col">
					<button onClick={openModal} className="col btn btn-dark-moon btn-rounded">New project</button>
				</div>

				<div className="col">
					<button className="col btn btn-dark-moon btn-rounded">New user</button>
				</div>

				<div className="col">
					<button className="col btn btn-dark-moon btn-rounded">New employee</button>
				</div>
			</div>
    <hr className="my-4" />
</div>
    )
}

export default AddButton;