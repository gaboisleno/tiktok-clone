import { useState } from 'react';
import './styles.css';
import { publishFeed, uploadVideo } from '../../services/VideosService';
import { useLocation } from 'wouter';
import { Loading } from '../../components/Loading/Loading';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useLocation();
  const [inputValue, setInputValue] = useState('');

  const handleChangeDesc = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setFile(evt.target.files[0]);
    }
  };

  const handleUpload = (evt: any) => {
    evt.preventDefault();
    setIsLoading(true);

    uploadVideo({ file }).then(([data, error]) => {
      if (error) {
        console.log(error);
        setIsLoading(false);
      } else {
        if (data) {
          publishFeed({
            user_id: 1,
            src: (data as any).fullPath,
            description: inputValue,
          }).then(() => {
            setIsLoading(false);
            setFile(null);
            setLocation('/');
          });
        }
      }
    });
  };

  return (
    <div className="publish">
      <button onClick={() => setLocation('/')}>back</button>
      {isLoading && <Loading></Loading>}

      <h1>Upload Video</h1>

      <form className="form">
        <input id="file" type="file" name="file" onChange={handleFileChange} />
        <textarea placeholder="description" name="description" value={inputValue} onChange={handleChangeDesc} />
        <button className="publish" type="submit" onClick={handleUpload}>
          Publish
        </button>
      </form>

      <div>
        {file && !isLoading && (
          <section>
            File details:
            <ul>
              <li>{file.name}</li>
              <li>{file.type}</li>
              <li>{file.size} bytes</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
