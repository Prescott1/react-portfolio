import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h1 id="about-link">Skills</h1>
      <div className="card-wrapper">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
        >
          <div className="style">HTML</div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <div className="style">CSS</div>
        </a>
        <a
          href="https://www.geeksforgeeks.org/css-preprocessor-sass/"
          target="_blank"
        >
          <div className="style">SASS</div>
        </a>
        <a href="https://getbootstrap.com/" target="_blank">
          <div className="style">Bootstrap</div>
        </a>
        <a href="https://www.javascript.com/" target="_blank">
          <div className="style">JavaScript</div>
        </a>
        <a href="https://reactjs.org/" target="_blank">
          <div className="style">React</div>
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <div className="style">Redux</div>
        </a>
        <a href="https://git-scm.com/" target="_blank">
          <div className="style">Git</div>
        </a>
        <a href="https://github.com/" target="_blank">
          <div className="style">GitHub</div>
        </a>
      </div>
    </div>
  );
};

export default Skills;
