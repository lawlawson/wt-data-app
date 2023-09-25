import Targets from './components/Targets/Targets';
import Filters from './components/Search/Search';
import Metrics from './components/Metrics/Metrics';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='display-1'>Employee Records</h1>
      <Targets />
      <Filters />
      <Metrics />
    </div>
  );
}

export default App;
