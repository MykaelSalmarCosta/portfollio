export default function Projects() {
  const projects = [
    {
      title: "Conversor de Moedas",
      description: "Aplicação que consome uma API para converter moedas em tempo real.",
      link: "https://github.com/MykaelSalmarCosta/conversor-de-moedas"
    },
    {
      title: "Jogo do Amigo Secreto",
      description: "Aplicação para sortear e gerenciar um jogo de amigo secreto.",
      link: "https://github.com/MykaelSalmarCosta/amigo-secreto"
    },
    {
      title: "Jogo do Numero Secreto",
      description: "Jogo simples onde o usuário tenta adivinhar um número gerado aleatoriamente.",
      link: "https://github.com/MykaelSalmarCosta/JS-Game"
    },
  ]

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm mb-3">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
