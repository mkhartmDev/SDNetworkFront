import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from "./Forgot.module.sass";
import { axiosInstance } from "../../../util/axiosConfig";

export const ForgotModal = () => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const forgotHandler = async () => {
    let response;
    response = await axiosInstance.post("/user/forgot", email);
  }

    const [email, setEmail] = useState('');


  return (
    <div>
        <a onClick={toggle}>Forgot Password</a>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Forgot Password</ModalHeader>
        <ModalBody>
        <div className={classes.ForgotFieldsContainer}>
        <div className={classes.Field}>
                <div className={classes.Label}>Email</div>
                <input className={classes.Input} 
                onChange={e => setEmail(e.target.value)}/>
        </div>
        </div>
        </ModalBody>
        <ModalFooter>
        <Button className={classes.ForgotButton} onClick={forgotHandler} >Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ForgotModal;