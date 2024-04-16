import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import UploadModal from './upload/pdf/UploadModal';

export default async function Dashaboard() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/signin');
  }

  return (
    <>
      <UploadModal></UploadModal>
    </>
  );
}
