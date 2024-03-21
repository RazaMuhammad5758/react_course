import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Model1=({show, handleClose})=> {
  

  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Describe your new tree</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <label htmlFor="name">Tree Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your tree name' />
            </div><br />
            <div>
                <label htmlFor="desc">Tree Description</label>
                <input type="text" name="desc" id="desc" placeholder='Enter tree description' />
            </div>
            <br />
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder='Enter your first name' />
            </div><br />
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder='Enter your last name' />
            </div><br />
            <div>
                <p>Gender</p>
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model1;