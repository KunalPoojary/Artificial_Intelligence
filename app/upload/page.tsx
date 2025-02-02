// pages/index.js
import UploadForm from "../../components/uploadform";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl  p-6 shadow-lg rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">File Upload Page</h1>
        <UploadForm />
      </div>
    </div>
  );
}
