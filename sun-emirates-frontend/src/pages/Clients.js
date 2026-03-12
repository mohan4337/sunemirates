import React from 'react';

const Clients = () => {
  const clients = [
    { src: "/images/Clients/Clients1.png", alt: "KHANSAHEB", category: "Construction" },
    { src: "/images/Clients/Clients2.png", alt: "AL Basti & Muktha LLC", category: "Construction" },
    { src: "/images/Clients/Clients3.png", alt: "ThyssenKrupp", category: "Engineering" },
    { src: "/images/Clients/Clients4.png", alt: "MEGARME", category: "Marine" },
    { src: "/images/Clients/Clients5.png", alt: "New Trade Links LLC", category: "Trading" },
    { src: "/images/Clients/Clients6.png", alt: "Ferrotech International Fze", category: "Industrial" },
    { src: "/images/Clients/Clients7.png", alt: "Al Ghandi Electronics", category: "Electronics" },
    { src: "/images/Clients/Clients8.png", alt: "Hi-Tec", category: "Technology" },
    { src: "/images/Clients/Clients9.png", alt: "Somec-Sharaf", category: "Construction" },
    { src: "/images/Clients/Clients10.png", alt: "STADLERS", category: "Railway" },
    { src: "/images/Clients/Clients11.png", alt: "AL REYAMI", category: "Construction" },
    { src: "/images/Clients/Clients12.png", alt: "Dutco Balfour Beatty LLC", category: "Construction" },
    { src: "/images/Clients/Clients13.png", alt: "AL REYAMI INTERIORS", category: "Interior" }
  ];

  const clientCategories = [
    { name: "Construction", count: 5 },
    { name: "Engineering", count: 1 },
    { name: "Marine", count: 1 },
    { name: "Industrial", count: 1 },
    { name: "Trading", count: 1 },
    { name: "Technology", count: 1 },
    { name: "Railway", count: 1 },
    { name: "Interior", count: 1 },
    { name: "Electronics", count: 1 }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Clients</h1>
          <p>Trusted by leading companies across the UAE</p>
        </div>
      </div>

      {/* Client Logos */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Valued Clients</h2>
            <p className="text-light">
              We are proud to have served a diverse range of clients across various industries
            </p>
          </div>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-logo">
                <img 
                  src={client.src} 
                  alt={client.alt}
                  title={client.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Industries We Serve</h2>
          </div>
          <div className="services-grid">
            {clientCategories.map((category, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">🏢</div>
                <h3>{category.name}</h3>
                <p>{category.count} Client{category.count > 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Why Clients Choose Us</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Quality Assurance</h3>
              <p>
                ISO 9001:2015 certified company with rigorous quality control 
                processes ensuring consistent excellence in every project.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Expertise</h3>
              <p>
                Over 15 years of combined experience in steel fabrication with 
                skilled engineers and certified welders.
              </p>
            </div>
            <div className="service-card">
              <h3>On-Time Delivery</h3>
              <p>
                Commitment to project timelines with efficient production 
                planning and execution capabilities.
              </p>
            </div>
            <div className="service-card">
              <h3>Competitive Pricing</h3>
              <p>
                Cost-effective solutions without compromising on quality, 
                providing excellent value for investment.
              </p>
            </div>
            <div className="service-card">
              <h3>Safety Standards</h3>
              <p>
                Strict adherence to safety regulations with regular training 
                and compliance audits.
              </p>
            </div>
            <div className="service-card">
              <h3>Customer Support</h3>
              <p>
                Dedicated project management and communication for seamless 
                coordination throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
