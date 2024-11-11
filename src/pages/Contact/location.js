import React from 'react';

const Location = () => {
  return (
    <div className="flex justify-center">
      <div className="p-10 text-white bg-primary rounded-3xl">
        <div className="flex items-center gap-12">
          {/* Left side - Contact Information */}
          <div className="space-y-10">
            <h1 className="text-3xl font-semibold">Get In Touch</h1>
            <p>Digital Waves is a digital marketing agency, we provide marketing and development services.</p>
            
            <div className="flex items-center space-x-5">
              <div className="h-12 w-12 bg-[#affase] p-2 rounded">
                <i className="text-3xl ri-map-pin-line text-secondary"></i>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Visit Us</h1>
                <p>763 Carling Avenue ,Ottawa</p>
                <p>Ontario Canada</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="h-12 w-12 bg-[#affase] p-2 rounded">
                <i className="text-3xl text-secondary ri-instagram-line"></i>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Dm us!</h1>
                <p>digitalwavess_</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="h-12 w-12 bg-[#affase] p-2 rounded">
                <i className="text-3xl ri-phone-fill text-secondary"></i>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Phone us</h1>
                <p>(519) 919 0110</p>
              </div>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="w-full h-full animate__animated animate__fadeInRight">
            <dotlottie-player 
              src="https://lottie.host/5b4ebc86-1fa9-4751-b3c2-f97d5b16a95f/8Oc8Mek13u.json" 
              background="transparent" 
              speed="1" 
              loop 
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;