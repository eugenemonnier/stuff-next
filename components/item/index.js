import Link from 'next/link'

export default function Item (props) {
  return (
    <li key={props.stuff.id}>
      <Link href='/stuff/[id]' as={`/stuff/${props.stuff.id}`}>
        <a>{props.stuff.name}</a>
      </Link>
    </li>
  )
}
