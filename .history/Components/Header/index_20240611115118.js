import Link from "next/link"
import style from './header.module.css';
export default function Header() {
  return (
    <>
      <div className={style.main}>
        <h2>Cromchy's Commission Info!!</h2>
        <nav className={style.nav}>
          <ul>
            <li><Link href={`/`}>About Me</Link></li>
            <li><Link href={`/Examples`}>Examples</Link></li>
            <li><Link href={`/Idk`}>Idk</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}