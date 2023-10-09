import React from "react";
import WorkCard from "../../chip/WorkCard";
import ProjectCard from '../../chip/ProjectCard';
import { Link } from "react-router-dom";

import styled from "styled-components";
const Work = () => {
  const reversedData = [...projectData].reverse();
  return (
    
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Projects</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my projects.
        </p>
      </div>
      {/* card */}
      

        <POPUP className="img-content relative">


          <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
        
         <div
            data-aos="zoom-in"
       
            className="flex flex-col justify-center items-center gap-4"
          >
  
     <div className=" flex items-center justify-center gap-4">
       
       <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                 
         {projectData.map((project, index) => (
          
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            
          />
            </legend>
      

            </div>
            </div>
            </div>
        ))}
         <br className="w-[2px] bg-white" />
                 </div>  
     
      </POPUP>
 
      <br className="w-[2px] bg-white" /> <br className="w-[2px] bg-white" />
      
    </div>
  );
};

export default Work;
const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
const projectData = [
  {
    title: "Project 1",
    description: "",
 
  },
  {
    title: "Project 2",
    description: "",
  
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    description: "oin our community and receive the latest updates on Apps and Games",

  },
  {
    title: "Project 4",
    description: "yyyy",
  
    link: "https://example.com/project2"
  },
{
    title: "Project 5",
    description: "",
  
    link: "https://example.com/project2"
  }
];
