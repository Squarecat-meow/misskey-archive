import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CallbackPage from "./Pages/CallbackPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
