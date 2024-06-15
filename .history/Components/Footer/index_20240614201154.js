import style from './footer.module.css';
import Link from 'next/link';
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });


export default function Footer() {
  return(
    <>
    <footer className={style.main}>
      <div className={style.content}>
      <h2 className={`${style.heading} ${lilita_One.className}`}>Still interested?</h2>
      <Link href="https://ko-fi.com/E1E49HTV/commissions">
      <button className={style.button}>My Ko-Fi</button>
      </Link>
      </div>
    </footer>
    </>
  )
}