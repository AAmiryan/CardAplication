export const localStorageGetData = () =>
  JSON.parse(localStorage.getItem("uniqNumber") || "[]");

export const localStorageSetData = (data: number[]) =>
  localStorage.setItem("uniqNumber", JSON.stringify(data));

export const localStorageRemoveItem = () =>
  localStorage.removeItem("uniqNumber");
