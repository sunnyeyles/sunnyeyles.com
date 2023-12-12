import Image from 'next/image'
import { StaticImageData } from 'next/image'
interface IProjectCardProps {
  image: string | StaticImageData
  title: string
  description: string
  alt: string
}
export const ProjectCard = ({
  image,
  title,
  description,
  alt,
}: IProjectCardProps) => {
  return (
    <div className="card card-compact w-60 md:w-96 bg-white m-6 shadow-md">
      <figure>
        <Image src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-200">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="card-actions flex justify-end">
          <button className="btn">Check it out</button>
          <button className="btn">Github</button>
        </div>
      </div>
    </div>
  )
}
