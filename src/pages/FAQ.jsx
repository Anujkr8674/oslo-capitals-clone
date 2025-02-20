import React, { useState } from "react";
import "../style/FAQ.css";

const FAQ = () => {




    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        date: "",
        time: "",
        comment: "",
        accepted: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
      };





  const [openIndex, setOpenIndex] = useState(null);



  const faqs = [
    {
      question: "How do I open a live trading account?",
      answer:
        "To register for a live trading account, click on the 'Register' icon on the Extrede homepage and follow the steps required to complete the sign-up process. You will be asked to upload your ID document(s) during the process, or you can upload them later via Extrede Direct. You can also register through our Extrede App for iOS & Android. Once registered, you can proceed to fund your account and start trading on any one of our platforms.",
    },
    {
      question: "What methods can I use to deposit funds into my Extrede account?",
      answer: "We accept Bank Wire transfers, Credit/Debit cards, PayPal, Neteller, Skrill and some more methods available as per your country of residence.",
    },
    {
      question: "Are my personal details secure with you?",
      answer: "Extrede takes serious precautionary measures to ensure that your personal details are held in absolute confidence. Your passwords are encrypted and your personal details are stored on secure servers and cannot be accessed by anyone, with the exception of a very small number of authorised members of staff.",
    },
    {
      question: "What documents do you require?",
      answer: "We require a copy of your valid International Passport, National ID card or Driver's Licence in order to verify your identity. We may also request a Proof of residence document showing your name and address, issued within the last 6 months. The document(s) required and their current verification status can be seen at any time via Extrede Direct.",
    },
    {
      question: "How do I withdraw funds when my account is locked?",
      answer: "Please use the registered email address with Extrede and request your withdrawal request by emailing support@oslocapitals.com In the email specify your withdrawal method, your Extrede account number and the withdrawal…",
    },
    {
      question: "What is the status of my deposit/withdrawal?",
      answer: "Please check your deposit/withdrawal by logging to Oslocapitals.com. Deposit processing times may vary depending on the Deposit Method you used. For the most common methods: Debit/Credit Card could take up…",
    },
  ];


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
      title: "International Offices",
      description: "See a complete list of our offices and their contact numbers ."
    },
    {
      id: 2,
      icon: "✉️",
      title: "send us an email",
      description: "Reach out via support@extrede.com and we'll get back to you in 24 hours"
    },
    {
      id: 3,
      icon: "📞",
      title: "Customer Service",
      description: "International Phone Numbers (Phone Charges may apply)\n\nRequest a call with Extrede LLC"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="contact1-container">

        <div className="faq-head">
            <h1>Contact Us</h1>
            <p>Our dedicated support specialists speak 15 languages. Support is</p>
            <p>available 24 hours a day, 7 days a week in English, Chinese, Thai</p>
            <p>Vietnamese, Arabic, Bengali, Hindi and Urdu.</p>
        </div>

        <br/><br/>

<div className="faq-contact-container">
      {/* Support Availability Section */}
      <div className="faq-contact-support">
        <h2>Support availability</h2>
        <ul>
          <li className="faq-contact-online">✅ <strong>Online 24/7</strong> <br/> <span id="faq-lan">Languages: English, Thai, Chinese, Vietnamese, Arabic, Bengali, Hindi, Urdu</span></li>
          <li className="faq-contact-online">✅ Online <br/> <span  id="faq-lan">Language: Indonesian</span></li>
          <li className="faq-contact-online">✅ Online <br/> <span  id="faq-lan">Language: French</span></li>
          <li className="faq-contact-online">✅ Online <br/> <span  id="faq-lan">Language: Portuguese</span></li>
          <li className="faq-contact-offline">❌ In 5 hours <br/> <span  id="faq-lan">Language: Korean</span></li>
          <li className="faq-contact-offline">❌ In 1 hour <br/> <span  id="faq-lan">Language: Japanese</span></li>
          <li className="faq-contact-online">✅ Online <br/> <span  id="faq-lan">Language: Swahili</span></li>
        </ul>
      </div>

      {/* Request a Call Section */}
      <div className="faq-contact-call">
        <h2>Request a call</h2>
        <form onSubmit={handleSubmit}>
          <div className="faq-contact-form-group">
            <label>Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="faq-contact-form-group">
            <label>Mobile Number *</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="faq-contact-form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="faq-contact-row">
            <div className="faq-contact-form-group">
              <label>Select Date *</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="faq-contact-form-group">
              <label>Time *</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
          </div>
          <div className="faq-contact-form-group">
            <label>Write your comment here *</label>
            <textarea name="comment" value={formData.comment} onChange={handleChange} required></textarea>
          </div>
          <div className="faq-contact-checkbox">
            <input type="checkbox" name="accepted" checked={formData.accepted} onChange={handleChange} required />
            <label>Yes, I accept.</label>
          </div>
          <p id="faq-para">Extrede will use data collected for the purposes of providing service, contacting, and sending you important information. To find out more, please visit our Privacy Policy.</p>
          <button type="submit" className="faq-contact-submit">Submit Now</button>
        </form>
      </div>
    </div>


    <br/><br/><br/>

<img  id="faq-img" src="images\introbg1.png" alt="aw1"/>
         <div className="inquiries-container">
      <h2 className="inquiries-title">General Inquiries</h2>
      <div  className="inquiries-cards">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} id="faq-card" className="inquiry-card">
            <span className="inquiry-icon">{inquiry.icon}</span>
            <h3 className="inquiry-title">{inquiry.title}</h3>
            <p className="inquiry-description">{inquiry.description}</p>
          </div>
        ))}
      </div>
    </div><br/><br/>

<br/>
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

        <div className="Faq">
            <div className="faq1">
            <img  id="faq-img1" src="images\faq1.png" alt="faq"/>

            </div>

            <div className="faq2">
            <h2 className="contact1-heading">Have a question?</h2>
      <div className="contact1-faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="contact1-faq-item">
            <button className="contact1-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="contact1-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
            </div>
        </div>
      
    </div>
  );
};

export default FAQ;
