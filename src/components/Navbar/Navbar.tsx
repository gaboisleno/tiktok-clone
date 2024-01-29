import './index.css';
import { useLocation } from 'wouter';

export const Navbar = () => {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation('/upload');
  };

  return (
    <div className="navbar">
      <button onClick={handleClick}>upload</button>
    </div>
  );
};
