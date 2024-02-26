import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="bg-white h-full w-full">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}
