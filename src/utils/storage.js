export function loadData(key, defaultData) {
  const savedData = localStorage.getItem(key);

  if (savedData) {
    return JSON.parse(savedData);
  }

  localStorage.setItem(
    key,
    JSON.stringify(defaultData)
  );

  return defaultData;
}

export function saveData(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify(data)
  );
}