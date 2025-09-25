import { Link } from "react-router-dom";

import arrow from "../assets/icons/arrow.svg";

const InfoBox = (({text, link, btnText}) => (
<div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="⏩" />
    </Link>
</div>
)
);

const renderContent = {
    1: (
        <h1 className=" text-base sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white
        mx-5">Hi👋 I am  <span className="font-semibold">Paul</span>
        <br />An Electrical and Electronics engineer🧑‍🏭 from Kenya</h1>
    ),
    2: (
        <InfoBox 
            text="I have worked on many projects and have built a lot of skills along the way"
            link="/about"
            btnText="See My Journey"
        />
    ),
    3: (
       <InfoBox 
            text="I have managed to build quite the portfolio showing my versatility"
            link="/projects"
            btnText="A sneak peek at what I've been cooking up"
        /> 
    ),
    4: (
        <InfoBox 
            text="Got a question? a nagging project? or just want to say hi? Lets chat"
            link="/contact"
            btnText="Contact Me here"
        /> 
    )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
    
  
};

export default HomeInfo;