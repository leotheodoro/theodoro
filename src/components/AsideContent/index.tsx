import styles from './styles.module.scss'

export function AsideContent() {
  return (
    <aside className={styles.box}>
      <h1 className={styles.title}>THEODORO<span className={styles.textRegular}>.DEV</span></h1>
      <h2 className={styles.marginBottom}><span className={styles.textRegular}>Hey, I&apos;m</span> Leonardo Theodoro</h2>
      <h2>Software Engineer <span className={styles.textRegular}>and <br />passionate about</span> life</h2>x
    </aside>
  )
}