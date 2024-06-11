import style from './footer.module.css';

export default function Footer() {
  return(
    <>
    <footer className={style.main}>
      <div className={style.content}>
      <h2 className={style.heading}>Still interested?</h2>
      <button className={style.button}>Click here!!!!</button>
      </div>
    </footer>
    </>
  )
}