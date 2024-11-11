import React from 'react'

function MarketingStrategies() {
    const strategies = [
        {
            title: "CONTENT MARKETING",
            description:
                "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online.",
            image: "images/content.png",
        },
        {
            title: "INBOUND MARKETING",
            description:
                "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the buyer’s journey.",
            image: "images/inbound.png",

        },
        {
            title: "SOCIAL MEDIA",
            description:
                "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks.",
            image: "images/socialmedia.png",
        },
        {
            title: "INFLUENCER MARKETING",
            description:
                "Influencer marketing involves partnering with individuals who have a strong following to promote your brand, reaching their audience and building trust.",
            image: "images/influencer.png",
        },
    ];



    return (
        <div>
            <h1 className='text-5xl font-semibold text-primary'>Want to boost your business growth ?</h1>
            <h1 className='mt-10 font-semibold text-7xl text-primary'>The <b className='text-secondary'>SOLUTION </b>is here...</h1>
            <p className='mt-10 text-xl text-gray-600'>Unlock your business’s potential with our expert strategies tailored to drive growth. From digital marketing to customer retention, our solutions are designed to boost visibility, enhance engagement, and maximize revenue. Let’s transform your business into a market leader—start your journey to success today. The results speak for themselves!</p>

            <div className='grid grid-cols-2 gap-10 mt-10'>
                {strategies.map(item => {
                    return <div className='flex flex-col p-5 space-y-5 duration-300 transform border rounded border-primary hover:scale-105 '>
                        <h1 className='py-2 -mt-8 text-2xl font-semibold text-center bg-white border rounded border-primary text-secondary'>{item.title}</h1>
                        <img src={item.image} alt={item.title}  className='w-48 h-32' />
                        <p className='py-2 text-xl text-gray-600 hover:text-primary'>{item.description}</p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default MarketingStrategies