/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';

function Event(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleBookEvent = () => {
    props.handleBookEvent(props.id);
    setIsBooked(true);
    setShowAlert(true);
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
  let timer;
  if (showAlert) {
    timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
  return () => {
    clearTimeout(timer);
  };
}, [showAlert]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`public/images/${props.img}`} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Price: {props.price}</Card.Text>
        <Card.Text>Number of tickets : {props.nbTickets}</Card.Text>
        <Card.Text>Number of Participants: {props.nbParticipants}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        {isBooked ? (
          <Alert variant="success">You have booked an event!</Alert>
        ) : (
          <div>
            <Button 
              variant="primary" 
              onClick={handleBookEvent} 
              disabled={props.nbTickets === 0}
            >
              Book an event
            </Button>
            {props.nbTickets === 0 && (
              <Alert variant="warning">This event is sold out!</Alert>
            )}
            <Button 
              variant={isLiked ? "danger" : "success"} 
              onClick={handleToggleLike}
            >
              {isLiked ? "Dislike" : "Like"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Event;