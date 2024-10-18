export const SaveToLocalStrg = (key, item) => {
    const storage = window.localStorage;
    const data = JSON.stringify(item);
    storage.setItem(key, data)
}

export const GetFromLocalStrg = (key) => {
    const storage = window.localStorage.getItem(key);
    return storage ? (JSON.parse(storage)) : [];
}