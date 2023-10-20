export const setToStorage = (item: unknown, key: string) => {
  localStorage.setItem(key, JSON.stringify(item));
};
