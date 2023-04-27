import Divider from "./Divider";

const AboutMe = () => {
  const about =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quasi, at,  udantium sapiente quia enim totam. Nihil ";

  const aboutText = about.replace(/^\s+/, "");

  if (aboutText.length === 0) {
    return (
      <>
        <div className="noteContainerNon">note</div>
        <form>
          <label>
            <input
              className="formNon"
              type="text"
              name="name"
              placeholder="click to add note"
            />
          </label>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="aboutMeContainer">
          <div className="aboutMeHeading">About Me</div>
          <div className="aboutMeContent">{aboutText}</div>
          <div className="noteContainer">note</div>
          <form>
            <label>
              <input
                className="form"
                type="text"
                name="name"
                placeholder="click to add note"
              />
            </label>
          </form>
        </div>
      </>
    );
  }
};

export default AboutMe;
