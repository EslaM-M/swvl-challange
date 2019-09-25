import React, { useState } from "react";
import { Store } from "../../../../store";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function NewBooking({ show, closeModal }) {
  const { state, dispatch } = React.useContext(Store);
  const [booking, setbooking] = useState({
    pickupStation: "",
    paymentType: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setbooking({ ...booking, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.bookingAllowed) {
      dispatch({
        type: "ADD_BOOKING",
        payload: {
          pickupStation: booking.pickupStation,
          PaymentType: booking.paymentType
        }
      });
    }
    if (state.bookings.length == 12) {
      closeModal();
    }
  };
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newBookingForm.pickupStation">
              <Form.Label>Example select</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="pickupStation"
                data-testid="select-station"
              >
                <option value="">Select Station</option>
                {state.route.map(station => {
                  return (
                    <option key={station.stationId} value={station.stationId}>
                      {station.stationName}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={4}>
                Payment Type
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  name="paymentType"
                  label="Cash"
                  data-testid="test-cash-value"
                  type="radio"
                  value="cash"
                  onChange={handleChange}
                />
                <Form.Check
                  name="paymentType"
                  label="Credit"
                  data-testid="test-credit-value"
                  onChange={handleChange}
                  type="radio"
                  value="credit"
                />
              </Col>
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
            disabled={
              booking.pickupStation === "" || booking.paymentType === ""
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewBooking;
