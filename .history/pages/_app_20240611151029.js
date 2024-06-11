import "@/styles/globals.css";
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
