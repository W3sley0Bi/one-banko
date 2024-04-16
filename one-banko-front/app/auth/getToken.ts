function getCookie(cname: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export const getToken = async () => {
  const supabaseProjectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
  const storageKey = `sb-${supabaseProjectId}-auth-token`;
  const sessionDataString = getCookie(storageKey);
  const sessionData = JSON.parse(sessionDataString || 'null');
  const token = sessionData?.access_token;

  return 'Bearer ' + token;
};
