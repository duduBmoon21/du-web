import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }

  a {
    font-size: 16px;
    color: #333;
    text-decoration: none;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 8px 16px;

    &:hover {
      background-color: #333;
      color: #fff;
    }
  }`
;
const ProjectCard = ({ title, description, link }) => {
    return (
      <CardContainer>
       
        <div  className="flex flex-col justify-center items-center gap-4">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </CardContainer>
    );
  }
  
  export default ProjectCard;