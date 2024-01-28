import FeedVideos from './pages/Feed/Feed';
import { Route } from 'wouter';
import Upload from './pages/Upload/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Route path="/" component={FeedVideos} />
        <Route path="/upload" component={Upload} />
      </main>
    </div>
  );
}

export default App;
