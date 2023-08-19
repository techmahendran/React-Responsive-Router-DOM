const Work = ({ navContent }) => {
  return (
    <>
      <div className={`${navContent ? "route-content show" : "route-content"}`}>
        <h1>Work</h1>
        <p>
          react-router is the core package containing standard components and
          functionalities to implement routing in React applications. On the
          other hand, react-router-dom is a specialized package that you can use
          only in web-browser-based application development.
        </p>
      </div>
    </>
  );
};

export default Work;
