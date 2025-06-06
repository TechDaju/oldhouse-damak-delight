
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Volume2, VolumeX } from "lucide-react";
import { useInterval } from "@/hooks/use-interval";

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const slides = [
    {
      image: "/lovable-uploads/9de10d02-9982-4fdd-a095-79c0ef01f297.png",
      heading: "Welcome to Old House Cafe",
      button: { text: "View Our Menu", link: "/menu" }
    },
    {
      image: "/lovable-uploads/47797ac9-eeca-4b1b-b8dd-9c200c07c3a6.png",
      heading: "Where Every Cup Tells a Story",
      button: { text: "Book a Table", link: "/reservation" }
    },
    {
      image: "/lovable-uploads/5dffdaf6-6eb8-45ef-8b4f-c66d904580c7.png",
      heading: "Authentic Taste, Cozy Space",
      button: { text: "View Our Menu", link: "/menu" }
    },
    {
      image: "/lovable-uploads/caa4dad2-fb23-4d61-8688-33fafeb694ab.png",
      heading: "Visit Us in Damak – Your Second Home",
      button: { text: "Book a Table", link: "/reservation" }
    }
  ];

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio("/ambient-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Toggle music
  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Auto-rotate slides every 3 seconds
  useInterval(() => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 3000);

  return (
    <>
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              zIndex: activeSlide === index ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}

        {/* Content */}
        <div className="container-custom relative h-full flex flex-col items-center justify-center z-10">
          <div className="max-w-3xl text-center text-white">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-700 ${
                  activeSlide === index ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-up">
                  <span className="text-gradient">{slide.heading}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  Experience authentic Nepali cuisine in a cozy, traditional setting
                  at the heart of Damak.
                </p>
                <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="transition-transform hover:scale-105"
                  >
                    <Link to={slide.button.link}>{slide.button.text}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Music toggle button */}
          <button 
            onClick={toggleMusic}
            className="absolute bottom-8 right-8 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transition-colors z-20"
            aria-label={isMusicPlaying ? "Mute ambient music" : "Play ambient music"}
          >
            {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-spice-600 font-medium mb-2">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                A Taste of Tradition in Every Bite
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Old House Cafe Damak brings the authentic flavors of Nepal with a modern twist. 
                Our recipes have been passed down through generations, carefully preserved to 
                offer you a genuine taste of our rich culinary heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M7 10h10" />
                      <path d="M7 14h10" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Quality Ingredients</h4>
                    <p className="text-muted-foreground">
                      Fresh and locally sourced from Nepali farms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <Clock className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Traditional Recipes</h4>
                    <p className="text-muted-foreground">
                      Authentic flavors with modern presentation
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/8489200d-707f-4dcf-886c-ea8f7227dbbf.png"
                alt="Old House Cafe entrance pathway"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-cafe-800 font-bold text-2xl">15+</p>
                <p className="text-muted-foreground">Years of tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Specials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">SPECIALS OF THE DAY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Chef's Special Selections
            </h2>
            <p className="text-muted-foreground">
              Experience our chef's carefully curated specials that change daily
              to provide you with fresh, seasonal dishes that showcase the best of
              Nepali cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Momos with Tomato Chutney",
                description:
                  "Handmade dumplings filled with minced chicken or vegetables, served with spicy tomato chutney",
                image:
                  "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
                price: "रू 350",
              },
              {
                name: "Thakali Thali Set",
                description:
                  "A complete meal with rice, lentils, seasonal vegetables, pickles, and your choice of meat",
                image:
                  "/lovable-uploads/292792cf-2213-4d5e-937a-0e42b1ed84a9.png",
                price: "रू 550",
              },
              {
                name: "Nepali Masala Tea",
                description:
                  "Our signature spiced tea with cardamom, cinnamon, and fresh milk",
                image:
                  "/lovable-uploads/e56aff36-e7cd-4d04-9782-803a116f178a.png",
                price: "रू 120",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" className="w-full">
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/f91c880f-4bd7-4928-a1fd-33eb3b178653.png')",
        }}
      >
        <div className="absolute inset-0 bg-cafe-950 bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-6">
            Reserve Your Table Today
          </h2>
          <p className="text-cafe-100 max-w-2xl mx-auto mb-8 text-lg">
            Enjoy a memorable dining experience with friends and family in our cozy atmosphere.
            Book your table now to avoid waiting.
          </p>
          <Button asChild size="lg" className="bg-white text-cafe-800 hover:bg-cafe-100">
            <Link to="/reservation">Book a Reservation</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our valued customers think about their dining experience at Old House Cafe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Sharma",
                comment:
                  "The momos at Old House Cafe are the best in Damak! The atmosphere is so cozy and reminds me of a traditional Nepali home.",
                rating: 5,
              },
              {
                name: "Priya Thapa",
                comment:
                  "Their Thakali Thali is absolutely authentic and delicious. The staff is very friendly and the service is excellent.",
                rating: 5,
              },
              {
                name: "Rajesh Gurung",
                comment:
                  "Amazing place for family gatherings. The food quality is consistent and the variety on the menu is impressive.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#E2742C"
                      stroke="#E2742C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
