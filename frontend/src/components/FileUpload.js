import React, { useState } from "react";
import upload from "../assets/upload.png";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const token = localStorage.getItem("access_token"); // Get token from local storage
    if (!token) {
      alert("You are not authenticated. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      alert("Upload successful!");
      navigate("/fileupload", { state: { esgData: response.data } });

    } catch (error) {
      alert("Upload failed!");
      console.error("Upload error:", error.response?.data || error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-4xl mx-auto text-center overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold mb-6">Upload Files</h3>
      <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg bg-green-100 mb-6">
        <img src={upload} alt="upload" className="h-24 md:h-32 mx-auto mb-4" />
        <p className="text-base md:text-lg">Drag and Drop file</p>
        <div className="font-bold my-4">OR</div>
        <form>
          <input type="file" onChange={handleFileChange} id="file-upload" className="hidden" />
          <label htmlFor="file-upload" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer text-base md:text-lg">
            Choose File
          </label>
        </form>
        {file && (
          <div className="mt-4 text-gray-700 text-base md:text-lg">
            <p>Chosen file: {file.name}</p>
          </div>
        )}
      </div>

      <button onClick={handleUpload} className="mt-6 px-8 py-3 bg-green-500 text-white rounded-lg">
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
