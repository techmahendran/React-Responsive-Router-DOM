const Home = ({ navContent }) => {
  return (
    <>
      <div className={`${navContent ? "route-content show" : "route-content"}`}>
        <h1>Home</h1>

        <p>
          Create React App doesn't <strong>include page routing</strong>. React
          Router is the most popular solution. React Router is a JavaScript
          framework that lets us handle client and server-side routing in React
          applications. It enables the creation of single-page web or mobile
          apps that allow navigating without refreshing the page. It also allows
          us to use browser history features while preserving the right
          application view
        </p>
      </div>
    </>
  );
};

export default Home;
