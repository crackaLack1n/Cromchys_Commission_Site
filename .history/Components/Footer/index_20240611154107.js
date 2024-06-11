import style from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return(
    <>
    <footer className={style.main}>
      <div className={style.content}>
      <h2 className={style.heading}>Still interested?</h2>
      <button className={style.button}><Link href={pages/Examples.js}></Link>Click here!!!!</button>
      </div>
    </footer>
    </>
  )
}