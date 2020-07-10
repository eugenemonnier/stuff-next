import Link from 'next/link'

import styles from '../sass/nav.module.scss'

export default function Nav (props) {
  // function getStyle (page) {
  //   if (page == props.page) {
  //     return styles.active
  //   } else return null
  // }

  return (
    <ul className={styles.nav}>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </ul>
  )
}
