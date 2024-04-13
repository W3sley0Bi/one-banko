import "./GetStarted.css";
import Link from "next/link";

export default function GetStarted() {
  return (
    <>
      <Link href="/dashboard">
        <div className="h-[10rem] w-full rounded-md flex items-center justify-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <button className="Btn ">Get Started →</button>
        </div>
      </Link>
    </>
  );
}
