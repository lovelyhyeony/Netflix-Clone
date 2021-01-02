import "./App.css";
import Banner from "./component/Banner";
import Row from "./component/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/** nav */}
      <Banner />
      <Row
        title="Netflix 오리지널"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="액션 영화" fetchUrl={requests.fetchActionMovies} />
      <Row title="코미디 영화" fetchUrl={requests.fetchComedyMovies} />
      <Row title="호러 영화" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="로맨스 영화" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="다큐멘터리 영화" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
