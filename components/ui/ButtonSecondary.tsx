interface IButtonSecondary {
  text: string
  pulseAnimation: boolean
}
export const ButtonSecondary = ({ text, pulseAnimation }: IButtonSecondary) => {
  return (
    <button
      className={`btn bg-white text-blue border-blue hover:bg-blue hover:text-white hover:border-white ${
        pulseAnimation ? 'animate-pulse' : null
      } hover:bg-red`}
    >
      {text}
    </button>
  )
}
