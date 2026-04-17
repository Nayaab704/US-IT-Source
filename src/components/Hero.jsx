import { useEffect, useState } from "react";

function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.bgGrid}></div>

      <div
        style={{
          ...styles.orb,
          ...styles.orbOne,
          transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.6}px)`,
        }}
      ></div>

      <div
        style={{
          ...styles.orb,
          ...styles.orbTwo,
          transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)`,
        }}
      ></div>

      <div
        style={{
          ...styles.orb,
          ...styles.orbThree,
          transform: `translate(${offset.x * 0.35}px, ${offset.y * -0.35}px)`,
        }}
      ></div>

      <div style={styles.lineTrailOne}></div>
      <div style={styles.lineTrailTwo}></div>

      <div style={styles.particleWrap}>
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.particle,
              left: `${8 + index * 7}%`,
              animationDelay: `${index * 0.6}s`,
              animationDuration: `${8 + (index % 4)}s`,
            }}
          ></span>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.kicker}>Custom Software & Digital Solutions</p>

          <h1 style={styles.title}>
            Building websites, business systems, and software that help companies grow.
          </h1>

          <p style={styles.description}>
            US IT Source helps businesses with website development, custom software,
            inventory systems, game development, and process automation tailored to real business needs.
          </p>

          <div style={styles.actions}>
            <a href="#contact" style={styles.primaryButton}>Get in Touch</a>
            <a href="#services" style={styles.secondaryButton}>Our Services</a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.card}>
            <div style={styles.cardTopLine}></div>
            <h3 style={styles.cardTitle}>What We Build</h3>
            <ul style={styles.list}>
              <li>Business Websites</li>
              <li>Inventory Systems</li>
              <li>Custom Software</li>
              <li>Game Development</li>
              <li>Process Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)",
    padding: "120px 24px 110px",
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 75%)",
    pointerEvents: "none",
  },
  orb: {
    position: "absolute",
    borderRadius: "999px",
    filter: "blur(70px)",
    opacity: 0.75,
    pointerEvents: "none",
    transition: "transform 0.25s ease-out",
  },
  orbOne: {
    width: "340px",
    height: "340px",
    background: "rgba(37, 99, 235, 0.28)",
    top: "40px",
    left: "-60px",
    animation: "driftOne 10s ease-in-out infinite",
  },
  orbTwo: {
    width: "300px",
    height: "300px",
    background: "rgba(15, 23, 42, 0.18)",
    bottom: "-40px",
    right: "8%",
    animation: "driftTwo 12s ease-in-out infinite",
  },
  orbThree: {
    width: "240px",
    height: "240px",
    background: "rgba(255, 255, 255, 0.9)",
    top: "35%",
    right: "22%",
    animation: "driftThree 14s ease-in-out infinite",
  },
  lineTrailOne: {
    position: "absolute",
    top: "18%",
    left: "-10%",
    width: "45%",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.45) 50%, rgba(37,99,235,0) 100%)",
    transform: "rotate(-8deg)",
    animation: "trailMoveOne 7s linear infinite",
    pointerEvents: "none",
  },
  lineTrailTwo: {
    position: "absolute",
    bottom: "20%",
    right: "-10%",
    width: "38%",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.28) 50%, rgba(15,23,42,0) 100%)",
    transform: "rotate(10deg)",
    animation: "trailMoveTwo 9s linear infinite",
    pointerEvents: "none",
  },
  particleWrap: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
  particle: {
    position: "absolute",
    bottom: "-20px",
    width: "6px",
    height: "6px",
    borderRadius: "999px",
    background: "rgba(37,99,235,0.28)",
    boxShadow: "0 0 12px rgba(37,99,235,0.18)",
    animationName: "particleFloat",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "60px",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  left: {},
  kicker: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "18px",
  },
  title: {
    fontSize: "56px",
    lineHeight: "1.08",
    fontWeight: "800",
    color: "#0f172a",
    margin: 0,
    maxWidth: "760px",
  },
  description: {
    fontSize: "19px",
    lineHeight: "1.8",
    color: "#475569",
    marginTop: "28px",
    maxWidth: "720px",
  },
  actions: {
    display: "flex",
    gap: "16px",
    marginTop: "36px",
    flexWrap: "wrap",
  },
  primaryButton: {
    textDecoration: "none",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "14px 24px",
    borderRadius: "12px",
    fontWeight: "600",
    boxShadow: "0 10px 24px rgba(15,23,42,0.15)",
  },
  secondaryButton: {
    textDecoration: "none",
    border: "1px solid #cbd5e1",
    color: "#0f172a",
    backgroundColor: "#ffffff",
    padding: "14px 24px",
    borderRadius: "12px",
    fontWeight: "600",
    boxShadow: "0 6px 18px rgba(15,23,42,0.05)",
  },
  right: {},
  card: {
    animation: "floatCard 4s ease-in-out infinite",
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.75)",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
  },
  cardTopLine: {
    width: "72px",
    height: "5px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #2563eb 0%, #0f172a 100%)",
    marginBottom: "20px",
  },
  cardTitle: {
    margin: 0,
    fontSize: "24px",
    color: "#0f172a",
  },
  list: {
    marginTop: "20px",
    paddingLeft: "20px",
    color: "#334155",
    lineHeight: "2",
    fontSize: "17px",
  },
};

export default Hero;