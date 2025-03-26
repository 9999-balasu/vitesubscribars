



import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css'
import { addSubscriber } from './features/subscriberSlice';

function App() {
  const dispatch = useDispatch();
  const { count, names } = useSelector((state) => state.subscriber);
  const [name, setName] = useState('');

  const handleAddSubscriber = () => {
    if (name.trim()) {
      dispatch(addSubscriber(name));
      setName('');
    }
  };

  return (
    <div className="container">
      <h3>Vite + React project with Redux Toolkit that allows users to add subscribers</h3>
      <h1>Subscribers</h1>
      <p>Total Subscribers: <span className="count">{count}</span></p>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter subscriber name"
        />
        <button onClick={handleAddSubscriber}>Add Subscriber</button>
      </div>
      <ul className="subscriber-list">
        {names.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
