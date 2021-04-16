/** @format */

import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { Button } from "./components/button";
import { Input } from "./components/input";
import colors from "./config/colors";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className='App'>Welcome TO Events Confirmation | Happy Hacking</div>
      <form style={styles.form}>
        <Input placeholder='Username' icon={<FaUserAlt />} />
        <Input placeholder='Email' icon={<FaEnvelope />} />
        <Button text='SignUp' />
      </form>
    </div>
  );
}

const styles = {
  form: {
    width: "500px",
    padding: "20px",
    backgroundColor: colors.dark,
    height: "600px",
  },
};
export default App;
