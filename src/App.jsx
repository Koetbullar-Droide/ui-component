import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Form, Modal } from 'react-bootstrap'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    class: '',
    happy: 0 // Neue State-Variable für das Select-Element
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
    <h1>Turnfest Anmeldung</h1>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Vorname</Form.Label>
        <Form.Control type="text" placeholder="Vorname" name='firstname' value={formData.firstname} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nachname</Form.Label>
        <Form.Control type="text" placeholder="Nachname" name='lastname' value={formData.lastname} onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Deine Stärkeklasse</Form.Label>
        <Form.Select aria-label="Default select example" name='class' value={formData.class} onChange={handleChange}>
        <option>keine Stärkeklasse</option>
        <option value="1">K1</option>
        <option value="2">K2</option>
        <option value="3">K3</option>
        <option value="3">K4</option>
        <option value="3">K5</option>
        <option value="3">K6</option>
        <option value="3">K7</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Wie sehr freust du dich?</Form.Label>
      <Form.Range min="-5" max="5" name='happy' value={formData.happy} onChange={handleChange}/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Du hast dich erfolgreich angemeldet!!!
          Hier deine Anmeldedaten:
          {JSON.stringify(formData, null, 2)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
