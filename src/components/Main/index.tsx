import { AsideImage } from '../AsideImage'
import { AsideContent } from '../AsideContent'

import styles from './styles.module.scss'

export function Main() {
  return (
    <main className={styles.container}>
      <AsideImage />
      <AsideContent />
    </main>
  )
}