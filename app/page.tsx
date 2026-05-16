export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
        Project utama deploy di <span className="text-red-500">vercel</span>
      </p>
      <a href="/pagekedua" className="text-blue-500">
        Akses project kedua yang deploy di
        <span className="text-red-500">cloudflare</span>
      </a>
    </div>
  );
}
