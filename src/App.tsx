import { useEffect } from 'react';
import './App.css';
import FeedVideos from './components/FeedVideos/FeedVideos';
import { getVideos } from './services/Videos.service';

function App() {
  useEffect(() => {
    getVideos().then((videos) => {
      console.log(videos);
    });
  });

  return (
    <div className="App">
      <main>
        <FeedVideos />
      </main>
    </div>
  );
}

export default App;
