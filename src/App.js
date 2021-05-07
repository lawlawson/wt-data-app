import Targets from './components/Targets';
import Filters from './components/Filters';
import Metrics from './components/Metrics';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='display-1'>WT Data App</h1>
      <Targets />
      <Filters />
      <Metrics />
    </div>
  );
}

export default App;
