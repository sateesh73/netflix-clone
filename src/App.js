import "./App.css";
import { Row } from "./component/Row";
import { request } from "./api/request";
import { Banner } from "./component/Banner";
import { Nav } from "./component/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originl"
        getUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="trending" getUrl={request.fetchTrending} />
      <Row title="Top Rated" getUrl={request.fetchTopRated} />
      <Row title="Action Movies" getUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" getUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" getUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" getUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" getUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
