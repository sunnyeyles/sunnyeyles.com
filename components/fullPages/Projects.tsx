import { MainCarousel } from '../ui/MainCarousel'
export const Projects = () => {
  return (
    <div className="h-screen flex-col text-center justify-center bg-gradient-to-r from-blue via-blue-300  to-blue p-20">
      <div className="w-full m-2 bg-gradient from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <h2 className=" text-4xl font-bold">Projects</h2>
        <MainCarousel />
      </div>
    </div>
  )
}
