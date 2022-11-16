import '../styles/globals.css'
import { CustomNavbar } from '../components/navbar.component'
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    
  }
})


// 3. Wrap NextUIProvider with NextThemesProvider
// _app.jsx // _app.tsx



// 4. Use `next-themes` to change the theme
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const App = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  )
}


function MyApp({ Component, pageProps }) {
  return <>
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
      <CustomNavbar />  
      <Component {...pageProps} />
  </NextUIProvider>
</NextThemesProvider>
      
  </>
}

export default MyApp
