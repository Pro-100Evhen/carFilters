import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   fetchVehicleMakes,
   setMake,
   setNextEnabled,
   setYear,
} from "../store/Slice/filterSlice";
import { Link } from "react-router-dom";

const FilterPage = () => {
   const dispatch = useDispatch();
   const { makes, make, year, isNextEnabled, loadingMakes, error } =
      useSelector((state) => state.filter);

   const [years, setYears] = useState([]);

   useEffect(() => {
      dispatch(fetchVehicleMakes());
      const currentYear = new Date().getFullYear();
      const yearList = [];
      for (let y = 2015; y <= currentYear; y++) {
         yearList.push(y);
      }
      setYears(yearList);
   }, [dispatch]);

   const handleMakeChange = (event) => {
      const selectedMake = event.target.value;
      dispatch(setMake(selectedMake));
      dispatch(setNextEnabled(selectedMake && year));
   };

   const handleYearChange = (event) => {
      const selectedYear = event.target.value;
      dispatch(setYear(selectedYear));
      dispatch(setNextEnabled(make && selectedYear));
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
         <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
               Find Your Vehicle
            </h1>

            <div className="mb-4">
               <label
                  htmlFor="make"
                  className="block text-sm font-medium text-gray-700 mb-2"
               >
                  Select Vehicle Make
               </label>
               {loadingMakes ? (
                  <p>Loading vehicle makes...</p>
               ) : (
                  <select
                     id="make"
                     value={make}
                     onChange={handleMakeChange}
                     className="w-full text-blue-600 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  >
                     <option value="">-- Select a Make --</option>
                     {makes.map((m) => (
                        <option
                           className="text-blue-400"
                           key={m.MakeId}
                           value={m.MakeId}
                        >
                           {m.MakeName}
                        </option>
                     ))}
                  </select>
               )}
               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <div className="mb-4">
               <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700 mb-2"
               >
                  Select Model Year
               </label>
               <select
                  id="year"
                  value={year}
                  onChange={handleYearChange}
                  className="w-full border text-blue-600 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
               >
                  <option value="">-- Select a Year --</option>
                  {years.map((y) => (
                     <option key={y} value={y}>
                        {y}
                     </option>
                  ))}
               </select>
            </div>

            <div className="mt-6">
               <Link
                  to={isNextEnabled ? `/result/${make}/${year}` : "#"}
                  className={`block w-full text-center text-white font-medium py-2 rounded-md ${
                     isNextEnabled
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-400 cursor-not-allowed text-blue-500"
                  }`}
               >
                  Next
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FilterPage;
