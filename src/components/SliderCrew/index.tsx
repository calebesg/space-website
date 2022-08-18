import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderCrewProps {
  data: {
    name: string
    images: {
      png: string
      webp: string
    }
    role: string
    bio: string
  }[]
}

export function SliderCrew({ data }: SliderCrewProps) {
  return (
    <Swiper>
      {data.map((item, index) => (
        <SwiperSlide key={index}>{item.name}</SwiperSlide>
      ))}
    </Swiper>
  )
}
