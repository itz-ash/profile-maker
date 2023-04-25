import Divider from "./Divider";

const AboutMe = () => {
  const about =
    "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus perspiciatis maiores quidem aperiam eligendi consectetur, architecto velit, optio eum placeat esse possimus reprehenderit quis commodi atque. Delectus, obcaecati labore!";

  const aboutText = about.replace(/^\s+/, "");

  if (aboutText.length === 0) {
    return <div className="emptyDiv"></div>;
  } else {
    return (
      <>
        <div className="aboutMeContainer">
          <div className="aboutMeHeading">About Me</div>
          <div className="aboutMeContent">{aboutText}</div>
        </div>
      </>
    );
  }
};

export default AboutMe;
