import Footer from '../Footer';
import Navbar from '../Navbar';
import Table from './table';

export default function Stats() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen w-full p-2 bg-white">
        <Table />
      </div>
      <Footer />
    </>
  );
}
