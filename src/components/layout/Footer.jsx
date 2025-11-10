export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-6 mt-12 shadow-inner">
      <div className="max-w-4xl mx-auto text-center text-sm">
        <p>Entre em contato: <a href="mailto:seuemail@exemplo.com" className="text-blue-600">mykaelsalmarcosta@gmail.com</a></p>
        <p className="mt-2 text-gray-500">© {new Date().getFullYear()} Mykael Costa</p>
      </div>
    </footer>
  )
}
