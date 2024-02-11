import { Card } from "react-bootstrap";

function Event(props){
     
    
        return (<>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt="this " />
      <Card.Body>
        <Card.Title>event name </Card.Title>
        <Card.Text> price</Card.Text>
        <Card.Text> nbr ticket</Card.Text>
        <Card.Text> nbr of participant</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 

    

        </>);
    
}
 
export default Event ;