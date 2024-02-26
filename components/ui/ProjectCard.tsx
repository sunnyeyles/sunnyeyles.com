import { a } from '@react-spring/web'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
interface IProjectCardProps {
  image: string | StaticImageData
  title: string
  description: string
  alt: string
  notDisabled: boolean
  siteLink?: string
  codeLink: string
}
export const ProjectCard = ({
  image,
  title,
  description,
  alt,
  notDisabled,
  siteLink,
  codeLink,
}: IProjectCardProps) => {
  return (
    <div className="card card-compact w-60 md:w-96 bg-white m-6">
      <figure className="h-fit">
        <Image src={image} alt={alt} className="card-image h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-200">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="card-actions flex justify-end">
          {notDisabled ? (
            <a href={siteLink} target="_blank">
              <button className="btn btn-sm btn-primary ">Check it out</button>
            </a>
          ) : null}
          <a href={codeLink} target="_blank">
            <button className="btn btn-sm">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}
