import React from "react";


const WeatherCard = props => {
  return (
    // <Card style={{ width: "10rem" }}>
    //   <Card.Body>
    //     <Card.Title>{props.Title||"Card Title"}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">{props.Subtitle||"Card Subtitle"}</Card.Subtitle>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>

    <div className="card">
      <div className="card-title">{props.Title || "Card Title"}</div>
      <div className="card-subtitle">{props.Subtitle || "Card Subtitle"}</div>
    </div>
  );
};

export default WeatherCard;