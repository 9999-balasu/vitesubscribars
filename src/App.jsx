
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSubscriber } from './features/subscriberSlice';
import './App.css';

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

<h1> Vite + React project with Redux Toolkit that allows users to add subscribers</h1>
      <h3>I've added a Subscriber Badges & Levels feature! 🎖️
Now, each subscriber will receive a badge based on their count:</h3>

<h2>Beginner (🟢) for 1-5 subscribers</h2>

<h2>Intermediate (🔵) for 6-10 subscribers</h2>

<h3>Expert (🔮) for 11+ subscribers</h3>
      <h1>Subscribers</h1>
      <p className="count">Total Subscribers: {count}</p>
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
          <li key={index} className="subscriber-item">
            {sub.name} <span className="badge">{sub.badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


/*import { useDispatch } from 'react-redux';
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

export default App;*/
