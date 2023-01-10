import Image from "next/image"


function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image 
        src='https://links.papareact.com/0fm'
        fill
        style={{objectFit:"cover"}}
        alt="/"
      />
 
    <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm lg:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold 
        hover:shadow-lg active:scale-90 transition duration-150"> 
        I&apos;m Flexible
        </button>
    </div>

    </div>
  )
}

export default Banner
