import "./App.css";
import Routes from "./config/router";
import EmailVerify from "./pages/auth/email-verify/";

function App() {
  return (
    <div>
      <div className="App">
        <Routes />
      </div>
    </div>
  );
}

export default App;
