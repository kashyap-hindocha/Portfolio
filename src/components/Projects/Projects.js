import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import voxtur from "../../Assets/Projects/voxtur.jpg";
import coldco from "../../Assets/Projects/coldco.jpg";
import chat from "../../Assets/Projects/chat-app.png";
import exportanalytics from "../../Assets/Projects/exportanalytics.jpg";
import petpos from "../../Assets/Projects/pet-pos-2.jpg";
import salonbooking from "../../Assets/Projects/salonbooking.jpg";
import zohomessenger from "../../Assets/Projects/zoho-messenger.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";
import ShareMe from "../../Assets/Projects/2022-10-28_00-33-12.png";

function Projects() {

  const projectsList = [
    {
      'id': 1,
      'title': 'Coldco Pallet-tracking',
      'description': 'Laravel based web-application to manage and track Couriers and pallets.',
      'imgPath': coldco,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': 'I was the team-member on this project building process, I Was responsible to add new features and updating the existing functionality as per requirements',
    },
    {
      'id': 2,
      'title': 'Export Analytics',
      'description': 'Laravel web-app to which is used to import and visualize the import/export data',
      'imgPath': exportanalytics,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': 'We were 2 team members who has initialzed this project from scratch and I was responsible for creating database schemas, Creating functionality to store data from excel-sheet, collecting and manipulating data from database, creating the dynamic web views to represent the large data in dynamic tables and graphs format.',
    },
    {
      'id': 3,
      'title': 'Smooth Messenger',
      'description': "Zoho CRM's messenger Extension to add on. Laravel as backend API to support and provide SMS services in Smooth messenger application using Twilio and Zoho SDK. This Messenger is being used to send and receive SMS/Whatsapp messages when your Zoho contacts are not available/online in ZoHo CRM chats.",
      'imgPath': zohomessenger,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': "I this project, I was responsible to integrate and manage Zoho SDK and Twilio for real time SMS services in laravel. The development process of this project starts with discussing and understanding the requirements from the client, Implementing the required functionality for chats in laravel as API service, test the updated functionality and deliver it to the client.",
    },
    {
      'id': 4,
      'title': 'Salon Booking',
      'description': 'Laravel web-app which is used for Salon. This laravel based web-application is used to book appointments and their services, Also for selling the their Salon products.',
      'imgPath': salonbooking,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': "My role in this project was to add, update and manage the coupens applied to the bills of the Salon services or purchases. Also updating the fix the promoting new coupens to existing and new customers using emails functionality using laravel application.",
    },
    {
      'id': 5,
      'title': 'Texas Doggy Day Care',
      'description': "A Laravel based web-applicationo for pet care takers. This application allows pet care takers to track and manage the bookings, dog's status, treatments, billing for the services and email updates to the customers.",
      'imgPath': petpos,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': 'My role in this project was to understand the requirements, Estimating the module and functionality, develop, implement and manage the FE + BE modules in Laravel. We were theree developer(s) team who has started building this project from scratch.',
    },
    {
      'id': 6,
      'title': 'Lightcycle',
      'description': 'A web-application to manage real estate business.',
      'imgPath': voxtur,
      'githubLink': '',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': false,
      'role': 'I was responsible for discussing and understanding requirements from clients on daliy bases and creating dynamic reports which describes the various details of the real estate property in reports. This reports are developed with CorePHP which then can be available for customers as PDF report. Developement from our side in this project has provided experience of working with AWS cloud 9',
    },
  ];

  const personalProjects = [
    {
      'id': 1,
      'title': 'Chat-App',
      'description': 'Real time chat using ReactJs, NodeJS, MongoDB and express.',
      'imgPath': chat,
      'githubLink': 'https://github.com/kashyap-hindocha/chat-app',
      'demoLink': 'https://quiet-caverns-00497.herokuapp.com',
      'isBlog': false,
      'isPersonal': true,
      'role': '',
      },
    {
      'id': 2,
      'title': 'Portfolio',
      'description': 'Portfolio app in reactJs.',
      'imgPath': portfolio,
      'githubLink': 'https://github.com/kashyap-hindocha/Portfolio',
      'demoLink': '',
      'isBlog': false,
      'isPersonal': true,
      'role': '',
      },
      {
        'id': 3,
        'title': 'ShareMe',
        'description': 'New Style(Masonry Layout) Social media app in React(FE) + Sanity(BE).',
        'imgPath': ShareMe,
        'githubLink': '...',
        'demoLink': 'https://shareme-kh.netlify.app',
        'isBlog': false,
        'isPersonal': true,
        'role': '',
        }
    ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects I've worked in (For Crest infosystems).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map((project) => 
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.githubLink}
                demoLink={project.demoLink} 
                role={project.role}
              />
            </Col>
          )}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Practice <strong className="purple">projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {personalProjects.map((project) => 
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.githubLink}
                demoLink={project.demoLink} 
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
