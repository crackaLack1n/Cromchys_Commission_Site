import Link from "next/link"

export default function Header() {
  return(
    <>
    <h2>Cromchy's Commission Info!!</h2>
    <nav>
      <ul>
        <li><Link href={`/`}>About Me</Link></li>
        <li><Link href={`/Examples`}>Examples</Link></li>
        <li><Link href={`/Idk`}>Idk</Link></li>
      </ul>
    </nav>
    </>
  )
}