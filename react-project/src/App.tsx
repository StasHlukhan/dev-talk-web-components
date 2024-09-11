import React, { useRef, useEffect, useState } from 'react';

function App() {
  const uploaderRef = useRef<HTMLElement | null>(null);
  const [files, setFiles] = useState([])
  function handleChange (event: CustomEvent) {
    console.log(event)
  }
  useEffect(() => {
    const handleFileChange = (event: CustomEvent) => {
      console.log(event.detail);
      const fileArray = event.detail[0]
      setFiles(fileArray);
      
    };
    const uploader = uploaderRef.current;

    if (uploader) {
      uploader.addEventListener('change', handleFileChange as EventListener);
    }

    return () => {
      if (uploader) {
        uploader.removeEventListener('change', handleFileChange as EventListener);
      }
    };
  }, []);
  useEffect(() => {
    if (uploaderRef.current) {
      uploaderRef.current.fileList = files;
    }
  }, [files]);

  console.log('value: ',files)
    return (
    <div>

      <custom-uploader
        value={files}
        handleChange={(event:CustomEvent)=>handleChange(event)}
        ref={uploaderRef}
      ></custom-uploader>
    </div>
  );
};


export default App;
