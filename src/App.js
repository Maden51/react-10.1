import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';

function App() {
  const toggleCancelBtn = () => {
    const btnReset = document.querySelector('.btn-reset');
    btnReset.classList.toggle('active');
}

  return (
    <div className="App">
      <ServiceFilter />
      <ServiceAdd toggleCancelBtn={toggleCancelBtn} />
      <ServiceList toggleCancelBtn={toggleCancelBtn} />
    </div>
  );
}

export default App;
