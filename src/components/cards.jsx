import { mentors } from "./constant";
import { Card } from "react-bootstrap";

const Mentors = () => {
  return (
    <div>
      <div className="mentor-card-container">
        {mentors.map((mentor, index) => (
          <Card key={index} className="mentor-card">
            <img className="mentor-card-image" src={mentor.imageUrl} />
            <Card.Body>
              <Card.Title>{mentor.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {mentor.university}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
