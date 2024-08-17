import Header from "@/components/hearder";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* use link instead of a tag to create client side navigation */}
        <Link href="/awesome">Go to the awesome page</Link>
      </p>
    </main>
  );
}
