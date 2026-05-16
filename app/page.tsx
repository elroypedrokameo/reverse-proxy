import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Page 1 di project utama
      <Link href="/pagekedua">Akses ke Page 2 lewat reverse proxy</Link>
    </div>
  );
}
