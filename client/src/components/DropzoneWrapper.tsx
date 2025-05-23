import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneWrapperProps {
  onFileAccepted: (fileUrl: string) => void;
}

const DropzoneWrapper: React.FC<DropzoneWrapperProps> = ({ onFileAccepted }) => {
  const handleAcceptedFile = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onFileAccepted(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onFileAccepted]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleAcceptedFile,
    accept: { 'application/pdf': ['.pdf'] },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #888',
        borderRadius: '8px',
        padding: '60px',
        textAlign: 'center',
        backgroundColor: '#2c2c2c',
        color: '#ccc',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      <p>📄 Drag and drop a PDF here, or click to select one</p>
    </div>
  );
};

export default DropzoneWrapper;
