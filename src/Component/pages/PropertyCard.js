import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getinterestbyId, getPropertyById } from "../helper/backend_helpers";
import { SERVER_URL } from "../helper/configuration";
import { useQuery } from "../helper/hook/useQuery";
import { useUser } from "./contextProvider/UserProvider";

const PropertyCard = ({ pro, handleBook, setModalOpen ,showHeart=false}) => {

  const { currentUser } = useUser();
  const query = useQuery();
  const [interest,setInterest] = useState([])
  const [property, setproperty] = useState({});
  const handleContactClick = (e) => {
    e.stopPropagation();
    handleBook(pro?._id);
    setModalOpen(true);
  
  };
  const propertyDetails = async () => {
    const res = await getPropertyById({ propertyId: query.get("uid") });

    if (res.success) {
      setproperty(res?.property);
      // console.log("data", res);
    } else {
      console.log("Error while fetching property");
    }
  };
  useEffect(() => {
    const handleFetchInterested = async () => {
      const payload = {
        userID: currentUser?.userID,
      };
      const res = await getinterestbyId(payload);

      if (res.success) {
        setInterest(res?.Intrested);
      }
    };
    handleFetchInterested();
  }, []);
  const found = interest?.find((i) => i?.propertyId?._id === property?._id);
  return (
    <Link to={`/Detailspage?uid=${pro?._id}`} className="grid py-2 px-2  ">
      <div className=" w-full capitalize grid shadow-2xl rounded-lg">
        <div className="grid  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full  rounded-lg ">
          <div className="grid shadow p-4 rounded-lg bg-white  card-h">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0 bg-black">
                  {/* <div className="relative group">
                    <button>
                <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-6 h-6 absolute right-0 hover:scale-110 hidden group-hover:block text-white hover:bg-amber-500"
                            onClick={() => getUnInterest()}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg></button></div> */}{" "}
                  <img
                    className=" object-cover md:h-52  md:w-72 rounded-md aspect-[1]"
                    alt="coimbatore realestate"
                    src={`${SERVER_URL}/file/${pro?.propertyPic[0]?.id}`}
                  />
                </div>
                <div className="flex justify-end ">
                  {" "}
                  <div className="absolute pr-4 pt-3">
                    {" "}
               <div>   {showHeart && (
                      <div>
                        {" "}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f75757" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                      </div>
                    )}</div>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-center bottom-0 mb-3">
                {(pro?.category === "637d48e6a66bc6fa095f9baa" ||
                  pro?.category === "637d5513f4dc56d8268ea2a4" ||
                  pro?.category === "637d5520f4dc56d8268ea2a6") && (
                  <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                    <p className="flex items-center font-medium text-gray-800">
                      <svg
                        className="w-5 h-5 fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                      </svg>
                      {pro?.bedRoom}
                    </p>

                    {pro?.facilities.includes("carParking") && (
                      <p className="flex items-center font-medium text-gray-800">
                        <svg
                          className="w-5 h-5 fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 480 512"
                        >
                          <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                        </svg>
                      </p>
                    )}

                    <p className="flex items-center font-medium text-gray-800">
                      <svg
                        className="w-5 h-5 fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                      </svg>
                      {pro?.bathRoom}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1 flex justify-between">
                {pro?.title}
                {pro?.isPremium && (
                  <span
                    className="  rounded-lg  text-sm font-medium "
                    title="*Premium"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 512 512">
                      <polygon
                        fill="#ffd759"
                        points="102.6 494.1 137 320.1 6 200.5 182.1 179.5 255.3 17.9 329.7 178.9 506 198.6 375.9 319.2 411.6 492.9 256.8 406.4"
                      />
                      <polygon
                        fill="#fabd3b"
                        points="256 256 6 200.5 137 320.1"
                      />
                      <polygon
                        fill="#fabd3b"
                        points="256 256 102.6 494.1 256.8 406.4 411.6 492.9"
                      />
                      <polygon
                        fill="#fabd3b"
                        points="256 256 506 198.6 375.9 319.2"
                      />
                      <polygon
                        fill="#fabd3b"
                        points="255.3 17.9 256 256 329.7 178.9"
                      />
                    </svg>
                  </span>
                )}
              </h2>
              <p className="mt-2 text-sm text-gray-800 line-clamp-1">
                {pro?.location},{pro?.streetName}
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-1  gap-4 py-2 ">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-700">
                <svg
                  className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span className="mt-2 xl:mt-0 lowercase">{pro?.builtArea}</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-700">
                <svg
                  className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span className="mt-2 xl:mt-0">₹.{pro?.costSq}/sq.ft</span>
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 py-2">
              {pro?.category !== "637d5528f4dc56d8268ea2a8" ? (
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-700">
                  <svg className="w-5 h-5 " viewBox="0 0 48 48">
                    <path d="m19.06 11.06 3.44-3.44V20c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.62l3.44 3.44c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.59-.59.59-1.54 0-2.12l-6-6c-.14-.14-.31-.25-.49-.33-.01 0-.02 0-.02-.01-.17-.06-.36-.1-.55-.1s-.38.04-.55.11c-.01 0-.02 0-.02.01-.19.08-.35.19-.49.33l-6 6a1.49 1.49 0 0 0 0 2.12 1.5 1.5 0 0 0 2.12-.01zM24 26.5c-.83 0-1.5.67-1.5 1.5v12.38l-3.44-3.44a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l6 6c.14.14.31.25.49.33.01 0 .02 0 .02.01a1.42 1.42 0 0 0 1.1 0c.01 0 .02 0 .02-.01.19-.08.35-.19.49-.33l6-6c.59-.59.59-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0l-3.44 3.44V28c0-.83-.67-1.5-1.5-1.5zm-12.94 2.44L7.62 25.5H20c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H7.62l3.44-3.44c.59-.59.59-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0l-6 6c-.14.14-.25.31-.33.49 0 .01 0 .02-.01.02-.06.17-.1.36-.1.55s.04.38.11.55c0 .01 0 .02.01.02.08.19.19.35.33.49l6 6c.28.29.67.44 1.05.44s.77-.15 1.06-.44c.59-.58.59-1.54 0-2.12zm34.33-5.51c-.08-.19-.19-.35-.33-.49l-6-6a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l3.44 3.44H28c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h12.38l-3.44 3.44a1.49 1.49 0 0 0 0 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44l6-6c.14-.14.25-.31.33-.49 0-.01 0-.02.01-.02a1.42 1.42 0 0 0 0-1.1c-.01 0-.01-.01-.01-.02z" />
                  </svg>{" "}
                  <span className="mt-2 xl:mt-0 md:pl-2">{pro?.facing}</span>
                </p>
              ) : (
                <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-700">
                  {pro?.landArea}
                </div>
              )}
              <p className="inline-flex flex-col xl:flex-row justify-end xl:items-center text-gray-700 md:pr-1">
                <span className="mt-2 xl:mt-0">
                  <p className="inline-block font-medium  text-primary whitespace-nowrap leading-tight rounded-xl md:pr-1">
                    <span className="text-lg"> ₹.{pro?.negotiablePrice} </span>
                  </p>
                </span>
              </p>
            </div>

            <div className="grid grid-cols- py-2">
              <div className="flex items-center">
                <div className="relative">
                  <div className="rounded-full w-3 h-3 md:w-6 md:h-6 bg-gray-200 pl-5">
                    {" "}
                    <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-primary-red rounded-full pl-1 ">
                      <svg
                        viewBox="0 0 64 64 "
                        className="md:pr-2 pb-1 h-6 w-6"
                      >
                        <path
                          fill="#2a3a3e"
                          d="m8.13 16.03 1.66 2.25c.19.26.21.61.04.9l-1.7 2.91 2.16 2.4c.27.3.28.74.03 1.06L8.6 27.73l2.05 3.01c.24.35.17.83-.15 1.09-.11.07-.78.71-1.23 1.89l-.13.35.37-.07c.92-.19 1.85-.28 2.77-.28 1.26 0 2.55.18 3.84.55l.26.07V6.65L13.3 4.07 8.59 9.33l1.64 3.09c.15.28.12.61-.07.87l-2.03 2.74zm28.44 2.6c4.7 0 7.16-2.71 7.43-3.02.15-.19.37-.29.65-.29.24.01.49.13.63.33 1.25 1.69 2.85 3.31 6.06 3.61l.25.02-.02-.25c-.61-6.08-4.89-10.01-10.91-10.01-5.28 0-9.22 2.95-10.55 7.9l-.05.17.16.07c2.22.98 4.35 1.47 6.35 1.47z"
                        />
                        <path
                          fill="#2a3a3e"
                          d="M35.49 34.04c1.63 1.37 3.38 2.06 5.18 2.06 5.99 0 10.73-7.9 10.97-14.97l.01-.2-.2-.01c-2.85-.21-4.94-1.26-6.77-3.41l-.13-.15-.16.13c-1.24 1.03-3.91 2.77-7.88 2.77-2.07 0-4.25-.47-6.48-1.41l-.25-.11-.03.27c-.06.53-.08 1.05-.08 1.55-.01 5.06 2.37 10.59 5.82 13.48z"
                        />
                        <path
                          fill="#2a3a3e"
                          d="m46.18 36.13-.1-.22-.2.13c-1.67 1.12-3.43 1.69-5.22 1.69-1.79 0-3.54-.56-5.2-1.67l-.2-.13-.1.21a11.246 11.246 0 0 1-2.2 3.18l-.16.18 7.86 5.46 7.86-5.47-.17-.17c-.43-.44-.8-.89-1.12-1.33-.36-.53-.71-1.14-1.05-1.86zm-21.6 11.51c0-6.78-5.52-12.3-12.3-12.3C5.51 35.35 0 40.86 0 47.64c0 6.77 5.51 12.29 12.29 12.29 6.78 0 12.29-5.51 12.29-12.29zm-12.29 9.7c-2.41 0-4.38-1.97-4.38-4.38s1.96-4.38 4.38-4.38c2.41 0 4.38 1.96 4.38 4.38 0 2.41-1.97 4.38-4.38 4.38z"
                        />
                        <path
                          fill="#2a3a3e"
                          d="M12.29 50.22c-1.51 0-2.74 1.23-2.74 2.74 0 1.51 1.23 2.74 2.74 2.74 1.51 0 2.74-1.23 2.74-2.74 0-1.51-1.23-2.74-2.74-2.74zm43.58-7.11c-1.76-.32-3.33-.87-4.68-1.63-.41-.23-.81-.49-1.25-.81l-.12-.09-8.69 6.04c-.14.1-.3.15-.47.15-.17 0-.33-.05-.47-.15l-8.7-6.05-.12.1c-.1.08-.19.16-.31.23-1.46 1.01-3.27 1.73-5.38 2.15l-.22.05.07.22c.46 1.43.69 2.89.69 4.32 0 4.4-2.14 8.6-5.72 11.23l-.5.37h43.99v-.2c.19-14.5-7.79-15.88-8.12-15.93z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="ml-2 text-gray-800 line-clamp-1">
                  {pro?.yourName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
