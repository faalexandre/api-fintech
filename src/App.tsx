import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resume from "./Pages/Resume";
import "./Style.css";

function App() {
  return (
    <div>
      <Sidenav />
      <Header />
      <Resume />
    </div>
  );
}

export default App;
