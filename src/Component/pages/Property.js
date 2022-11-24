import { map } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  categoryId,
  getAllProperty,
  getPropertiescategoryId,
  getPropertybyUserId,
  getPropertyCount,
} from "../helper/backend_helpers";
import { useQuery } from "../helper/hook/useQuery";
const Property = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [propertyCount, setpropertyCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [property, setproperty] = useState('');
  const query = useQuery();

 const id= query.get("id")
console.log(id)
  const categories= async () => {
    const res = await getPropertiescategoryId({  
      id: query.get("id"),searchText
     
    });
  
    if (res.success) {
      setproperty(res.category);
       
      
    }
   else{
   
   }
  };

  useEffect(() => {
    categories();
  }, [searchText]);

  

//   const loadPropertyCount = async () => {
//     const res = await getPropertyCount({ searchText });
//     if (res.success) {
//       setpropertyCount(res.count);
//     } else {
//      // console.log("getPropertyCount  ", res);
//     }
//   };
//   useEffect(() => {
//     const handleLoad = async () => {
//       setLoading(true);
//       await loadProperty();
//       setLoading(false);
//     };
//     handleLoad();
//   }, [page, limit]);

//   useEffect(() => {
//     setPage(1);
//   }, [searchText]);

  return (
    <div>
      <div className="w-full flex justify-center items-center mt-2 pb- ">
        <form action="">
          <input
            type="text"
            placeholder="search"
            name="search"
            className="md:w-96 px-3 py-2 bg-slate-200 rounded-tl-full rounded-bl-full border-0 focus:outline-0"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-2 -ml-1.5 bg-blue-500 hover:bg-teal-700 text-white rounded-tr-full rounded-br-full"
          >
            Search
          </button>
        </form>
      </div>
      <div className="md:grid  gap-2  grid-cols-2  md:px-5 gap-x-7 ">
        {map(property, (pro, i) => (
          <div user={pro} key={"pro" + i} >
            <div className=" bg-blue-100 pl- shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-900 rounded-md">
              <Link
                to={`/Detailspage?uid=${pro?._id}`}
                className="grid grid-cols-3  capitalize my-3 "
              >
                <div className="flex  justify-start items-center">
                
                  <img
                    className=" md:object-cover md:h-52  md:w-72 rounded-md"
                    alt="coimbatore realestate"
                    src={pro?.propertyPic[0]}
                  />
                </div>
                <div className="col-span-2 pl-2 leading-10">
                  <div className="sm:flex justify-between  text-2xl md:font-semibold py-5 pr-">
                    <h3 className="flex-wrap">{pro?.location}</h3>
                    <h6 className="pr-4">₹.{pro?.askPrice}</h6>
                  </div>
                  <div className="flex  mr-3 justify-between shadow-sm shadow-blue-900  bg-white hover:shadow-md  hover:shadow-blue-900 rounded-md">
                    <p>
                      <div className="underline  text-sm">plot Area</div>
                      <div className="font-semibold">{pro?.costSq}.sq.ft</div>
                    </p>
                    <p>
                      <div className="underline text-sm">Possession</div>
                      <div className="font-semibold">{pro?.status}</div>
                    </p>
                    <p className="hidden sm:block">
                      <div className="underline text-sm ">Direction Facing</div>
                      <div className="font-semibold">{pro?.facing}</div>
                    </p>
                  </div>
                  <div className="flex justify-between items-center   pt-5 mr-3 mx-1">
                    <p className=" text-sm  ">Agent:{pro?.Seller}</p>
                    <div className="grid  px-1">
                      <div className="flex  justify-end">
                        <p>
                          <button className="bg-blue-500 hover:bg-teal-700 hover:text-white rounded-sm px-1">
                            contact
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  <h5>Seller :{pro?.Seller}</h5>
 <p>Description :{pro?.Description}</p> */}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Property;
