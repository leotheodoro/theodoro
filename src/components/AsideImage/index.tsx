import styles from './styles.module.scss'
import Image from "next/image"
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi'


export function AsideImage() {
  return (
    <aside className={styles.box}>
      <h1><Image src="/images/photo.jpg" alt="Leonardo Theodoro" className={styles.photo} /></h1>
      <div className={styles.icons}>
        <a href="https://twitter.com/thdrps" target="_blank" rel="noreferrer"><FiTwitter size={30} /></a>
        <a href="https://www.instagram.com/leotheodoro_" target="_blank" rel="noreferrer"><FiInstagram size={30} /></a>
        <a href="https://github.com/leotheodoro" target="_blank" rel="noreferrer"><FiGithub size={30} /></a>
      </div>
    </aside >
  )
}