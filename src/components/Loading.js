const Loading = () => {
  return (
    <div id="loading-div" className="d-flex justify-content-center">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
