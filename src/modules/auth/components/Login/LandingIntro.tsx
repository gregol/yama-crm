import Image from "next/image"
function LandingIntro(){
    return(
      <div className="hero min-h-full rounded-l-xl bg-base-200">
        <div className="hero-content py-12">
          <div className="max-w-md">
            <div className="text-center"><Image src="/images/YamaCrmLogo.png" alt="YamaCRM Admin Template" className="w-96 rounded-lg inline-block" width={400} height={300} /></div>
          </div>
        </div>
      </div>
    )      
  }
  
  export default LandingIntro