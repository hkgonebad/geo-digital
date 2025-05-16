
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GEO.digital?</h2>
            <p className="text-lg mb-6">
              At GEO.digital, we're passionate about delivering exceptional web solutions that drive real business results. Our team combines technical expertise with creative thinking to build digital experiences that stand out.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Team</h3>
                  <p>Our developers and designers have years of experience creating outstanding digital solutions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cutting-Edge Technology</h3>
                  <p>We stay ahead of the curve by using the latest technologies and development practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Client-Focused Approach</h3>
                  <p>We listen to your needs and work collaboratively to achieve your business goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-72 md:h-96 bg-secondary rounded-lg relative z-10"></div>
            <div className="w-full h-72 md:h-96 border-4 border-primary rounded-lg absolute -bottom-4 -right-4 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
