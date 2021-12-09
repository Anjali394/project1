import './App.css';
import NameList from './components/NameList';
import UserGreeting from './components/UserGreeting';
// import Welcome from './components/Welcome.js'

function App() {
  return (
    <div className="App">
        {/* <Welcome></Welcome> */}
        <UserGreeting/>
        <NameList/>
    </div>
  );
}

export default App;
