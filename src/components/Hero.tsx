import img from "/uploads/geodigital.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 diagonal-section">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-black">Digital Solutions</span>
              <br />
              <span className="text-black">for the Modern World</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-md">We connect complex strategies, data, and technology with real-world solutions to help your business thrive.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Get Started</Button>
              <Button className="btn-secondary">Learn More</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full absolute -right-8 -top-8 z-0"></div>
              <img src={img} alt="GEO.digital branding" className="relative z-10 rounded-lg shadow-2xl max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
