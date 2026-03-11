import { useState } from "react";
import { mergePDFs } from "../api/pdfApi"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleMerge = async () => {
    try {
      const blobData = await mergePDFs(files);

      
      const url = URL.createObjectURL(new Blob([blobData], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url); 

    } catch (err) {
      console.error("Merge error:", err);
      alert("Error merging PDF files");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">PDF Merger</h1>

        <label
          htmlFor="fileUpload"
          className="w-full max-w-md p-6 border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-500 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p className="text-gray-600 text-center">
            <span className="font-medium text-blue-600">Click to upload</span>{" "}
            or drag and drop
          </p>
          <p className="text-sm text-gray-400 mt-1">PDF files only</p>
          <input
            id="fileUpload"
            type="file"
            multiple
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {files.length > 0 && (
          <ul className="mt-4 text-gray-700 text-sm w-full max-w-md">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-1"
              >
                <span>{file.name}</span>
                <span className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleMerge}
          disabled={files.length === 0}
          className={`mt-6 px-6 py-2 rounded-lg text-white font-medium transition ${
            files.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Merge PDFs
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
