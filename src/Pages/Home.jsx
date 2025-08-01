import React from 'react';
import img1 from '../Image/img/portfolio/1.jpg';
import img2 from '../Image/img/portfolio/2.jpg';
import img3 from '../Image/img/portfolio/3.jpg';
import img4 from '../Image/img/portfolio/4.jpg';
import img5 from '../Image/img/portfolio/5.jpg';
import img6 from '../Image/img/portfolio/6.jpg';
import img7 from '../Image/img/portfolio/7.jpg';
import img8 from '../Image/img/portfolio/8.jpg';
import img9 from '../Image/img/portfolio/9.jpg';
import img10 from '../Image/img/logo.png';
import formImage from '../Image/img/client/form.png';
import img11 from '../Image/img/client/product1.jpg';
import img12 from '../Image/img/client/product2.jpg';
import aboutUsImg from '../Image/img/about-us.jpg';
import aboutSssImg from '../Image/img/about-sss.jpg';
import whyChooseUsImage from '../Image/img/why-us-2.jpg';
import vrindaImg from '../Image/img/client/vrinda-tayal.jpg';
import shiviImg from '../Image/img/client/shivi-jain.jpg';
import tamannaImg from '../Image/img/client/tamanna-khurana.jpg';
import amishaImg from '../Image/img/client/amisha-gupta.jpg';
import srishtiImg from '../Image/img/client/srishti-aggarwal.jpg';
import sapnaImg from '../Image/img/client/sapna-aggarwal.jpg';
import whatsappImg from '../Image/img/whatsapp.gif';
import callImg from '../Image/img/portfolio/1.jpg';

import logo1 from '../Image/img/clients-logo/1.png';
import logo2 from '../Image/img/clients-logo/2.png';
import logo3 from '../Image/img/clients-logo/3.png';
import logo4 from '../Image/img/clients-logo/4.png';
import logo5 from '../Image/img/clients-logo/5.png';
import logo6 from '../Image/img/clients-logo/6.png';
import logo7 from '../Image/img/clients-logo/7.png';
import logo8 from '../Image/img/clients-logo/8.png';
import logo9 from '../Image/img/clients-logo/9.png';
import logo10 from '../Image/img/clients-logo/10.png';
import logo11 from '../Image/img/clients-logo/11.png';
import logo12 from '../Image/img/clients-logo/12.png';
import logo13 from '../Image/img/clients-logo/13.png';
import logo14 from '../Image/img/clients-logo/14.png';
import logo16 from '../Image/img/clients-logo/16.png';
import logo17 from '../Image/img/clients-logo/17.png';
import logo18 from '../Image/img/clients-logo/18.png';
import logo19 from '../Image/img/clients-logo/19.png';
import logo20 from '../Image/img/clients-logo/20.png';




