import "./App.css";
import "./scss/style.scss";
import Faq from "./components/Faq";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Faq comment="宇宙人だな" />
      <Button bttText="必ず「ワレワレは・・・」て言ってしまう" />
      <Modal num="IPPON!" />
    </div>
  );
}

export default App;
