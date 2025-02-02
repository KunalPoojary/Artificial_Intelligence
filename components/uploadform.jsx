"use client";
import { useState } from "react";

const UploadForm = () => {
  const [files, setFiles] = useState(null);
  const [policyFile, setPolicyFile] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handlePolicyFileChange = (e) => {
    setPolicyFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) return alert("Please select files!");
  
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    console.log(data);
  };

  const handlePolicyUpload = async (e) => {
    e.preventDefault();
  
    if (!policyFile) return alert("Please select a policy file!");
  
    const formData = new FormData();
    formData.append("policyFile", policyFile);
  
    const response = await fetch("http://127.0.0.1:5000/upload-policy", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    console.log(data);
  };
  

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 space-y-4 m-7"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Upload Any Sort of Information relate to Service
        </h2>
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="block w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          multiple
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Upload
        </button>
      </form>

      <form onSubmit={handlePolicyUpload} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Upload Policy File (.txt)
        </h2>
        <input
          type="file"
          accept=".txt"
          onChange={handlePolicyFileChange}
          required
          className="block w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
