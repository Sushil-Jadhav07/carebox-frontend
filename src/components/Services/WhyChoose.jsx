
export default function WhyChoose() {
  const features = [
    {
      number: '01',
      title: 'Expertise from Industry Veterans',
      description:"Our founders and team bring over 25 years of combined experience in the courier industry, ensuring that every shipment is handled with the highest level of professionalism and care.",
    },
    {
      number: '02',
      title: "Fast & Reliable Service",
      description:"Whether it’s local express deliveries or domestic shipments, Carebox guarantees timely, dependable service with a strong focus on on-time delivery.",
      },
    {
      number: '03',
      title: "Safe & Secure Handling",
      description:"We understand the value of your shipments, which is why we provide safe and secure handling for every package, ensuring it reaches its destination in perfect condition.",
      },
    {
      number: '04',
      title: "Wide Coverage Across Mumbai & Beyond",
      description:"Based in Mumbai, we specialize in local express courier services but also offer extensive domestic shipping solutions, covering major cities throughout India.",
      },
    {
      number: '05',
      title: "Affordable Pricing",
      description:"We offer competitive, transparent pricing for all our courier services, making high-quality shipping accessible to businesses and individuals alike.",
      },
    {
      number: '06',
      title: "Real-Time Tracking",
      description:"Stay in control with our real-time tracking system, giving you complete visibility of your shipments from pickup to delivery.",
      },
  ];

  return (
    <section className="whyChooseUs">
      <div className="container">
        <p className="subtitle">WHY CHOOSE US</p>
        <h2 className="title">for Your Logistics Needs?</h2>
        {/* <p className="description">
          At [Your Ceramic Vases Website Name], we take pride in offering more than
          just products; we offer an experience. Here's what makes us unique:
        </p> */}

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="numberBadge">{feature.number}</div>
              <h3 className="cardTitle">{feature.title}</h3>
              <p className="cardDescription">{feature.description}</p>
              <a href="#" className="learnMore">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

