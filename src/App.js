import "./App.css";
import "./scss/style.scss";
import Faq from "./components/Faq";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Faq />
      <Button />
      <Modal />
    </div>
  );
}

export default App;
