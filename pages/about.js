import Nav from '../components/nav'
import styles from '../components/sass/aboutPage.module.scss'

export default function About () {
  return (
    <>
      <Nav />
      <div className={styles.aboutpage}>
        <h1>About</h1>
      </div>
    </>
  )
}
