
import React from 'react';

const Services = () => {
  const serviceColumns = [
    {
      title: "What we can offer",
      description: "We're here to tackle today's challenges and connect complex strategies, data, and technology with real-world solutions.",
      services: [
        "UI UX Website Design & Development",
        "Responsive Web Design",
        "Mobile Application Development",
        "Drupal Development",
        "Wordpress Development",
        "PHP Web Development"
      ]
    },
    {
      title: "Digital Strategy",
      description: "We're a top web design and development company in Navi Mumbai, helping businesses grow by using the latest technology and understanding customer needs. We turn challenges into opportunities and boost your brand's online presence.",
      services: [
        "Asp.Net Development",
        "PHP Code Ignitor Development",
        "PHP Development",
        "HTML5+CSS3 Development",
        "Node JS Development",
        "Angular JS Development"
      ]
    },
    {
      title: "Design Services",
      description: "We design websites that look great, are easy to use, and work well on all devices. Our goal is to help your business grow with smart, modern web design. That's why we're known as one of the top web design companies in Navi Mumbai.",
      services: [
        "React JS Development",
        "Branding",
        "Creative Design",
        "Social Communication",
        "Event / Exhibition Graphic Designing"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceColumns.map((column, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${
                index === 0 ? 'bg-secondary bg-opacity-20' : 
                index === 1 ? 'bg-primary' : 
                'bg-secondary bg-opacity-20'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{column.title}</h3>
              <p className="mb-6 text-gray-800">{column.description}</p>
              <div>
                {column.services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    <div className="dot"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
