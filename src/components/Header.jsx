import "./Header.css";

// TODO 3: Importera NavLink från "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <p className="logo">☕ Kafé Kanelbullen</p>

      <nav className="nav">
        {/* TODO 3: Byt ut <a href> mot <NavLink to>.
            Med vanliga <a> laddas hela sidan om – testa och se! */}
        <a href="/" className="link">Hem</a>
        <a href="/meny" className="link">Meny</a>
        <a href="/om-oss" className="link">Om oss</a>
        <a href="/kontakt" className="link">Kontakt</a>
      </nav>
    </header>
  );
}
