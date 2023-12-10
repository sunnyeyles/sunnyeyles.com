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
    <div className="card card-compact w-60 md:w-96 shadow-lg bg-blue-500 m-2">
      <figure>
        <Image src={image} alt={alt} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn">Check it out</button>
        </div>
      </div>
    </div>
  )
}
