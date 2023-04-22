import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react'

/**
 * Saves the old theme for future use
 * @param {string} theme - Name of curent theme
 * @return {string} previousTheme
 */
//@ts-ignore
function usePrevious(theme) {
  const ref = useRef()
  useEffect(() => {
    ref.current = theme
  })
  return ref.current
}

/**
 * Gets user preferences from local storage
 * @param {string} key - localStorage key
 * @return {array} getter and setter for user preferred theme
 */
function useStorageTheme(key: string) {
  const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState<string>(
    // use stored theme; fallback to user preference
    localStorage.getItem(key) ?? ''
  )

  // update stored theme
  useEffect(() => {
    localStorage.setItem(key, theme)
  }, [theme, key])

  return [theme, setTheme]
}

// create context
export const ThemeContext = React.createContext(null)

interface ITheme {
  children: React.ReactNode
}
// create context provider
export const ThemeProvider = ({ children }: ITheme) => {
  const [theme, setTheme] = useStorageTheme('theme')

  // update root element class on theme change
  const oldTheme = usePrevious(theme)
  useLayoutEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`)
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme, oldTheme])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function toggleTheme() {
    //@ts-ignore
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme
    }),
    [theme, toggleTheme]
  )

  // return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
