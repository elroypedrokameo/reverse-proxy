export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
        Page 1 di project utama yang saya deploy di <span className="text-red-500">vercel</span> menggunakan next js
      </p>
      <a href="/pagekedua" className="text-blue-500">
        Akses ke Page 2 lewat reverse proxy, ini akan akses project 2 di{" "}
        <span className="text-red-500">cloudflare</span>
      </a>
    </div>
  );
}
