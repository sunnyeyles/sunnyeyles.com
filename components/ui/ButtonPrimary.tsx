interface IButtonPrimary {
  text: string
  pulseAnimation: boolean
}
export const ButtonPrimary = ({ text, pulseAnimation }: IButtonPrimary) => {
  return (
    <button
      className={`btn bg-blue-400 border-blue-200 hover:bg-blue hover:text-white hover:border-blue-400 ${
        pulseAnimation ? 'animate-pulse' : null
      }`}
    >
      {text}
    </button>
  )
}
