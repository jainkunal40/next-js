import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/icon.png"
        alt="A server surrounded by magic sparkles."
        width={100}
        height={100}
      />
      <h1>Welcome to this NextJS Course!</h1>
    </header>
  );
}
