import Theme from '../components/shared/themes/themes';
import { ThemeStore } from '../contexts/ThemeStore';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  )
}

export default MyApp
