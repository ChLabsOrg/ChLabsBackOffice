import './App.css';
import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
  );
}

export default App;
