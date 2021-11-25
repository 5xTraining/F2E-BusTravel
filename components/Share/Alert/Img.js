import Image from "next/image"

const Img = ({ image = "geo-location", width = "173", height = "173" }) => {
  return (
    <Image
      src={`/assets/images/${image}.png`}
      alt={image}
      width={width}
      height={height}
    />
  )
}

export { Img }
