import React from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ErrorBoundary from "../components/ErrorBoundary";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <ErrorBoundary>
            <BallCanvas icon={technology.icon} />
          </ErrorBoundary>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");