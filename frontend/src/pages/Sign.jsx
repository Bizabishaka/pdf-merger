import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Sign() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add PDF-Signature</h1>
      </div>
      <Footer />
    </>
  );
}
