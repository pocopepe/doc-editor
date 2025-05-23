import { useState } from 'react';
import DropzoneWrapper from './components/DropzoneWrapper';
import PdfViewer from './components/PdfViewer';
import NavBar from './components/NavBar';

const App = () => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);

  const handleGoHome = () => {
    setPdfFile(null); // Set pdfFile back to null
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      {/* NavBar is a direct child of the main flex-col container,
          so it stays fixed at the top and takes its natural height. */}
      <NavBar onHomeClick={handleGoHome} />

      {/* This is the new flex container that takes up ALL remaining vertical space
          and then divides itself horizontally into 1/3 and 2/3. */}
      <div className="flex flex-1"> {/* This div takes all remaining vertical space */}

        {/* PDF Drawer - Left 1/3 */}
        <div className="w-1/3 bg-gray-800 p-4 shadow-lg overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">PDF Documents</h2>
          <p className="text-gray-400">Your PDF list will go here!</p>
          {/* Future PDF list items will go here */}
        </div>

        {/* Main Content Area (PDF Viewer/Dropzone) - Right 2/3 */}
        {/* We keep the inner content centered if needed, but the main container now has w-2/3 */}
        <main className="w-2/3 px-4 py-8 overflow-y-auto">
          {!pdfFile ? (
            <div className="flex flex-col items-center justify-center min-h-full"> {/* min-h-full to make it fill its parent */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
                Share Your Code. View Your PDFs.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 text-center max-w-2xl">
                Upload your PDF documents securely for seamless viewing.
              </p>
              <DropzoneWrapper onFileAccepted={setPdfFile} />
            </div>
          ) : (
            <div className="py-4">
              <PdfViewer file={pdfFile} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;