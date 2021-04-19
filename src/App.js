/** @format */

// import { FaEnvelope, FaUserAlt } from "react-icons/fa";
// import { Button } from "./components/button";
// import { Input } from "./components/input";
import colors from "./config/colors";

import "./App.css";
import { HeaderWidget } from "./widgets/header-widget";
import { Footer } from "./components/footer";

function App() {
	return (
		<div>
			<div className="App">
				<HeaderWidget />
				<Footer />
			</div>
			{/* <form style={styles.form}>
				<Input placeholder="Username" icon={<FaUserAlt />} />
				<Input placeholder="Email" icon={<FaEnvelope />} />
				<Button text="SignUp" />
			</form> */}
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
