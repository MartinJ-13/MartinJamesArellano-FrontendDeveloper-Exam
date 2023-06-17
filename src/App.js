
import './index.css';
import DisplayCard from './components/displaycard';

function App() {
  return (
    <div className="web-page">
      <div>
        <h2>News Articles</h2>
        <div className="checkbox-div">
          <input type="checkbox" className="rounded-checkbox" />
        </div>
        <button className="publish">Publish</button>
        <button className="delete">Delete</button>
      </div>
      <DisplayCard text="fringilla"></DisplayCard>
      <DisplayCard text="fringilla"></DisplayCard>
      <DisplayCard text="fringilla"></DisplayCard>
    </div>
  );
}

export default App;
