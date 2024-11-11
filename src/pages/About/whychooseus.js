import React from 'react'

function Whychooseus() {
    const items = [
        {
            title: "Innovative and Passionate",
            image: "images/innovation.png",
            description: "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the..."
        },
        {
            title: "Good Return on Investment",
            image: "images/investment.png",
            description: "Working with us means providing your business with great savings. All our digital marketing and web development packages are..."
        },
        {
            title: "Seamless Customer Support",
            image: "images/customer-support.png",
            description: "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have."
        }
    ];

    return (
        <div className="mx-32 mt-20 border shadow">
          <div className="flex items-center justify-center w-full bg-primary h-72">
            <h1 className="font-semibold text-white text-7xl">Why Choose Us</h1>
          </div>
          <div className="grid grid-cols-3 gap-5 p-5">
            {items.map((item) => (
              <div className="flex flex-col items-center p-5 space-y-5 duration-300 transform bg-white border shadow hover:scale-105" key={item.title}>
                <img src={item.image} className="w-20 h-20" alt={item.title} />
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="text-gray-600 text-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Whychooseus
