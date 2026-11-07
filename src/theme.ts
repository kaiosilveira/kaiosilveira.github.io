export type Theme = 'light' | 'dark';

export const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

export function systemTheme(): Theme {
  return typeof window.matchMedia === 'function' && window.matchMedia(DARK_QUERY).matches
    ? 'dark'
    : 'light';
}

export function currentTheme(): Theme {
  const explicit = document.documentElement.getAttribute('data-theme');
  return explicit === 'light' || explicit === 'dark' ? explicit : systemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the choice just won't persist.
  }
}

export function onSystemThemeChange(listener: () => void): () => void {
  if (typeof window.matchMedia !== 'function') return () => {};
  const mq = window.matchMedia(DARK_QUERY);
  mq.addEventListener('change', listener);
  return () => mq.removeEventListener('change', listener);
}
