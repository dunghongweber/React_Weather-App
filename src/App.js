import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Loading from "./components/Loading";
import Error from "./components/Error";
import useFetch from "./hooks/useFetch";

function App() {
  const { isLoading, error, data, submitRequestToFetchAPI, city } = useFetch();

  // when a search button is clicked
  const handleSearch = (searchInput) => {
    submitRequestToFetchAPI(searchInput);
  };

  return (
    <div className="App">
      <Header></Header>

      <div
        id="body"
        className="container bg-dark border border-success shadow-lg text-white py-5 px-5"
      >
        <Form handleSearch={handleSearch} isLoading={!isLoading}></Form>

        {data && <Result result={data} city={city} />}
        {isLoading && <Loading />}
        {error && <Error />}
      </div>
    </div>
  );
}

export default App;
