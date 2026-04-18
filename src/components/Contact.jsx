function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.kicker}>Contact</p>
          <h2 style={styles.title}>Let’s talk about your next project</h2>
          <p style={styles.text}>
            Whether you need a business website, a custom software platform,
            an inventory system, or process automation, we’re ready to help you build it.
          </p>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <p style={styles.label}>Email</p>
              <p style={styles.value}>monis.aziz@usitsource.com</p>
            </div>

            <div style={styles.infoCard}>
              <p style={styles.label}>Phone</p>
              <p style={styles.value}>(224) 306 - 0786</p>
            </div>

            <div style={styles.infoCard}>
              <p style={styles.label}>Location</p>
              <p style={styles.value}>USA</p>
            </div>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.formCard}>
            <div style={styles.formTopLine}></div>
            <h3 style={styles.formTitle}>Start a Conversation</h3>
            <p style={styles.formText}>
              Tell us what you’re trying to build and we’ll get back to you.
            </p>

            <div style={styles.fieldWrap}>
              <input id="name" placeholder="Your Name" style={styles.input} onFocus={(e) => {
  e.target.style.border = "1px solid #2563eb";
  e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.12)";
}}
onBlur={(e) => {
  e.target.style.border = "1px solid #dbe4f0";
  e.target.style.boxShadow = "none";
}} />

                <input id="email" placeholder="Your Email" style={styles.input} onFocus={(e) => {
  e.target.style.border = "1px solid #2563eb";
  e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.12)";
}}
onBlur={(e) => {
  e.target.style.border = "1px solid #dbe4f0";
  e.target.style.boxShadow = "none";
}}/>

                <textarea id="message" placeholder="Tell us about your project" style={styles.textarea} onFocus={(e) => {
  e.target.style.border = "1px solid #2563eb";
  e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.12)";
}}
onBlur={(e) => {
  e.target.style.border = "1px solid #dbe4f0";
  e.target.style.boxShadow = "none";
}}></textarea>
              
              
            
              
            </div>

            <button
  style={styles.button}
  onClick={() => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:contact@usitsource.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
  }}
>
  Send Inquiry
</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "110px 24px",
    background: "linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 0.95fr",
    gap: "50px",
    alignItems: "start",
  },
  left: {},
  kicker: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "16px",
  },
  title: {
    fontSize: "48px",
    lineHeight: "1.1",
    color: "#0f172a",
    margin: 0,
    fontWeight: "800",
  },
  text: {
    marginTop: "20px",
    color: "#475569",
    fontSize: "19px",
    lineHeight: "1.8",
    maxWidth: "700px",
  },
  infoGrid: {
    display: "grid",
    gap: "18px",
    marginTop: "36px",
    maxWidth: "560px",
  },
  infoCard: {
    backgroundColor: "rgba(255,255,255,0.72)",
    border: "1px solid rgba(255,255,255,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: "18px",
    padding: "22px 24px",
    boxShadow: "0 14px 34px rgba(15,23,42,0.08)",
  },
  label: {
    margin: 0,
    fontSize: "13px",
    fontWeight: "700",
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  value: {
    margin: "10px 0 0 0",
    fontSize: "24px",
    color: "#0f172a",
    fontWeight: "700",
    wordBreak: "break-word",
  },
  right: {},
  formCard: {
    background: "rgba(255,255,255,0.82)",
    border: "1px solid rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
  },
  formTopLine: {
    width: "76px",
    height: "5px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #2563eb 0%, #0f172a 100%)",
    marginBottom: "20px",
  },
  formTitle: {
    margin: 0,
    fontSize: "28px",
    color: "#0f172a",
    fontWeight: "800",
  },
  formText: {
    marginTop: "12px",
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "16px",
  },
  fieldWrap: {
    display: "grid",
    gap: "14px",
    marginTop: "24px",
  },
  input: {
    width: "100%",
    padding: "15px 16px",
    borderRadius: "12px",
    border: "1px solid #dbe4f0",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#ffffff",
  },
  textarea: {
    width: "100%",
    minHeight: "130px",
    padding: "15px 16px",
    borderRadius: "12px",
    border: "1px solid #dbe4f0",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    backgroundColor: "#ffffff",
    fontFamily: "inherit",
  },
  button: {
    marginTop: "18px",
    width: "100%",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    color: "#ffffff",
    padding: "15px 18px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "15px",
    boxShadow: "0 12px 28px rgba(15,23,42,0.16)",
  },
};

export default Contact;