import "@/styles/globals.css";
import { Fjalla_One } from 'next/font/google'

const fjalla_One = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
