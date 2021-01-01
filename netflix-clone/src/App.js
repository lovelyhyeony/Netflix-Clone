import "./App.css";
import Row from "./component/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="Netflix 오리지널" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
