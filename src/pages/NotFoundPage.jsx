import { Link } from "react-router-dom";
import { House } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__code">
          4<span>0</span>4
        </div>
        <h1>This page lost a few drops.</h1>
        <p>The page you are looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn--primary btn--lg">
          <House size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
