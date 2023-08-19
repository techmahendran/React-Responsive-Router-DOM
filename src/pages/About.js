const About = ({ navContent }) => {
  return (
    <>
      <div className={`${navContent ? "route-content show" : "route-content"}`}>
        <h1>About</h1>

        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works.
        </p>
      </div>
    </>
  );
};

export default About;
