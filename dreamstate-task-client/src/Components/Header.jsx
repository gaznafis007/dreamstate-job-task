import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect"
export default function Header() {
  return (
    <>
        <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <img src="https://images.pexels.com/photos/4092994/pexels-photo-4092994.jpeg?auto=compress&cs=tinysrgb&w=600" alt="cruise-ship" className="w-full md:w-1/2" />
    <div className="w-full md:w-1/2">
      <h1 className="text-5xl font-bold capitalize">
        {
            <TypewriterComponent onInit={(typewriter) => {
                typewriter
                    .typeString("40% off on private compartment")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("city tour in luxury river cruise on 26th march.")
                    .start();
            }}></TypewriterComponent>
        }
      </h1>
      <p className="py-6">There is an event hosted by <span className="font-semibold">Cruiser 71</span> where a grand opening of luxury cruiser an the event will held on the cruise with city tour</p>
      <Link to="/" className="btn bg-blue-400 text-white hover:bg-blue-500">Register Now</Link>
    </div>
  </div>
</div>
    </>
  )
}
