import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleShow}
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} id="exampleModal">
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Content for the modal body goes here */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default MyModal;
