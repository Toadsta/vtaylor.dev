const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeSwitcher = document.getElementById('theme-switcher');

const SUN_ICON = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="4" y1="12" x2="2" y2="12"></line><line x1="22" y1="12" x2="20" y2="12"></line><line x1="5.6" y1="5.6" x2="4.2" y2="4.2"></line><line x1="19.8" y1="19.8" x2="18.4" y2="18.4"></line><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"></line></svg>';
const MOON_ICON = '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';

const FAVICON_IDS = ['favicon-32', 'favicon-16', 'apple-touch-icon'];

const COLOR_VARS = {
    bg: '--color-bg',
    panelBg: '--color-panel-bg',
    text: '--color-text',
    textMuted: '--color-text-muted',
    badgeBg: '--color-badge-bg',
    badgeText: '--color-badge-text',
    accent: '--color-accent',
    footerLink: '--color-footer-link',
};

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? MOON_ICON : SUN_ICON;
    for (const id of FAVICON_IDS) {
        const link = document.getElementById(id);
        const base = link.href.replace(/-dark\.png$/, '.png');
        link.href = theme === 'dark' ? base.replace(/\.png$/, '-dark.png') : base;
    }
}

function applyColorTheme(name) {
    const palette = window.__THEMES[name];
    const mode = root.getAttribute('data-theme') || getSystemTheme();
    const colors = palette[mode];
    for (const [key, cssVar] of Object.entries(COLOR_VARS)) {
        root.style.setProperty(cssVar, colors[key]);
    }
}

applyTheme(localStorage.getItem('theme') || getSystemTheme());

let colorTheme = localStorage.getItem('colorTheme') || window.__CURRENT_THEME;
applyColorTheme(colorTheme);

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
    applyColorTheme(colorTheme);
});

themeSwitcher.addEventListener('click', () => {
    const names = Object.keys(window.__THEMES);
    colorTheme = names[(names.indexOf(colorTheme) + 1) % names.length];
    localStorage.setItem('colorTheme', colorTheme);
    applyColorTheme(colorTheme);
});
