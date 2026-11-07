import { useEffect, useState } from 'react';
import { applyTheme, currentTheme, onSystemThemeChange, type Theme } from '../theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => onSystemThemeChange(() => setTheme(currentTheme())), []);

  const next: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = next === 'dark' ? 'Dark' : 'Light';

  return (
    <button
      className="toggle"
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
    >
      {label}
    </button>
  );
};

export default ThemeToggle;
