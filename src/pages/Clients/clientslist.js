import React, { useState } from "react";

function Cl() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const clients = [
  {
    name: "Ash Couture",
    logo: `${process.env.PUBLIC_URL}/images/ashcouture.png`,
    url: "https://www.ashcouture.com/",
    description: "ASH COUTURE is a clothing brand offering customized Western and Indo-Western fashion, managed by @ashmeettakkar04.",
    rating: 4.3,
  },
  {
    name: "Simran Luther Makeup Artist",
    logo: `${process.env.PUBLIC_URL}/images/simranluther.png`,
    url: "https://www.simranluthermakeup.com/",
    description: "Simran Luther is a bridal makeup artist based in Jalandhar, providing customized makeup services.",
    rating: 4.5,
  },
  {
    name: "J.K. Public Sr. Sec. School",
    logo: `${process.env.PUBLIC_URL}/images/jkpublicschool.png`,
    url: "https://www.jkpublicschool.com/",
    description: "Educating, inspiring, and nurturing young minds for a brighter tomorrow.",
    rating: 4.4,
  },
  {
    name: "BrightMedia",
    logo: `${process.env.PUBLIC_URL}/images/brightmedia.png`,
    url: "https://www.brightmedia.com/",
    description: "BrightMedia specializes in digital content creation and marketing for startups.",
    rating: 4.2,
  },
  {
    name: "SocialVibe",
    logo: `${process.env.PUBLIC_URL}/images/socialvibe.png`,
    url: "https://www.socialvibe.io/",
    description: "SocialVibe is a boutique agency focused on social media management for local businesses.",
    rating: 4.4,
  },
  {
    name: "EcoBrand Solutions",
    logo: `${process.env.PUBLIC_URL}/images/ecobrand.png`,
    url: "https://www.ecobrandsolutions.com/",
    description: "EcoBrand offers eco-friendly branding and marketing solutions for small businesses.",
    rating: 4.5,
  },
  {
    name: "TechReach",
    logo: `${process.env.PUBLIC_URL}/images/techreach.png`,
    url: "https://www.techreach.net/",
    description: "TechReach specializes in digital advertising for tech startups and SaaS products.",
    rating: 4.3,
  },
  {
    name: "InstaBoost",
    logo: `${process.env.PUBLIC_URL}/images/instaboost.png`,
    url: "https://www.instaboost.com/",
    description: "InstaBoost helps small businesses grow their Instagram presence with tailored strategies.",
    rating: 4.6,
  },
  {
    name: "NextGen Creatives",
    logo: `${process.env.PUBLIC_URL}/images/nextgen.png`,
    url: "https://www.nextgencreatives.com/",
    description: "NextGen provides creative content and video marketing for niche brands.",
    rating: 4.7,
  },
];
  const clientsToShow = clients.slice(selectedClientIndex, selectedClientIndex + 2);

  const next = () => {
    if (selectedClientIndex + 2 < clients.length) {
      setSelectedClientIndex(selectedClientIndex + 2);
    }
  };

  const previous = () => {
    if (selectedClientIndex - 2 >= 0) {
      setSelectedClientIndex(selectedClientIndex - 2);
    }
  };

  const totalPages = Math.ceil(clients.length / 2);

  return (
    <div>
      <div className="rounded-b-full bg-primary h-44"></div>
      <div className="flex items-end justify-center space-x-10 overflow-x-hidden -mt-44">
        {selectedClientIndex > 0 && (
          <i className="text-4xl text-gray-600 cursor-pointer ri-arrow-left-line" onClick={previous}></i>
        )}
        <div className="flex space-x-10">
          {clientsToShow.map((client, index) => (
            <div key={index} className="bg-white shadow p-5 w-[500px] border h-[300px]">
              <div className="flex items-center justify-between space-x-10">
                <h1 className="text-2xl font-semibold text-primary">{client.name}</h1>
                <img src={client.logo} alt="" className="w-32 h-32" />
              </div>
              <p className="mt-10 font-semibold text-gray-600 text-md">{client.description}</p>
              <p>
                <span className="text-gray-600 text-md">Rating: <span className="text-primary">{client.rating}</span></span>
              </p>
            </div>
          ))}
        </div>
        {selectedClientIndex + 2 < clients.length && (
          <i className="text-4xl text-gray-600 cursor-pointer ri-arrow-right-line" onClick={next}></i>
        )}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className={`w-4 h-4 rounded-full cursor-pointer ${selectedClientIndex / 2 === pageIndex ? "bg-primary" : "bg-gray-400"}`}
            onClick={() => setSelectedClientIndex(pageIndex * 2)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Cl;