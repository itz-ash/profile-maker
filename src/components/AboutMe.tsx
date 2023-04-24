import Divider from "./Divider";

const AboutMe = () => {
  const about = "lorem ";
  const aboutText = about.replace(/^\s+/, "");

  if (aboutText.length === 0) {
    return <div className="emptyDiv"></div>;
  } else {
    return (
      <>
        <div className="aboutMeContainer">
          <Divider />
          <div className="aboutMeHeading">About Me</div>
          <div className="aboutMeContent">{aboutText}</div>
        </div>
      </>
    );
  }
};

export default AboutMe;
