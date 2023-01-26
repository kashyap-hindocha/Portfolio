import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{'height': '200px'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", height: 'auto'}}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", height: 'auto'}}>
          {props.role}
        </Card.Text>

        {/* github links button */}
        {/* <Button variant="primary" href={props.ghLink} target="_blank" >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Goto Site"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
