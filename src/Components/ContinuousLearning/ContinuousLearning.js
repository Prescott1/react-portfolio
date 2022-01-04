import "./ContinuousLearning.css";

const ContinuousLearning = () => {
  return (
    <div>
      <h1 id="about-link">Continuous learning</h1>

      <div className="card-wrapper">

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank" rel="noreferrer"
        >
          <div className="style">HTML</div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank" rel="noreferrer">
          <div className="style">CSS</div>
        </a>

        <a
          href="https://www.geeksforgeeks.org/css-preprocessor-sass/"
          target="_blank" rel="noreferrer"
        >
          <div className="style">SASS</div>
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <div className="style">Bootstrap</div>
        </a>
        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
          <div className="style">JavaScript</div>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <div className="style">React.js</div>
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <div className="style">Redux</div>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <div className="style">Git</div>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <div className="style">GitHub</div>
        </a>
        <a href="https://semantic-ui.com/" target="_blank" rel="noreferrer">
          <div className="style">Semantic-UI</div>
        </a>
      </div>
    </div>
  );
};

export default ContinuousLearning;