function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-gray-100 py-2 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-gray-600">
            <span className="whitespace-nowrap"></span>
            <span className="flex items-center gap-1">
              <i className="fas fa-envelope text-pink-500"></i>
              info@globalrishte.com
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-phone text-pink-500"></i>
               011-25710036-37
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt text-pink-500"></i>
              Rajendra Place, New Delhi, Delhi, Delhi - 110008. 
            </span>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <a href="index.php.html">
          <img src={img10} alt="Global Rishte Logo" className="h-12" />
        </a>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-3xl"></i>
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-5 p-0 md:p-0 text-sm md:ml-6">
            {[
              { label: "Home", href: "index.php.html" },
              { label: "About Us", href: "about-us.php.html" },
              { label: "Package", href: "package.php.html" },
              { label: "Clients", href: "clients.php.html" },
              { label: "Gallery", href: "gallery.php.html" },
              { label: "Contact Us", href: "contact-us.php.html" },
              {
                label: "Request A Call Back",
                href: "#",
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
function Carousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = [{ src: img11 }, { src: img12 }];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Carousel images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[120vh]">
            <a href="about-us.php.html" className="block w-full h-full">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="absolute top-1 left-3 z-30 bg-white p-6 rounded shadow-lg w-[300px] h-[500px] overflow-y-auto">
  <h2 className="text-xl font-bold mb-4"><u><b>Search Here</b></u></h2>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700">Looking For</label>
      <select className="w-full border px-3 py-2 rounded">
        <option value="">Select</option>
        <option value="bride">Bride</option>
        <option value="groom">Groom</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Age</label>
      <input
        type="number"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter age"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Religion</label>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter religion"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Caste</label>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter caste"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Community</label>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter community"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Country</label>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter country"
      />
    </div>

    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
      Submit
    </button>
        </form>
      </div>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-40"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-40"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}


function WelcomeSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Image & Experience Box */}
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={aboutUsImg}
                alt="About Us"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-[-40px] left-4 bg-pink-100 p-6 rounded-lg shadow-md w-full">
              <h4 className="text-4xl font-bold text-pink-600">13+</h4>
              <h3 className="text-base font-semibold">Years Of Experiences</h3>
            </div>
          </div>

          {/* Right Side - Text & List */}
          <div className="md:w-1/2 md:pl-12">
            <div className="text-center md:text-left">
              <h3 className="text-pink-600 text-sm font-semibold mb-1">Introduction</h3>
              <h2 className="text-xl md:text-3xl font-bold mb-4 leading-tight ">
                We Make Your Every Moment Special
              </h2>
              <p className="mb-1 text-gray-500 text-base leading-tight ">
                At Global Rishte Matrimonial Services, we believe that marriage is one of the most significant milestones in a person’s life. With a deep understanding of the cultural and traditional values that shape matrimonial choices, we have dedicated ourselves to providing a platform where individuals can find their perfect life partner.
              </p>
              <ul className="space-y-1 text-gray-800 text-sm leading-tight ">
                {[
                  '5500+ Verified Profiles',
                  'Personalized Matchmaking Services',
                  'Expertise in Multiple Communities',
                  'Commitment to Authenticity and Confidentiality',
                  'Continuous Support Throughout the Process',
                  'A Partner in Your Journey to Love and Happiness',
                ].map((item, index) => (
                  <li key={index} className="flex items-start leading-tight">
                    <span className="text-pink-600 mr-2 mt-1">
                      <i className="fas fa-circle text-xs"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <a
                  href="about-us.php.html"
                  className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 text-sm"
                >
                  Read More
                </a>
                <a
                  href="contact-us.php.html"
                  className="bg-pink-600 text-white px-3 py-2 rounded hover:bg-pink-700 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ClientsSection() {
  const clients = [
    {
      name: 'Vrinda Tayal & Saurabh Garg',
      details: ['S/O Mr Sunil Garg', 'United Engineering Company', 'Residence: Nehru Nagar, Ghaziabad'],
      img: vrindaImg,
    },
    {
      name: 'Shivi Jain & Bhavya Jain',
      details: ['S/O late Mr Jain', 'Vinayl Pipes', 'Residence: Green Park, New Delhi'],
      img: shiviImg,
    },
    {
      name: 'Tamanna Khurana & Akash Gupta',
      details: ['S/O Mr Naresh Gupta', 'Captain Gogo, Kirti Nagar', 'Residence: Moti Nagar, Delhi'],
      img: tamannaImg,
    },
    {
      name: 'Amisha Gupta & Mohan Singhal',
      details: ['S/O Mr Anil Singhal', 'Residence: Rohini, New Delhi'],
      img: amishaImg,
    },
    {
      name: 'Srishti Aggarwal & Abhishek Gupta',
      details: ['S/O Neeraj Gupta', 'Residence: Gurgaon'],
      img: srishtiImg,
    },
    {
      name: 'Sapna Aggarwal & Umang Gupta',
      details: ['S/O Sanjay kumar Gupta', 'Ganesh Trading Company', 'Residence: Dwarka'],
      img: sapnaImg,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-pink-600 ">Clients</h3>
          <h2 className="text-xl font-bold">Our Clients</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-33 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-1">{client.name}</h3>
                {client.details.map((detail, i) => (
                  <p key={i} className="text-[15px] text-gray-600 leading-tight">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
<hr></hr>

function WhyChooseUsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
         {/* 🖼️ Image on Left */}
<div className="lg:w-1/2">
  <img
    src={whyChooseUsImage} // ← yahan image ka path apne according set karo
    alt="Why Choose Us" 
    className="rounded-2xl shadow-lg w-full h-[500px] object-cover" // Adjust height as needed
  />
</div>
         

          {/* 📝 Text on Right */}
<div className="lg:w-1/2 bg-pink-100 p-8 rounded-2xl shadow-lg">
  <div className="text-center lg:text-left">
    <h3 className="text-pink-600 text-2xl font-semibold mb-2">
      Why Choose Us?
    </h3>
    <h2 className="text-3xl md:text-6xl font-extrabold text-gray-800 mb-6">
      Why Global Rishte?
    </h2>
  </div>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Choosing the right matrimonial service can make all the difference in finding your perfect match.
    At <strong className="text-pink-700">Global Rishte Matrimonial Services</strong>, we stand out in the crowded matchmaking industry
    because of our commitment to <em>excellence</em>, <em>integrity</em>, and <em>personalized service</em>.
  </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'fas fa-shield-alt', title: 'Confidential & Secure' },
                { icon: 'fas fa-thumbs-up', title: 'Expert Matchmaking' },
                { icon: 'fas fa-cogs', title: '24x7 Support' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className={`${item.icon} text-pink-600 text-lg mt-1`}></i>
                  <h3 className=" font-medium text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FactsSection() {
  const facts = [
    { title: 'Project Done', value: 99 },
    { title: 'Happy Couples', value: 98 },
    { title: 'Expert Planner', value: 100 },
    { title: 'Verified Profiles', value: 99.99 },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Image Section */}
          <div className="lg:w-1/2">
            <img
              src={aboutSssImg}
              alt="Facts"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:w-1/2 bg-pink-100 p-6 rounded-lg shadow-lg text-sm">
            <h3 className="text-pink-600 text-xs font-semibold">Facts & Digit</h3>
            <h2 className="text-2xl font-bold mb-4 leading-snug">
              From First Meeting to Forever: A Journey of Love
            </h2>
            <p className="mb-6 text-xs leading-relaxed">
              At Global Rishte Matrimonial Services, we take pride in the countless
              love stories we've helped create. One of our recent success stories
              involves a couple who found each other through our platform, sharing a
              deep connection from their very first meeting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="text-center text-xs">
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#cda274"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${fact.value * 2.83}, 283`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold">
                      {fact.value}%
                    </div>
                  </div>
                  <h3 className="mt-2 text-sm font-medium">{fact.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h3 className="text-pink-600 text-sm uppercase tracking-widest mb-2">
            Photo Gallery
          </h3>
          <h2 className="text-5xl md:text-4xl font-bold text-gray-800">
            Our Captured Moments
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <a key={index} href={src} target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition duration-300"
              />
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <a
            href="gallery.php.html"
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full shadow hover:bg-pink-700 transition duration-300"
          >
            View More Images
          </a>
        </div>
      </div>
    </section>
  );
}

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14,
  logo16, logo17, logo18, logo19, logo20
];

function ClientsLogoSection() {
  return (
    <section className="py-8"> {/* Less padding vertically */}
      <div className="max-w-10xl mx-auto px-4"> {/* Smaller width and padding */}
        <div className="text-center mb-6">
          <h1 className="text-pink-600 text-4px">Clients List</h1> {/* Smaller subheading */}
          <h1 className="text-xl font-semibold">Our Clients</h1> {/* Smaller main heading */}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {logos.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="h-20 object-contain" // slightly smaller height
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ClientsLogoSection };


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-1">Sign Up To Get Latest Update</h3>
            <p className="text-gray-400">Join our newsletter for the latest news & articles</p>
          </div>
          <div className="w-full max-w-md">
            <div className="flex text-sm bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-3 py-1.5 rounded-l-md text-black text-sm focus:outline-none"
              />
              <button className="bg-pink-600 text-white px-4 py-1.5 rounded-r-md hover:bg-pink-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* About */}
          <div>
            <h3 className="text-base font-semibold mb-2">About Us</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              At Global Rishte Matrimonial Services, we understand the value of tradition and compatibility. Our platform helps individuals find meaningful connections and perfect life partners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {['Home', 'About Us', 'Gallery', 'Clients', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a
                    href={`${link.toLowerCase().replace(' ', '-')}.php.html`}
                    className="hover:text-pink-500 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-2">Contact Info</h3>
            <div className="space-y-2 text-gray-400 text-xs">
              <div>
                <span className="text-pink-500 font-medium">Phone:</span>
                <p>011-25710036-37</p>
              </div>
              <div>
                <span className="text-pink-500 font-medium">Email:</span>
                <p>info@globalrishte.com</p>
              </div>
              <div>
                <span className="text-pink-500 font-medium">Location:</span>
                <p>CITIZEN REGIONAL OFFICE - DELHI. 810, 8th Floor Padma Tower-I Rajendra Place, New Delhi, Delhi, Delhi - 110008. India.</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-base font-semibold mb-2">Reach Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14..."
              width="100%"
              height="180"
              className="rounded shadow-sm"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-xs text-gray-400">
          <p className="mb-2 md:mb-0">
            © 2025. All rights reserved. Designed by{' '}
            <a href="https://www.websunindia.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
              Bigdesign software technologies
            </a>
          </p>
          <div className="flex space-x-3">
            {['facebook-f', 'linkedin-in', 'instagram', 'youtube'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white hover:text-pink-500 transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <WelcomeSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <FactsSection />
      <GallerySection />
      <ClientsLogoSection />
      <Footer />
      <a href="https://api.whatsapp.com/send/?phone=919650206995" target="_blank">
        <img src={whatsappImg} className="fixed bottom-20 right-4 w-12 h-12" />
      </a>
      <a href="tel:+09650206995" target="_blank">
        <img src={callImg} className="fixed bottom-4 right-4 w-12 h-12" />
      </a>
      
      <a href="#top" className="fixed bottom-4 left-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;