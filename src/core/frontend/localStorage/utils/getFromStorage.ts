export function getFromStorage<T>(key: string): T | undefined {
  const data = localStorage.getItem(key);
  if (!data) return;
  return JSON.parse(data) as T;
}
