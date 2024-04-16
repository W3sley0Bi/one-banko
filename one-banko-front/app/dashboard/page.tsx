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
    return redirect("/signin");
  }

  return (
    <>
      <DropFile></DropFile>
    </>
  );
}
