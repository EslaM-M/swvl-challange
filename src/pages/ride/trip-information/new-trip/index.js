import React, { useState } from "react";
import { Store } from "../../../../store";
import { Modal, Button, Form } from "react-bootstrap";

function NewTrip({ show, closeModal }) {
  const { dispatch } = React.useContext(Store);
  const [trip, settrip] = useState({
    arrivalStatus: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    settrip({ ...trip, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "START_TRIP",
      payload: {
        arrivalStatus: trip.arrivalStatus
      }
    });
    closeModal();
  };
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newBookingForm.arrivalStatus">
              <Form.Label>Arrival Status</Form.Label>
              <Form.Control
                data-testid="select-status"
                as="select"
                onChange={handleChange}
                name="arrivalStatus"
              >
                <option value="">Select Status</option>
                <option value="early">Early</option>
                <option value="ontime">On Time</option>
                <option value="late">Late</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={trip.arrivalStatus === ""}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTrip;
