import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
