const Contact = ({ navContent }) => {
  return (
    <>
      <div className={`${navContent ? "route-content show" : "route-content"}`}>
        <h1>Contact</h1>
        <p>
          The createContact method just creates an empty <b>contact</b> with no
          name or data or anything. But it does still create a record, promise!
          make one components directory and in that make
        </p>
      </div>
    </>
  );
};

export default Contact;
