/** @format */

import "./App.css";
import { HeaderWidget } from "./widgets/header-widget";
import { Footer } from "./widgets/footer";
import { NavBar } from "./widgets/nav-bar/";
import { Button } from "./components/button";
import { Login } from "./pages/auth/login";
import { SignUp } from "./pages/auth/signup";

function App() {
	return (
		<div>
			<div className="App">
				<NavBar
					firstItem={"Home"}
					secondItem={"Events"}
					profileLink={`www.yahoo.com`}
					profile={"Profile"}
					button={<Button text={"Sign In"} className="btn" />}
				/>
				<HeaderWidget />
				<Login />
				<SignUp />
				<Footer />
			</div>
		</div>
	);
}

export default App;
