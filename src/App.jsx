/*import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSubscriber, likeSubscriber } from './features/subscriberSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { count, names } = useSelector((state) => state.subscriber);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Fetching location...');

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        () => setLocation('Location access denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  const handleAddSubscriber = () => {
    if (name.trim()) {
      fetchLocation();
      setTimeout(() => {
        dispatch(addSubscriber({ name, location, likes: 0, joinedAt: new Date().toLocaleString() }));
        setName('');
      }, 1000);
    }
  };

  return (
    <div className="container">
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
            <span>{sub.name} <span className="badge">{sub.badge}</span></span>
            <span className="joined-at">Joined: {sub.joinedAt}</span>
            <span className="location">📍 {sub.location}</span>
            <div className="like-section">
              <button className="like-button" onClick={() => dispatch(likeSubscriber(index))}>❤️ {sub.likes}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/




/*import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSubscriber, likeSubscriber, addComment } from './features/subscriberSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { count, names } = useSelector((state) => state.subscriber);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Fetching location...');

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        () => setLocation('Location access denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  const handleAddSubscriber = () => {
    if (name.trim()) {
      fetchLocation();
      setTimeout(() => {
        dispatch(addSubscriber({ name, location, likes: 0, joinedAt: new Date().toLocaleString(), comment: '', commentStatus: '' }));
        setName('');
      }, 1000);
    }
  };

  const handleAddComment = (index, comment) => {
    dispatch(addComment({ index, comment }));
  };

  return (
    <div className="container">
      <h1>Subscribers</h1>
      <p className="count">Total Subscribers: {count}</p>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter subscriber name"
        />
        <button onClick={handleAddSubscriber} className="button">Add Subscriber</button>
      </div>
      <ul className="subscriber-list">
        {names.map((sub, index) => (
          <li key={index} className="subscriber-item">
            <span>{sub.name} <span className="badge">{sub.badge}</span></span>
            <span className="joined-at">Joined: {sub.joinedAt}</span>
            <span className="location">📍 {sub.location}</span>
            <div className="like-section">
              <button className="button" onClick={() => dispatch(likeSubscriber(index))}>❤️ {sub.likes}</button>
            </div>
            <div className="comment-section">
              <input
                type="text"
                placeholder="Leave a comment"
                onBlur={(e) => handleAddComment(index, e.target.value)}
              />
              {sub.comment && (
                <p className={`comment ${sub.commentStatus === '❌ Negative' ? 'negative' : 'positive'}`}>
                  {sub.comment} - {sub.commentStatus}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/

/*import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSubscriber, likeSubscriber } from './features/subscriberSlice';
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
            <span>{sub.name} <span className="badge">{sub.badge}</span></span>
            <span className="joined-at">Joined: {sub.joinedAt}</span>
            <div className="like-section">
              <button className="like-button" onClick={() => dispatch(likeSubscriber(index))}>❤️ {sub.likes}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/

/*import { useDispatch, useSelector } from 'react-redux';
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

export default App;*/


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
/*import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addSubscriber, likeSubscriber } from './features/subscriberSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { count, names } = useSelector((state) => state.subscriber);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    }
  }, []);

  const handleAddSubscriber = () => {
    if (name.trim()) {
      if (location === 'Fetching location...') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const updatedLocation = `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`;
            setLocation(updatedLocation);
            dispatch(addSubscriber({ name, location: updatedLocation }));
          },
          () => {
            setLocation('Location access denied');
            dispatch(addSubscriber({ name, location: 'Location access denied' }));
          }
        );
      } else {
        dispatch(addSubscriber({ name, location }));
      }
      setName('');
    }
  };

  return (
    <div className="container">
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
            <span>{sub.name} <span className="badge">{sub.badge}</span></span>
            <span className="joined-at">Joined: {sub.joinedAt}</span>
            <span className="location">📍 {sub.location}</span>
            <div className="like-section">
              <button className="like-button" onClick={() => dispatch(likeSubscriber(index))}>❤️ {sub.likes}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/


import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addSubscriber, likeSubscriber, removeSubscriber, addComment } from './features/subscriberSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { count, names, comments } = useSelector((state) => state.subscriber);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    }
  }, []);

  const handleAddSubscriber = () => {
    if (name.trim()) {
      if (location === 'Fetching location...') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const updatedLocation = `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`;
            setLocation(updatedLocation);
            dispatch(addSubscriber({ name, location: updatedLocation }));
          },
          () => {
            setLocation('Location access denied');
            dispatch(addSubscriber({ name, location: 'Location access denied' }));
          }
        );
      } else {
        dispatch(addSubscriber({ name, location }));
      }
      setName('');
    }
  };

  const handleAddComment = () => {
    if (commenterName.trim() && comment.trim()) {
      dispatch(addComment({ name: commenterName, comment }));
      setComment('');
      setCommenterName('');
    }
  };

  return (
    <div className="container">
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
            <span>{sub.name} <span className="badge">{sub.badge}</span></span>
            <span className="joined-at">Joined: {sub.joinedAt}</span>
            <span className="location">📍 {sub.location}</span>
            <div className="action-buttons">
              <button className="like-button" onClick={() => dispatch(likeSubscriber(index))}>❤️ {sub.likes}</button>
              <button className="remove-button" onClick={() => dispatch(removeSubscriber(index))}>❌ Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Comments</h2>
      <div className="input-group">
        <input
          type="text"
          value={commenterName}
          onChange={(e) => setCommenterName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <button onClick={handleAddComment}>Submit Comment</button>
      </div>
      <ul className="comment-list">
        {comments.map((cmt, index) => (
          <li key={index} className="comment-item">
            <span><strong>{cmt.name}:</strong> {cmt.comment}</span>
            <span className="comment-time">🕒 {cmt.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

