// Import Components
import Router from "./router";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-4">
        <Router />
      </div>
    </div>
  );
}

export default App;