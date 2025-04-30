import { FaCarrot } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const ServiceData = [
  {
    title: "Fitness Nutrition",
    count: "2,600+",
    points: [
      "High Protein",
      "Pre-Workout Fuel",
      "Post-Workout Meals",
      "Muscle Recovery",
      "Hydration Focus",
      "Macro Tracking",
      "Clean Eating",
      "Energy Boost",
      "health information",
     ],
    icon: <FaCarrot className="text-6xl text-pink-500" />,
    aosDelay: "300",
  },
  {
    title: "PCOS Care",
    count: "5,000+",
    points: [
      "Hormone Balance",
      "Anti-Inflammatory Diet",
      "Low Sugar",
      "High Fiber",
      "Gluten-Free Options",
      "Dairy Alternatives",
      "Weight Support",
     "Regular Cycles",
    ],
    icon: <GiCookingPot className="text-6xl text-green-700" />,
    aosDelay: "400",
  },
  {
    title: "Weight Loss",
    count: "600K+",
    points: [
      "Calorie Control",
      "Balanced Meals",
      "Low-Carb Options",
      "Portion Planning",
      "Healthy Snacking",
      "Fat-Burning Foods",
      "Meal Prep Tips",
      "Weekly Tracking",
    ],
    icon: <FaShoppingBasket className="text-6xl text-orange-500" />,
    aosDelay: "500",
  },
  {
    title: "Diabetes Management",
    count: "115K+",
    points: [
      "Low GI Foods",
      "Sugar Control",
      "Carb Counting",
      "Fiber-Rich Meals",
      "Timely Eating",
      "Insulin Support",
      "Blood Sugar Logs",
      "Smart Substitutes",
    ],
    icon: <FaHamburger className="text-6xl text-blue-500" />,
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <div className="bg-white text-black relative z-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center gap-6">
          <p className="uppercase text-center text-5xl font-semibold text-dark">Services</p>
          <h1 className="text-3xl text-center text-green-700 font-bold font-cursive">
            Why Choose Healthify me?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                {data.icon}
                <h2 className="text-xl font-bold mt-4">{data.title}</h2>
                <p className="text-gray-600 text-lg font-semibold mt-1">{data.count}</p>
                <ul className="mt-4 text-sm text-gray-700 text-left list-disc list-inside">
                  {data.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
