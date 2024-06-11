import Link from "next/link"

export default function Header() {
  return(
    <>
    <h2>Cromchy's Commission Info!!</h2>
    <nav>
      <ul>
        <li><Link href={`/`}>About Me<Link/></li>
        <li><Link href={`/Examples`}/>Examples</li>
        <li>Idk</li>
      </ul>
    </nav>
    </>
  )
}