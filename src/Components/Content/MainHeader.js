import "./MainHeader.css"
const MainHeader = () => {
  return (
    <div className="wrapper">
      <h1 id="home-link">Hi, I'm <span className="my-name">Jordan Prescott</span>.</h1>
      <h2>An inspiring React Developer.</h2>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available. It is also used to
        temporarily replace text in a process called greeking, which allows
        designers to consider the form of a webpage or publication, without the
        meaning of the text influencing the design.
      </p>
    </div>
  );
};

export default MainHeader;

