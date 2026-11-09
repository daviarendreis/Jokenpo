import { useState } from "react"

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'jokenpo-theme'
const THEME_COLORS: Record<Theme, string> = { light: '#eef0f4', dark: '#13162a' }

// The initial theme is set on <html> by an inline script in index.html, so there is no flash.
function currentTheme (): Theme {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function useTheme () {
    const [theme, setTheme] = useState<Theme>(currentTheme)

    function toggle () {
        const next: Theme = theme === 'dark' ? 'light' : 'dark'
        document.documentElement.dataset.theme = next
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next])
        try { localStorage.setItem(STORAGE_KEY, next) } catch { /* storage unavailable: the choice lasts for this visit */ }
        setTheme(next)
    }

    return { theme, toggle }
}
