import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section error-section">
      <div className="error-container">
        <h1>error 404 page not found</h1>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </section>
  );
}
