export const metadata = {
  title: "🔮 দৈনিক রাশিফল | Vedic Horoscope API",
  description: "বাংলা দৈনিক রাশিফল ও জ্যোতিষ পঞ্চাং তথ্য - Powered by Astronomy Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        style={{
          margin: 0,
          fontFamily: "'Noto Sans Bengali', sans-serif",
          backgroundColor: "#f9fafb",
          color: "#111827",
        }}
      >
        <header
          style={{
            backgroundColor: "#4f46e5",
            color: "white",
            padding: "16px 24px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.6rem" }}>🔮 দৈনিক রাশিফল API</h1>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            আজকের রাশিফল ও পঞ্চাং তথ্য | Vercel Horoscope App
          </p>
        </header>
        <main style={{ padding: 24 }}>{children}</main>
        <footer
          style={{
            textAlign: "center",
            padding: "16px 0",
            backgroundColor: "#eef2ff",
            color: "#4f46e5",
            fontSize: "0.85rem",
            marginTop: 40,
          }}
        >
          © {new Date().getFullYear()} Vedic Horoscope API — Developed by AstroJaggaDaku
        </footer>
      </body>
    </html>
  );
}
