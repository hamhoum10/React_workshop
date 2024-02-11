import Event from "./Event"
function Events(){
    const e = [
        {
          "name": "Festival international de Carthage",
          "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
          "img": "event1.jpg",
          "price": 30,
          "nbTickets": 10,
          "nbParticipants": 10,
          "like": false
        },
        {
          "name": "Festival de la médina de Tunis",
          "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
          "img": "event2.jpg",
          "price": 15,
          "nbTickets": 4,
          "nbParticipants": 30,
          "like": false
        },
        {
          "name": "Journées cinématographiques de Carthage (JCC)",
          "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
          "img": "event3.jpg",
          "price": 7,
          "nbTickets": 20,
          "nbParticipants": 35,
          "like": false
        }
      ]
      
    return(<><Event event={e}></Event></>)
}
export default Events