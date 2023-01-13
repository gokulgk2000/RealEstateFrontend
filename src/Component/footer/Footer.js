import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="w-[100%] m-0 font-sans">
        <footer className="text-center lg:text-left primary text-gray-900">
          <div className="flex justify-center items-center lg:justify-between px-5 border-b text-gray-900 border-gray-300 ">
            <div className="flex justify-center"></div>
          </div>
          <div className="mx-6 py-10 text-left md:text-left pr-5 md:pl-28">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4  px-">
              <div className="">
                <h6
                  className="
              uppercase
              font-bold
              text-lg
              mb-4
              flex
              items-center        
              md:text-left
              primary-text
            "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="cubes"
                    className="w-4 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                    ></path>
                  </svg>
                  Real Estate
                </h6>
                <p className="text-white font-normal text-base">
                  Real estate is property in the form of land, houses or other
                  buildings. Title insurance guarantees the purchaser of real
                  estate against loss from undiscovered defects in the title to
                  property that has been purchased.
                </p>
              </div>
              <div className="md:pl-20">
                <h6 className="uppercase font-bold text-lg mb-4 flex primary-text md:text-left">
                  Categories
                </h6>

                <p className="mb-4">
                  <Link
                    to={"/"}
                    className=" text-white font-medium hover:text-orange-500"
                  >
                    Residential
                  </Link>
                </p>

                <p className="mb-4">
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Appartment
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Villa
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Land
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Commercial
                  </Link>
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-bold text-lg mb-4 flex primary-text md:text-left">
                  Quick links
                </h6>
                <p className="mb-4">
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Home
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to={"/about"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    About Us
                  </Link>
                </p>
                <p className="mb-4 ">
                  <Link
                    to={"/contact"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Contact
                  </Link>
                </p>
                <p>
                  <Link
                    to={"/"}
                    className="text-white font-medium hover:text-orange-500"
                  >
                    Help
                  </Link>
                </p>
              </div>
              <div className="md:pr-24">
                <h6 className="uppercase  mb-4 flex   primary-text md:text-left font-bold text-lg">
                  Contact
                </h6>
                <p className="flex items-center md:text-left mb-4 text-white">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  Coimbatore
                </p>
                <a className="flex justify-start items-center  md:text-left mb-4 text-white" href="mailto:umaapathi@gmail.com">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f7f3f2"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="pl-3">umaapathi@gmail.com</p>
                </a> 
                <p className="flex items-center md:text-left mb-4 text-white">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
              9842022008
                </p>
                <div className="flex gap-6 mt-10">
                  <a href="https://www.facebook.com/">
                    <svg
                      className="w-6 h-6 text-orange-500 fill-current hover:text-white transition ease-in-out duration-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/">
                    {" "}
                    <svg
                      className="w-6 h-6 text-orange-500 fill-current hover:text-white transition ease-in-out duration-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="https://in.linkedin.com/">
                    <svg
                      className="w-6 h-6 text-orange-500 fill-current hover:text-white transition ease-in-out duration-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full font-medium text-center pt-3 pb-3 border-t border-t-white">
            <span className=" primary-text">© 2022 Copyright.</span>
            <Link
              className=" primary-text font-semibold ml-1"
              to="/"
            >
              RealEstate
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
