export async function fetchLocationData() {
  const res = await window.fetch('/locations.json');
  if (!res.ok) {
    throw new Error('API failed');
  }

  const data = await res.json();
  return data;
}
