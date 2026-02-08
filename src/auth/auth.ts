const KEY = "bankui_token";

export function isAuthed() {
  return Boolean(localStorage.getItem(KEY));
}

export function signIn() {
  localStorage.setItem(KEY, "demo");
}

export function signOut() {
  localStorage.removeItem(KEY);
}
