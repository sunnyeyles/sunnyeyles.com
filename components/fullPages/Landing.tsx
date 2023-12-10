import Image from 'next/image'
import photoOfMe from '../../3F8D4ECA-BA5C-48F5-84AA-82F82107A013.jpeg'
import { ModalButton } from '../ui/ModalButton'
import { AboutMeModalContent } from '../ui/AboutMeModalContent'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ButtonPrimary } from '../ui/ButtonPrimary'
import { ButtonSecondary } from '../ui/ButtonSecondary'

export const Landing = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null
    if (modal) {
      modal.showModal()
    }
  }

  return (
    <div className="h-screen p-6 flex items-center md:flex-none">
      <div className="text-center md:text-left justify-center mx-auto md:mx-0 max-h-96 mb-40">
        <h1 className="text-4xl font-bold animate-fade animate-duration-[2000ms] animate-delay-200 animate-ease-out">
          Sunny Eyles
        </h1>
        <h2 className="text-md text-gray-500 my-2 animate-fade animate-duration-[2000ms] animate-delay-200 animate-ease-out">
          Developer<span className="text-gray-500">&nbsp;·&nbsp;</span>
          Designer
          <span className="text-gray-500">&nbsp;·&nbsp;</span>Human
        </h2>
        <div className="avatar click:animate-fade">
          <div className="w-60 rounded-xl opacity-10">
            <Image src={photoOfMe} alt="me" />
          </div>
        </div>

        <ModalButton
          modalId="aboutMeModal"
          trigger={<button className="btn btn-primary">About me</button>}
          onOpen={() => openModal('aboutMeModal')}
          openModal={openModal}
        >
          <AboutMeModalContent />
        </ModalButton>
      </div>
    </div>
  )
}
