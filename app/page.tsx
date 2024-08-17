import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div>
        <p>
          <Link href={"/meals"} />
        </p>
        <p>
          <Link href={"/meals/share"} />
        </p>
        <p>
          <Link href={"/community"} />
        </p>
      </div>
    </main>
  );
}
