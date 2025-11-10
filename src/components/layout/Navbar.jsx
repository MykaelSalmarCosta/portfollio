import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mykael.dev</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Início</Link>
        <Link to="/projects" className="hover:text-blue-400">Projetos</Link>
        <Link to="/certificates" className="hover:text-blue-400">Certificados</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </div>
    </nav>
  );
}
