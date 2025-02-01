export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items">
          <div className="md:w-1/3">

        <img src="/Images/Logo.png" alt="Company Logo" className="h-10 w-auto b" />
            <p className="text-sm mt-2">

              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective – your
              business results.
            </p>
          </div>
  
          <div className="md:w-1/3 mt-6 md:mt-0 ">
            <h3 className="text-lg font-semibold">Our Technologies</h3>
            <ul className="mt-2 space-y-1">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
  
          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-2 space-y-1">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
  
        <hr className="border-white mt-6" />
  
        <div className="text-center text-sm mt-4">
          <a href="#" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          |
          <a href="#" className="ml-4 hover:underline">
            Terms & Conditions
          </a>
        </div>
      </footer>
    );
  }
  