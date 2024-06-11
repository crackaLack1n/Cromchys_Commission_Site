import Link from "next/link"
import style from './header.module.css';
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className={style.main}>
        <h2 className={`${style.heading} ${lilita_One.className}`}>Cromchy's Commission Info!!</h2>
        <nav className={style.nav}>
          <ul className={style.buttons}>
            <li><Link href={`/`}>About Me</Link></li>
            <li><Link href={`/Examples`}>Examples</Link></li>
            <li><Link href={`/Idk`}>Idk</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}