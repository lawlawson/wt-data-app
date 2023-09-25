import Targets from './components/Targets/Targets';
import Filters from './components/Search/Search';
import Metrics from './components/Metrics/Metrics';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Team Members</h1>
      <Filters />
      <Metrics />
    </div>
  );
}

export default App;
