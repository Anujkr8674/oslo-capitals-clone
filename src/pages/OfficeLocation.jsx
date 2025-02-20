import React from "react";
import "../style/OfficeLocation.css";

const offices = [
  {
    id: 1,
    title: "United Kingdom Office",
    address: "89 Gresham Street, 8th Floor, London EC2V 7JE, United Kingdom",
    phone: "+44 21 7912 3521",
    email: "support@oslocapitals.com",
    website: "www.oslocapitals.com",
    image: "/images/office1.png", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Europe Office",
    address: "DOMS Assets Business Centre, 44 Neas Engomis Street, 2119 Engomi, Nicosia, Cyprus",
    phone: "+357 25 817 101",
    email: "support@oslocapitals.com",
    website: "www.oslocapitals.com",
    image: "/images/office2.png" // Replace with actual image URL
  },
  {
    id: 3,
    title: "Germany Office",
    address: "Nürnberger Strasse 17, D-21376 Berlin, Germany",
    phone: "+49 30 912 4211 62",
    email: "support@oslocapitals.com",
    website: "www.oslocapitals.com",
    image: "/images/office3.png", // Replace with actual image URL
  },
];



const inquiries = [
    {
      id: 1,
      icon: "📍",
      title: "Request a call",
      description: "You want to request for call then click here to visit."
    },
    {
      id: 2,
      icon: "✉️",
      title: "Our Regulation",
      description: "See our regulation and license"
    },
    {
      id: 3,
      icon: "📞",
      title: "Customer Service",
      description: "International Phone Numbers (Phone Charges may apply)\n\nRequest a call with Extrede LLC"
    }
  ];

const OfficeLocations = () => {
  return (
    <div className="loc-office">
        <div className="office-head">
            <h1>Our Offices</h1>
        </div>
        <btr/><br/>
    <div className="office-container">
        
      <h2 className="office-title">Extrede Offices</h2>
      <div className="office-cards">
        {offices.map((office) => (
          <div key={office.id} className="office-card">
            <img src={office.image} alt={office.title} className="office-image" />
            <h3 className="office-card-title">{office.title}</h3>
            <p className="office-address">{office.address}</p>
            <p className="office-contact">
              📞 {office.phone} <br /> ✉️ {office.email} <br /> 🌐 {office.website}
            </p>
          </div>
        ))}
      </div>
      </div>

      <div className="inquiries-container">
      <h2 className="inquiries-title">General Inquiries</h2>
      <div className="inquiries-cards">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="inquiry-card">
            <span className="inquiry-icon">{inquiry.icon}</span>
            <h3 className="inquiry-title">{inquiry.title}</h3>
            <p className="inquiry-description">{inquiry.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    

    

    
  );
};

export default OfficeLocations;
