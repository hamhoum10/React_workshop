import { useParams } from "react-router-dom";

function Event() {
    const { username } = useParams();

  return (
    <div>
      <h1>About {username}</h1>
      <p>
        This is personalized information about the user {username}.
      
      </p>
    </div>
  );
}

export default Event;