import './App.css';
// import Targets from './components/Targets';
import Filters from './components/Filters';
import Metrics from './components/Metrics';

function App() {
  return (
    <div className='App'>
      <h1>WT Data App</h1>
      {/* <Targets /> */}
      <Filters />
      <Metrics />
    </div>
  );
}

export default App;
