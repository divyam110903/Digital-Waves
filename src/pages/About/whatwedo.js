import React from 'react';

function Whatwedo() {
    const items = [
        {
            title: "Web Development",
            icon: "images/web.png",
            description: "Web development is the work involved in developing a website for the Internet or an intranet."
        },
        {
            title: "Video Marketing",
            icon: "images/video.png",
            description: "Video marketing involves creating and promoting video content to engage and educate target audiences, increasing brand awareness and conversions."
        },
        {
            title: "Digital Marketing",
            icon: "images/digital-marketing.png",
            description: "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan."
        },
        {
            title: "Graphic Design",
            icon: "images/digital-drawing.png",
            description: "Graphic design is the craft of creating visual content to communicate messages."
        }
    ];

    return (
        <div>
           
            <h1 className='z-20 mt-40 font-semibold text-center text-secondary text-8xl'>What We Do?</h1>
            <div className='flex flex-wrap justify-center gap-4 mt-10'>
                {items.map((item, index) => (
                    <div key={index} className="max-w-sm p-4 m-4 text-center transition-transform duration-300 border rounded-lg shadow-lg hover:scale-105">
                        <img 
                            src={item.icon} 
                            alt={item.title} 
                            className='w-32 h-32 mx-auto mb-4' 
                        />
                        <h2 className='mb-2 text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-gray-600'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Whatwedo;
