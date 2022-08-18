import { useSwiper } from 'swiper/react'

import styles from './styles.module.scss'

interface SlideIndicatorProps {
  index: number
  activeIndex: number
}

export function SlideIndicator({ index, activeIndex }: SlideIndicatorProps) {
  const swiper = useSwiper()
  return (
    <button
      className={`${styles.button} ${
        activeIndex === index ? styles.active : ''
      }`}
      type="button"
      onClick={() => swiper.slideTo(index)}
    />
  )
}
