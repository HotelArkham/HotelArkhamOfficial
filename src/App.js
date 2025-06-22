import './App.css';
import LandingPage from './Components/Pages/Landing/landingpage.js';
import Sidebar from './Components/sidebar.js';

function App() {
  return (
    <div className='container-fluid p-0 m-0 background_div'>
        <Sidebar />
        <LandingPage />
    </div>
    );
}

export default App;
