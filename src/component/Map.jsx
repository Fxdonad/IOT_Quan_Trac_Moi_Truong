import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29802.25195853805!2d105.7718272!3d20.981350399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1722604476172!5m2!1svi!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default Map;
