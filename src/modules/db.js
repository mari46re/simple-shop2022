export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYmRlbG9vaXZhZXV0cWFydXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTI5MjMsImV4cCI6MTk4MzQ4ODkyM30.6f8KCtL4Rp20SfePL134NB_mEAms-aNRp-ZgXvm1sk8";
  const url = "https://ugbdelooivaeutqarupo.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
