import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { addDeviceHnd } from "../../Tools/Devices/devicesHandler";

const DeviceModalContainer = ({ isModalOpened, setIsModalOpened }) => {
  const formRef = useRef(null)

  const handleCreate = (e) => {
    e.preventDefault();
    let model = formRef.current[0].value;
    let color = formRef.current[1].value;
    addDeviceHnd({model, color})
    alert('device ' + model + ' added ')
    setIsModalOpened(false)
  }

  return (
    <Modal show={isModalOpened}>
      <Modal.Header closeButton onClick={() => setIsModalOpened(false)}>
        <Modal.Title>Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={(e) => handleCreate(e)} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="deviceModel" className="form-label">Model</label>
          <input required type="text" className="form-control" id="deviceModel" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="deviceColor" className="form-label">Color</label>
          <input required type="text" className="form-control" id="deviceColor"/>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      </Modal.Body>
    </Modal>
  );
};

export default DeviceModalContainer;
