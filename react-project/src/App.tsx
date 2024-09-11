import React, { useState, useRef, useEffect } from 'react';

function App() {
  const uploaderRef = useRef<React.JSX.IntrinsicElements['custom-uploader']>();
  const [files, setFiles] = useState<File[]>([]);

  function handleChange({ detail: [uploadedFiles] }: CustomEvent<[File[]]>) {
    if (uploadedFiles?.length) {
      if (uploaderRef.current) {
        uploaderRef.current.files = uploadedFiles;
      }
      setFiles(uploadedFiles);
    }
  }
  useEffect(() => {
    const uploader = uploaderRef.current;
    uploader?.addEventListener('change', handleChange as EventListener);
    return () => uploader?.removeEventListener('change', handleChange as EventListener);
  }, []);
  return (
    <custom-uploader multiple accept="image/png,image/jpeg" ref={uploaderRef}>
      <div slot="tip">Some custom tip content</div>
    </custom-uploader>
  );
}

export default App;
