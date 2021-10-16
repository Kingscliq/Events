import './App.css';
import Routes from './config/router';
import EmailVerify from './pages/auth/email-verify/';
import { store } from 'react-notifications-component';

export const setAlert = (title, message, type) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
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
