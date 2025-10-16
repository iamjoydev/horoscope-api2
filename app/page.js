import Link from "next/link";

export default function Home() {
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#4f46e5",
          fontSize: "1.8rem",
          marginBottom: "10px",
        }}
      >
        🌟 আজকের রাশিফল API
      </h2>

      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "20px" }}>
        Get daily Bengali horoscope data in JSON format — accurate, clean, and ready for embedding.
      </p>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link
          href="/api/horoscope"
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🔍 View Today’s Horoscope JSON
        </Link>
      </div>

      <h3 style={{ color: "#9333ea", marginTop: "20px" }}>🔧 How to Embed on Your Website:</h3>
      <pre
        style={{
          background: "#f3f4f6",
          padding: "16px",
          borderRadius: "8px",
          overflowX: "auto",
          fontSize: "0.9rem",
        }}
      >
{`<script src="https://vercel-horoscope-build.vercel.app/embed.js"></script>`}
      </pre>

      <p style={{ marginTop: "10px", color: "#374151" }}>
        This script will automatically detect the user’s location (via IP), fetch the correct horoscope, 
        and display a beautiful Bengali-style horoscope card grid on your site.
      </p>

      <p style={{ textAlign: "center", color: "#6b7280", fontSize: "0.85rem", marginTop: "20px" }}>
        Built using <strong>Next.js 14</strong>, <strong>Luxon</strong>, and <strong>Astronomy Engine</strong>.
      </p>
    </section>
  );
}
