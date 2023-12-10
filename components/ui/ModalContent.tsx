import { ReactNode } from 'react'
interface IModalContentProps {
  header: string
  body: string | ReactNode
}
export const ModalContent = ({ body, header }: IModalContentProps) => {
  return (
    <div className="modal-box">
      <h3>{header}</h3>
      <p className="py-4">{body}</p>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  )
}
