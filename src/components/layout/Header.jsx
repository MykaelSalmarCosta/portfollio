export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 mb-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Mykael Costa</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-600">Sobre</a>
          <a href="#projects" className="hover:text-blue-600">Projetos</a>
          <a href="#contact" className="hover:text-blue-600">Contato</a>
        </nav>
      </div>
    </header>
  )
}