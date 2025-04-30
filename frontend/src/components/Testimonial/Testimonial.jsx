import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Ketut Susilo",
    country: "Indonesia",
    text: "The seamless process and personalized service made my journey truly unforgettable.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Juliana Silva",
    country: "Portugal",
    text: "The accommodations were top-notch, and the attention to detail made my stay enjoyable, and I highly recommend them.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Drew Feig",
    country: "Canada",
    text: "Its good selection allows me to customize my itinerary, making my trip enjoyable.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Autoplay ON
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial" className="bg-[#fef8f4] py-16 text-black relative z-50">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-gray-400 tracking-widest text-sm mb-2">
            Testimonial
          </p>
          <h2 className="text-4xl font-bold relative inline-block">
            What They Say <span className="relative">
              About Us
              <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-500 -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-4">
                <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden min-h-[300px] flex flex-col justify-between">
                  <div>
                    <div className="text-4xl text-yellow-400 mb-4">“</div>
                    <p className="text-gray-600 text-sm mb-6">{data.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-black">{data.name}</h4>
                      <p className="text-gray-400 text-xs">{data.country}</p>
                    </div>
                  </div>
                  {/* Doodle Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                      <path fill="#facc15" d="M0,100 C0,50 50,50 50,0 L100,0 L100,100 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
