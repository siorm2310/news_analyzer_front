import LoginForm from './components/LoginForm/LoginForm';
import WordCloud from './components/WordCloud/WordCloud';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WordCloud />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/logout" element={<LoginForm />} /> */}
      </Routes>
    </div>
  );
}

export default App;
