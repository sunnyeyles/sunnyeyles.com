'use client'
import { ReactNode, MouseEventHandler } from 'react'

interface IModalProps {
  modalId: string
  trigger: ReactNode
  children: ReactNode
  onOpen: () => void
  openModal: (modalId: string) => void
}

export const ModalButton = ({
  trigger,
  children,
  modalId,
  openModal,
}: IModalProps) => {
  return (
    <div>
      <div onClick={() => openModal(modalId)}>{trigger}</div>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        {children}
      </dialog>
    </div>
  )
}
