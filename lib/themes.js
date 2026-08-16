const THEMES = {
    birch: {
        light: { bg: '#f0eee4', panelBg: '#faf9f5', text: '#33312b', textMuted: '#83807a', badgeBg: '#6b6862', badgeText: '#f0eee4', accent: '#5cccaa', footerLink: '#6b6862' },
        dark: { bg: '#1e1e1c', panelBg: '#2a2a27', text: '#eceae1', textMuted: '#a6a399', badgeBg: '#46453f', badgeText: '#eceae1', accent: '#5cccaa', footerLink: '#b5b2a8' },
    },
    nord: {
        light: { bg: '#eceff4', panelBg: '#e5e9f0', text: '#2e3440', textMuted: '#4c566a', badgeBg: '#d8dee9', badgeText: '#2e3440', accent: '#5e81ac', footerLink: '#5e81ac' },
        dark: { bg: '#2e3440', panelBg: '#3b4252', text: '#eceff4', textMuted: '#d8dee9', badgeBg: '#434c5e', badgeText: '#eceff4', accent: '#88c0d0', footerLink: '#81a1c1' },
    },
    umber: {
        light: { bg: '#fdf6e3', panelBg: '#f5edd6', text: '#586e75', textMuted: '#839496', badgeBg: '#e3dbc0', badgeText: '#073642', accent: '#2578c9', footerLink: '#ae5b26' },
        dark: { bg: '#1d2021', panelBg: '#282828', text: '#ebdbb2', textMuted: '#a89984', badgeBg: '#3c3836', badgeText: '#ebdbb2', accent: '#b8bb26', footerLink: '#e8792b' },
    },
    catppuccin: {
        light: { bg: '#eff1f5', panelBg: '#e6e9ef', text: '#4c4f69', textMuted: '#6c6f85', badgeBg: '#ccd0da', badgeText: '#4c4f69', accent: '#179299', footerLink: '#1e66f5' },
        dark: { bg: '#1e1e2e', panelBg: '#313244', text: '#cdd6f4', textMuted: '#a6adc8', badgeBg: '#45475a', badgeText: '#cdd6f4', accent: '#94e2d5', footerLink: '#89b4fa' },
    },
    rosepine: {
        light: { bg: '#faf4ed', panelBg: '#fffaf3', text: '#575279', textMuted: '#797593', badgeBg: '#f2e9e1', badgeText: '#575279', accent: '#286983', footerLink: '#907aa9' },
        dark: { bg: '#191724', panelBg: '#1f1d2e', text: '#e0def4', textMuted: '#908caa', badgeBg: '#26233a', badgeText: '#e0def4', accent: '#9ccfd8', footerLink: '#c4a7e7' },
    },
    everforest: {
        light: { bg: '#eef3e2', panelBg: '#e0e8ce', text: '#3f4a3d', textMuted: '#78876d', badgeBg: '#cfdab0', badgeText: '#3f4a3d', accent: '#5c8a2e', footerLink: '#2f7d69' },
        dark: { bg: '#151e1a', panelBg: '#202b24', text: '#d6e2c9', textMuted: '#7fa07a', badgeBg: '#2c3a30', badgeText: '#d6e2c9', accent: '#8fc76c', footerLink: '#5fae94' },
    },
};

function getTheme(name) {
    return THEMES[name] || THEMES.birch;
}

module.exports = { THEMES, getTheme };
