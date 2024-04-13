import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import DropFile from "./components/DropFile";
import CustomNav from "./components/navbar";

export default async function Dashaboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <p>Logo</p>
          <AuthButton />
        </div>
      </nav>
      <CustomNav></CustomNav>
      <DropFile></DropFile>
    </>
  );
}
