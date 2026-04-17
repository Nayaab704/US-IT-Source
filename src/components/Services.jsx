function Services() {
  const services = [
    "Website Development",
    "Custom Software Development",
    "Inventory & Management Systems",
    "Game Development",
    "Business Process Automation",
    "Product Engineering",
  ];

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <p style={styles.kicker}>Services</p>
        <h2 style={styles.title}>Solutions built around real business needs</h2>
        <p style={styles.subtitle}>
          We help businesses with tailored digital solutions instead of one-size-fits-all tools.
        </p>

        <div style={styles.grid}>
          {services.map((service) => (
            <div
  key={service}
  style={styles.card}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
              <h3 style={styles.cardTitle}>{service}</h3>
              <p style={styles.cardText}>
                Professional, scalable, and business-focused development tailored to your goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 24px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  kicker: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "16px",
  },
  title: {
    fontSize: "40px",
    color: "#111827",
    margin: 0,
  },
  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    marginTop: "16px",
    maxWidth: "760px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "40px",
  },
  card: {
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: "#f9fafb",
  transition: "0.2s ease",
},
  
  cardTitle: {
    margin: 0,
    fontSize: "20px",
    color: "#111827",
  },
  cardText: {
    marginTop: "12px",
    color: "#4b5563",
    lineHeight: "1.7",
  },
};

export default Services;