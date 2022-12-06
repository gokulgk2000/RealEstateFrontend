import React, { useEffect, useState } from "react";
import { getPropertyById } from "../helper/backend_helpers";
import { useQuery } from "../helper/hook/useQuery";

const Detailspage = (props) => {
  const query = useQuery();
  const [loading, setLoading] = useState(true);
  const [property, setproperty] = useState({});
  const [curentImage, setcurentImage] = useState(0);
  const propertyDetails = async () => {
    const res = await getPropertyById({ propertyId: query.get("uid") });

    if (res.success) {
      setproperty(res?.property);
      console.log("data", res);
    } else {
      console.log("Error while fetching property");
    }
  };

  useEffect(() => {
    const handleProperty = async () => {
      setLoading(true);
      await propertyDetails();
      setLoading(false);
    };
    handleProperty();
  }, []);
  return (
    <>
      {loading ? (
        <>Loadimgggggg....</>
      ) : (
        <div>
          <div className="md:pt-20 md:pr-32 md:pl-20  ">
            <div className="py-4 px-8 bg-white shadow-lg ">
              <div className="grid  md:grid-cols-2 py-8 md:pr-8 ">
                {" "}
                <img
                  className=" aspect-[3/2] md:pr-5 md:h-96 "
                  src={property?.propertyPic[curentImage]}
                />
                <div className="grid grid-cols-3 gap-y-10 gap-x-10 h-44 bg-white border-none ">
                  {property?.propertyPic.map((image, i) => (
                    <button
                      className="shadow-md hover:shadow-lg bg-slate-50 object-cover shadow-gray-800  rounded-md "
                      onClick={() => setcurentImage(i)}
                    >
                      {" "}
                      <img className=" w-48  rounded-md aspect-[1]" src={image} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:pl-20 md:pr-32 py-5 pb-5 ">
              <details
                class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
       close
              >
                <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                  Property Details
                </summary>
                <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <div className="relative  rounded-2xl  capitalize ">
                    <div className="lg:flex justify-between md:gap-12 md:px-4 py-2  ">
                      <div className="md:p-5 bg-white ">
                        <div className="text-lg font py-3 ">
                          Seller: <span className="  ">{property?.Seller}</span>
                        </div>
                        <div className="text-lg  font py-3">
                          Location:
                          <span className="   ">
                            {property?.location},
                            <span className="text-sm">
                              {property?.streetName}
                            </span>
                          </span>
                        </div>
                        <div className="text-lg font py-3">
                          Layoutname:
                          <span className="   ">{property?.layoutName}</span>
                        </div>
                        <div className="text-lg  font py-3">
                          Landarea:
                          <span className="  ">{property?.landArea}</span>
                        </div>{" "}
                        <div className="text-lg font py-3">
                          Property Type:
                          <span className="   ">
                            {property?.category?.name}
                          </span>
                        </div>{" "}
                      </div>
                      <div className="md:p-5  bg-white">
                        {" "}
                        <div className="text-lg font  py-3">
                          Facing:<span className="   ">{property?.facing}</span>
                        </div>
                        <div className="text-lg font  py-3">
                          Approchroad:
                          <span className="   ">{property?.approachRoad}</span>
                        </div>
                        <div className="text-lg  font py-3">
                          Builtarea:
                          <span className="   ">{property?.builtArea}</span>
                        </div>
                        <div className="text-lg py-3  font">
                          Bedroom:
                          <span className="   ">{property?.bedRoom}</span>
                        </div>{" "}
                        <div className="text-lg font py-3 ">
                          Floordetails:
                          <span className="   "> {property?.floorDetails}</span>
                        </div>
                      </div>
                      <div className="  md:p-5 ">
                        <div className="text-lg py-3 font">
                          Askprice:
                          <span className="   ">₹.{property?.askPrice}</span>
                        </div>
                        <div className="text-lg  py-3 font">
                          Neartown:
                          <span className="   ">{property?.nearTown}</span>
                        </div>
                        <div className="text-lg font py-3 ">
                          Costsq:
                          <span className="   ">₹.{property?.costSq}sft</span>
                        </div>{" "}
                        <div className="text-lg font py-3 text-ellipsis overflow-hidden w-72 ">
                          Facilities:
                          <span className=" ">{property?.facilities}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
           
          </div>
          <div className="md:pl-20 md:pr-32  pb-5 ">
            <details
              class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
              close
            >
              <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                Description
              </summary>
              <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <p> {property?.Description}</p>
              </div>
            </details>
          </div>
          {/* <div className="md:pl-20 md:pr-32  pb-5 ">
            <div className=" md:grid p-8  bg-white shadow-lg  gap   hover:shadow-sm  gap-y-7 gap-x-5 capitalize  hover:overflow-visible  ">
              <p className="text-lg font ">description</p>
              <p className="font text-sm hover:text-left
              ">
                {" "}
                {property?.Description}
              </p>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Detailspage;
{
  /* <div className="grid md:grid-cols-2 bg-emerald-50 md:px-10  px-5 text-lg   -serif">
        <div className="mr-2 py-">
          <div className="w-full select-none relative aspect-[1]">
            {!loading && (
              <img
                className="w-full mt-2 md:aspect-[3/2]"
                src={property?.propertyPic[imageIndex]}
              />
            )}
            <div
              id="default-carousel"
              className="absolute w-full   top-1/2 transform-translate-y-1/2 px-3    justify-between items-center"
              data-bs-ride="static"
            >
              <button
                type="button"
                className="   absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span
                  className="inline-   justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-500 dark:bg-gray-800 group-hover:bg-emerald-500 dark:group-hover:bg-blue-800 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                  onClick={() => handlePrevClick()}
                >
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="hidden">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="   absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span
                  className="inline-   justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-500 dark:bg-gray-800 group-hover:bg-emerald-500 dark:group-hover:bg-blue-800 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                  onClick={() => handleNextClick()}
                >
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="hidden">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <ul className="grid md:grid-cols-2 md:gap-7 capitalize text-xl leading-loose pl-1">
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Seller:</div>
              <div>{property?.Seller}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Location:</div>
              <div>{property?.location}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Layoutname:</div>
              <div>{property?.layoutName}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Landarea:</div>
              <div>{property?.landArea}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Facing:</div>
              <div>{property?.facing}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Approchroad:</div>
              <div>{property?.approachRoad}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Builtarea:</div>
              <div>{property?.builtArea}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Bedroom:</div>
              <div>{property?.bedRoom}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Floordetails:</div>
              <div>{property?.floorDetails}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Status:</div>
              <div>{property?.status}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Neartown:</div>
              <div>{property?.nearTown}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Costsq:</div>
              <div>₹.{property?.costSq}sft</div>
            </li>
            <li className="   justify-start truncate gap-2">
              <div className="text-lg   ">Facilties:</div>
              <div>{property?.facilities}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Askprice:</div>
              <div>₹.{property?.askPrice}</div>
            </li>
            <li className="   justify-start gap-2">
              <div className="text-lg   ">Category:</div>
              <div>{property?.category?.name}</div>
            </li>
          </ul>{" "}
          <p className=" md:    my-4">
            <div className="text-lg   ">Description:</div>
            <div className=" ">{property?.Description}</div>
          </p>
          <div className="   justify-around pt-">
            <button className="bg-blue-500 hover:bg-teal-700 text-white text-lg   -sans py-2 px-4 rounded ">
              Seller Contact
            </button>{" "}
          </div>
        </div>
      </div> */
}
