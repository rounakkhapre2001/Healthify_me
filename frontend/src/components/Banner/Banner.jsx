
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
    <div className="bg-white text-black relative z-50">
     <div className="min-h-[620px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image Section */}
              <div className="flex justify-center items-center">
                <img src={BannerImg} alt="" className="max-w-[450px] w-full mx-auto shadow-1"></img>
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <p className="uppercase text-3xl font-semibold text-dark">About Us</p>
                <h1 className="text-5xl text-green-700 font-bold font-cursive">Fresh Bowl</h1> 
                <p>At Helthify Me, we combine the power of AI with expert nutritional science to help you take charge of your health.
                  Our intelligent dietician assistant offers personalized meal plans, 
                  real-time guidance, and progress tracking tailored to your unique lifestyle and goals.
                  Whether you're aiming to lose weight, manage a health condition, or simply eat better, 
                  elthify Me makes it easy and sustainable. With data-driven insights and a user-friendly interface, 
                  we’re here to support your wellness journey every step of the way.
                  Let Helthify Me be your smart companion to a healthier, happier you.</p>
              </div>
            </div>
        </div>
     </div>
    </div>  
     </>
  )
}

export default Banner