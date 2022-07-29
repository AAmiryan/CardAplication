export const localStorageGetData = (): number[] =>
  JSON.parse(localStorage.getItem("uniqNumber") || "[]");

export const localStorageSetData = (data: number[]): void =>
  localStorage.setItem("uniqNumber", JSON.stringify(data));

export const localStorageRemoveItem = (): void =>
  localStorage.removeItem("uniqNumber");
