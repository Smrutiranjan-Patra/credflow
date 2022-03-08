import './App.css';
import Header from './components/Header.jsx';
import { Router } from "./Routes/Router";


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
