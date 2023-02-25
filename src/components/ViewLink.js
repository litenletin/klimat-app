import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../views/styles.css';
import pratbubbla from '../images/interaktiv-pratbubbla.png';
import maskot from '../images/Maskot-ljusare.png';
import bredbubbla from '../images/bredbubbla.png';

/* UPPDATERAD:
- Ändrat kompenenten till att visa mer information istället för att visa källa
- Lagt in props från TemperaturView
- Fixat till CSS
*/

/* Andvänt bReact ootstrap Modal för att skapa en popupruta vid klick:
https://react-bootstrap.github.io/components/modal/ */

function ViewLink(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Knapp i form av pratbubbla med text*/}
      <div
        variant="primary"
        onClick={handleShow}
        className="ViewLink"
        style={{
          backgroundColor: '',
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'Courier New',
          fontSize: '12pt',
          marginTop: '10px',
          textAlign: 'center',
          display: 'grid',
          cursor: 'pointer',
          transition: 'transform .2s;', /* Animation */
        }}
      >
        <img
          style={{
            height: '77px',
            width: '180px',
          }}
          src={pratbubbla}
          alt="Liten pratbubbla med text"
        />
        <div
          style={{
            position: 'absolute',
            fontSize: '12pt'
          }}
        >
          {props.button}
        </div>
      </div>
      {/* Kryssruta för att stänga ner poprutan */}
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'>
        <Modal.Header closeButton style={{ border: '' }}>
          {/* Rubrik */}
          <Modal.Title>
            <h2
              className="font-link-h2"
              closeButton
              id="example-custom-modal-styling-title"
              style={{ textAlign: 'center' }}
            >
              Visste du detta?
            </h2>
          </Modal.Title>
        </Modal.Header>
        {/* Underrubriker med länktext under vardera rubrik*/}
        <Modal.Body>
          <Container
            style={{ width: '100%', }}>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  marginTop: '60px',
                }}
              >
                <img
                  src={maskot}
                  alt="Jordglob med ansikte, webbapplikationens maskot"
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: '30px 30px 80px 30px',
                  }}
                />
              </div>
              <img
                src={bredbubbla}
                alt="Pratbubbla"
                style={{
                  width: '550px',
                  height: '200px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  marginTop: '93px',
                  marginLeft: '280px',
                  width: '450px'
                }}
              >
                <p className='font-link-p'>
                  {props.text}
                </p>
              </div>
            </Col>
          </Container>
        </Modal.Body>
        {/* Knapp för att stänga popup-rutan, lagt till className="quizButton" */}
        <Modal.Footer>
          <Button
            className="quizButton"
            variant="secondary"
            onClick={handleClose}
          >
            Stäng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewLink;
