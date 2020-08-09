import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const AddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const onHide = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{ span: 4, offset: 10 }}>
          <Button variant='secondary' onClick={() => setShowModal(true)}>
            <i className='fas fa-plus' /> Add Task
          </Button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => onHide()}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add a Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete='off' noValidate>
            <Form.Group controlId='formBasic'>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type='text' placeholder='Enter Task Name' />
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as='legend' column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type='radio'
                    label='Pending'
                    name='taskStatus'
                    id='pending'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    label='Completed'
                    name='taskStatus'
                    id='completed'
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={() => onHide()}>
            Cancel
          </Button>
          <Button variant='secondary' onClick={() => onHide()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddTask;
