import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="page-hero">
      <div className="container relative z-10">
        <p className="eyebrow">404</p>
        <h1 className="display-xl mt-3 text-white">This page is not here</h1>
        <Link href="/" className="btn btn-gold mt-8">
          Home
        </Link>
      </div>
    </main>
  );
}
