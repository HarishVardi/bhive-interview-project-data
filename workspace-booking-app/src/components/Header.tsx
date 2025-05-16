import CallSVG from "../assets/call.svg"

const Header = () => {
  return (
    <>
      <header className="bg-white shadow max-sm:px-8 py-4 md:px-12 xl:px-20 flex justify-between items-center">
        <img src="logo.png" alt="Host meeting illustration" className="w-full h-auto max-w-32" />
        <div className="border-[1px] border-[solid] border-[#F2B304] p-[10px] rounded-[4px]">
          <img src={CallSVG} alt="Host meeting illustration" className="w-full h-auto max-w-32" />
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 py-8 md:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center order-first md:order-last mb-8 md:mb-0">
            <video
              src="/co-working.mp4"
              poster="/co-working.png"
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-last md:order-first text-center md:text-left">
            <h1 className="text-[20px] md:text-[36px] lg:text-[58px] font-bold text-gray-800 leading-tight">
              Host your meeting with
              <br />
              world-class amenities.
            </h1>
            <p className="text-[16px] md:text-[24px] lg:text-[32px] font-semibold mt-4">
              Starting at <span className="text-[#F2B304]">₹199/-!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
