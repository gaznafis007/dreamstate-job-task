import Title from '../Components/Title'

export default function EventDetails() {
  return (
    <section id='event-details'>
        <Title>City Tour and Cruiser Launch on March 26th</Title>
        <div className="flex flex-col md:flex-row-reverse overflow-hidden p-4">
            <div className='w-full md:w-1/3'>
            <img src="https://images.pexels.com/photos/6746779/pexels-photo-6746779.jpeg?auto=compress&cs=tinysrgb&w=600" alt="cruiser" />
            </div>
            <p className="my-8 mx-6 w-full md:w-2/3">
Mark your calendars for an unforgettable experience as we embark on a city tour like never before, coupled with the grand launch of our company's latest fleet of cruisers. This extraordinary event is set to take place on the 26th of March, promising an immersive and thrilling adventure for all attendees.
<br />
As the sun rises on the horizon, join us for a mesmerizing city tour that will showcase the beauty and charm of our vibrant city. From iconic landmarks to hidden gems, our carefully curated tour will take you on a journey through the heart and soul of the city, offering a unique perspective and creating lasting memories. Whether you're a local enthusiast or a visitor, this is an opportunity to discover the city in a whole new light.
<br />
The highlight of the day will be the unveiling of our five distinct cruiser models, each designed to cater to different preferences and elevate your cruising experience. The "Standard Cruiser" promises reliability and comfort, perfect for those seeking a classic and timeless adventure. For those who desire a little extra, the "Extra Standard Cruiser" brings an added touch of luxury and sophistication, ensuring a ride that goes beyond expectations.
<br />
Stepping up the game, the "Standard Cruiser Plus" offers enhanced features and amenities, providing a premium cruising experience that caters to discerning tastes. Elevate your journey with the "Premium Cruiser," a model that combines style, performance, and cutting-edge technology to redefine the standards of luxury cruising. Lastly, indulge in the epitome of opulence with our "Luxury Cruiser," where every detail is meticulously crafted to deliver an unparalleled level of extravagance.
<br />
This event isn't just about launching cruisers; it's a celebration of innovation, style, and the joy of exploration. Join us on March 26th to witness the dawn of a new era in cruising, where every journey is an adventure, and every cruiser is a masterpiece. Be prepared to be captivated, enthralled, and inspired as we set sail into the future of cruising excellence. We can't wait to share this remarkable day with you, so secure your spot now for an experience that promises to leave you breathless and eager for more.
        </p>
        </div>
    </section>
  )
}
