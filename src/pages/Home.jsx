import { CarouselDemo } from "@/components/CarouselDemo"
import Loader from "@/components/Loader"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
  <>
   <div className=' text-2xl text-blue-950'>Home</div>
   <Loader/>
   <div className="flex min-h-svh flex-col items-center justify-center">
    <Button className=" bg-blue-900 text-emerald-800">Click me</Button>
    <CarouselDemo/>
   </div>
  </>
  )
}

export default Home