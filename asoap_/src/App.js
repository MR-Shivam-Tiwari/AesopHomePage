import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f6f5e8' }}>
      <Home />
    </div>
  );
}

export default App;
