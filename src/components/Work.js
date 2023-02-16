import "./PortfoliocardStyle.css";
import Portfoliocard from "./Portfoliocard";
import WorkCardData from "./WorkCardData";
import React from 'react'

const Work = () => {
  return (
     <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind) =>{
                return(
                    <Portfoliocard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    website={val.website}
                    github={val.github}
                     />
                );
            })}

      </div>
    </div>
  );
};

export default Work;
