const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const SUN_ICON = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="4" y1="12" x2="2" y2="12"></line><line x1="22" y1="12" x2="20" y2="12"></line><line x1="5.6" y1="5.6" x2="4.2" y2="4.2"></line><line x1="19.8" y1="19.8" x2="18.4" y2="18.4"></line><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"></line></svg>';
const MOON_ICON = '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';

const FAVICONS = {
    'favicon-32': '/images/favicon-32',
    'favicon-16': '/images/favicon-16',
    'apple-touch-icon': '/images/apple-touch-icon',
};

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? MOON_ICON : SUN_ICON;
    for (const [id, base] of Object.entries(FAVICONS)) {
        document.getElementById(id).href = `${base}${theme === 'dark' ? '-dark' : ''}.png`;
    }
}

applyTheme(localStorage.getItem('theme') || getSystemTheme());

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
});
