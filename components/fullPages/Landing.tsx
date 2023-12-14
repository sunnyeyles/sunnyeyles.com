import Image from 'next/image'
import photoOfMe from '../../assets/3F8D4ECA-BA5C-48F5-84AA-82F82107A013.jpeg'
import { ModalButton } from '../ui/ModalButton'
import { AboutMeModalContent } from '../ui/AboutMeModalContent'

export const Landing = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null
    if (modal) {
      modal.showModal()
    }
  }

  return (
    <div id="top" className="h-screen flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold animate-fade animate-duration-[2000ms] animate-delay-150 animate-ease-out">
          Sunny Eyles
        </h1>
        <h2 className="text-md text-gray-500 my-2 animate-fade animate-duration-[3500ms] animate-delay-200 animate-ease-out">
          Developer<span className="text-gray-700">&nbsp;·&nbsp;</span>
          Programmer
          <span className="text-gray-500">&nbsp;·&nbsp;</span>Human
        </h2>

        <div className="avatar animate-fade animate-duration-[4000ms] animate-delay-700 animate-ease-out m-2">
          <div className="w-60 rounded-xl overflow-hidden">
            <Image src={photoOfMe} alt="me" className="opacity-50" />
          </div>
        </div>
        <h3 className="text-gray-400 text-md m-2">
          A collection of my work, feel free to look around and get in touch if
          you're interested in working together.
        </h3>

        <ModalButton
          modalId="aboutMeModal"
          trigger={
            <button className="btn btn-primary animate-fade animate-duration-[2000ms] animate-delay-1000 animate-ease-out">
              About me
            </button>
          }
          onOpen={() => openModal('aboutMeModal')}
          openModal={openModal}
        >
          <AboutMeModalContent />
        </ModalButton>
      </div>
    </div>
  )
}
