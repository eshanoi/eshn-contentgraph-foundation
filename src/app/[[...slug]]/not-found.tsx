import Link from 'next/link';

export default function NotFound() {
  return (
    // TODO: Update later if it's is needed
    <div className="col text-center my-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
