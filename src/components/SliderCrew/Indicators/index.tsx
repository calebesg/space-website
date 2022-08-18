import { useSwiper } from 'swiper/react'

interface IndicatorsProps {
  length: number
}

export function Indicators({ length }: IndicatorsProps) {
  const swiper = useSwiper()

  function renderIndicators() {
    const indicators = []

    for (let i = 0; i <= length; i++) {
      indicators.push(
        <button type="button" onClick={() => swiper.slideTo(i)} />
      )
    }

    return indicators
  }

  return <div>{renderIndicators()}</div>
}
