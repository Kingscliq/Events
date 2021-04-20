/** @format */

// import { FaEnvelope, FaUserAlt } from "react-icons/fa";
// import { Button } from "./components/button";
// import colors from "./config/colors";

import "./App.css";
import { HeaderWidget } from "./widgets/header-widget";
import { Footer } from "./widgets/footer";
import { NavBar } from "./widgets/nav-bar/";
import { Button } from "./components/button";
import { CgMenuGridO } from "react-icons/cg";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar
          firstItemIcon={<CgMenuGridO />}
          firstItem={"it worked"}
          secondItem={"second me"}
          button={<Button text={"Sign In"} className="btn" />}
        />
        <HeaderWidget />
        <Footer />
      </div>
    </div>
  );
}

export default App;
