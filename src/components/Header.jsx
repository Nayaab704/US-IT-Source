function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="#hero" style={styles.brand}>
          <div style={styles.logoBox}></div>

          <div>
            <div style={styles.logoWrap}>
  <div style={styles.logoIcon}>
  <div style={styles.logoGlow}></div>
  <span style={styles.logoLetters}>US</span>
</div>
  
  

  <div>
    <div style={styles.logoText}>US IT Source</div>
    <div style={styles.logoSub}>Software • Systems • Digital Solutions</div>
  </div>
</div>
            
          </div>
        </a>

        <nav style={styles.nav}>
          <a href="#hero" style={styles.link}>Home</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>

        <a href="#contact" style={styles.button}>
          Book a Consultation
        </a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(255,255,255,0.82)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(15,23,42,0.08)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "18px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
  },
  
  logoWrap: {
  display: "flex",
  alignItems: "center",
  gap: "10px", // reduced from 14 → tighter
},

logoIcon: {
  width: "40px",  // smaller
  height: "40px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 6px 14px rgba(15,23,42,0.2)", // softer
},

logoLetters: {
  fontSize: "14px",
  fontWeight: "700",
  background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
},




logoText: {
  fontSize: "17px", // slightly smaller
  fontWeight: "600", // less bold → more premium
  color: "#0f172a",
},

logoSub: {
  fontSize: "11px",
  color: "#64748b",
},
  
 

logoGlow: {
  position: "absolute",
  width: "120%",
  height: "120%",
  background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
  top: "-10%",
  left: "-10%",
},
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  link: {
    textDecoration: "none",
    color: "#334155",
    fontSize: "15px",
    fontWeight: "600",
    transition: "0.2s ease",
  },
  button: {
    textDecoration: "none",
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    color: "#ffffff",
    padding: "13px 22px",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "700",
    boxShadow: "0 10px 24px rgba(15,23,42,0.16)",
  },
};

export default Header;