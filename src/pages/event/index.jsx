import { eventOne, location } from "../../assets"
import EventButton from "./components/eventButton"
const Event = () => {
  return (
    <>
      <div className="flex gap-6 m-5 justify-end">
        <div className="bg-white rounded-lg px-4 py-2">
          <EventButton name="Login" className="bg-white" />
        </div>
        <div className="bg-blue-500 rounded-md  text-white px-4 py-2">
          <EventButton name="SignUp" />
        </div>
      </div>
      <div className="relative w-full h-full">
  <img className="brightness-50 object-cover w-full h-full" src={eventOne} alt="Event image" />
  <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-2">
    <button className="bg-purple-600 text-white py-2 px-4 rounded">Back</button>
    <h3 className="text-white text-4xl font-bold">Dream world wide in jakarta</h3>
    <p className="text-white text-xl font-semibold">IIIT Sonepat</p>
    <p className="text-white max-w-md">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
   
  </div>
  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-6 shadow-lg rounded-lg">
    <p className="text-gray-800 font-semibold">Date & time</p>
    <p className="text-gray-800">Saturday, March 18 2023, 9:30PM</p>
    <a href="#" className="text-blue-600">Add to calendar</a>
    <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">Book now</button>
    <button className="mt-2 bg-gray-200 text-gray-800 py-2 px-4 rounded">Program promoter</button>
    <p className="text-gray-400 mt-2">No Refunds</p>
  </div>
</div>

<div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-4">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. 
              The workshop taught participants the magic of creating stunning 3D models and 
              animations using Blender. It was suitable for both beginners and experienced users. 
              The event was followed by a blender-render competition, which added to the excitement.
            </p>
            <p className="text-gray-700">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. 
              The workshop taught participants the magic of creating stunning 3D models and 
              animations using Blender. It was suitable for both beginners and experienced users. 
              The event was followed by a blender-render competition, which added to the excitement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Hours</h2>
            <p className="text-gray-700">Weekdays hour: <span className="text-blue-600">7PM - 10PM</span></p>
            <p className="text-gray-700">Sunday hour: <span className="text-blue-600">7PM - 10PM</span></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Organizer Contact</h2>
            <p className="text-gray-700">
              Please go to <a href="http://www.sneakypeeks.com" className="text-blue-600">www.sneakypeeks.com</a> 
              and refer the FAQ section for more detail
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Event location</h2>
            <img src={location} alt="Event location" className="w-full h-auto rounded" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Dream world wide in jakatra</h2>
            <p className="text-gray-700 mb-4">
              Dummy location generation model by RSU ... Our approach generates more realistic dummy locations
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Indonesia event</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Jaskaran event</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">UI</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Jaskaran event</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Seminar</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Jaskaran event</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Share with friends</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600"><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href="https://whatsapp.com" className="text-green-600"><i className="fab fa-whatsapp-square fa-2x"></i></a>
              <a href="https://linkedin.com" className="text-blue-700"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://twitter.com" className="text-blue-500"><i className="fab fa-twitter-square fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Event