/* eslint-disable no-unused-vars */
import axios from "axios";
import Event from "./Event";
import { useEffect, useState } from "react";
import { Stack, Alert } from "react-bootstrap";
import fs from "fs/promises"; // Import fs module for file operations

function Events() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); 

      try {
        const response = await axios.get('./events.json');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBookEvent = async (eventId) => {
    try {
      const updatedData = data.map((item) =>
        item.id === eventId
          ? { ...item, nbParticipants: item.nbParticipants + 1, nbTickets: item.nbTickets - 1 }
          : item
      );

      setData(updatedData);

      // Write updated data back to events.json
      // await fs.writeFile('src/data/events.json', JSON.stringify(updatedData, null, 2));
    } catch (error) {
      console.error("Error booking event:", error);
    }
  };

  const buy = (eventId) => {
    const updatedData = data.map((item) =>
      item.id === eventId && item.nbTickets > 0
        ? { ...item, nbParticipants: item.nbParticipants + 1, nbTickets: item.nbTickets - 1 }
        : item
    );

    setData(updatedData);

    if (updatedData.find((item) => item.id === eventId)?.nbTickets === 0) {
      // If the event is sold out, display an alert
      setTimeout(() => {
        // Hide the alert after 2 seconds
        setData(updatedData.map((item) => (item.id === eventId ? { ...item, soldOut: true } : item)));
      }, 2000);
    }
  };

  return (
    <Stack direction="horizontal " gap={3}>
      {data.map((item) => (
        <Event
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          nbTickets={item.nbTickets}
          nbParticipants={item.nbParticipants}
          description={item.description}
          img={item.img}
          handleBookEvent={handleBookEvent}
          buy={buy}
        />
      ))}
    </Stack>
  );
}

export default Events;