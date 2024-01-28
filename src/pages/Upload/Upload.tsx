import { useState } from 'react';
import './styles.css';
import { publishFeed, uploadVideo } from '../../services/VideosService';
import { useLocation } from 'wouter';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useLocation();

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
      } else {
        if (data) {
          publishFeed({
            user_id: 1,
            src: (data as any).fullPath,
            description: 'hola desde el front end',
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
    <div>
      <h1>Upload your file</h1>
      <form className="form">
        <input id="file" type="file" name="file" onChange={handleFileChange} />
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <button className="publish" type="submit" onClick={handleUpload}>
          Publish
        </button>
      </form>

      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
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
