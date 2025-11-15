
export default function Profile() {
  return (
    <div style={styles.page}>
      <main style={styles.card} aria-live="polite">
        <svg
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={{ marginBottom: 16 }}
        >
          <path
            d="M2 17h20M5 11l3-7 3 7M16 11l3-7 3 7M8 21h8"
            stroke="#ffb703"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 style={styles.title}>Página em construção</h1>
        <p style={styles.subtitle}>Estamos trabalhando aqui. Volte em breve!</p>

        <div style={styles.progress} aria-hidden="true">
          <div style={styles.progressBar} />
        </div>

        <div style={styles.actions}>
          <a href="/" style={styles.link}>
            Ir para início
          </a>
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(5,10,25,1) 0%, rgba(12,18,30,1) 100%)",
    color: "#e6eef8",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    padding: 24,
  },
  card: {
    textAlign: "center",
    maxWidth: 560,
    padding: "40px 32px",
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
  },
  title: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.05,
    letterSpacing: -0.4,
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 22,
    color: "#cfe3ff",
    fontSize: 15,
  },
  progress: {
    height: 10,
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 18,
  },
  progressBar: {
    height: "100%",
    width: "42%",
    background:
      "linear-gradient(90deg, #ffb703 0%, #fb8500 50%, #ffb703 100%)",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 8,
    color: "#071133",
    background: "#ffd166",
    textDecoration: "none",
    fontWeight: 600,
    transition: "transform .15s ease, box-shadow .15s ease",
  },
};
