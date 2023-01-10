import Image from "next/image"
import { 
    SearchIcon,
    UsersIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,

} from "@heroicons/react/solid"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date()); 
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key : "selection"
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname : "/search",
            query : {
                  location : searchInput,
                  startDate : startDate.toISOString(),
                  endDate : endDate.toISOString(),
                  noOfGuests,        
            }
        })
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
   <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">
   
       {/* left */}
   <div 
   onClick={() => router.push('/')}
   className="flex relative items-center cursor-pointer h-10 my-auto">
   <Image src='https://links.papareact.com/qd3' fill  style={{objectFit: "contain", objectPosition: "left"}}
    alt="/"
   />

   </div>
   
   {/* mid */}
   <div className="flex rounded-full items-center md:border-2 py-2 md:shadow-sm">
   <input 
   value={searchInput}
   onChange= {(e) => setSearchInput(e.target.value)} 
   
   className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text"
    placeholder={placeholder || "Start your search"} />
   <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 p-2 text-white rounded-full cursor-pointer md:mx-2"/>
   </div>

{/* right */}
<div className="flex items-center space-x-4 justify-end text-gray-500">

<p className="hidden md:inline cursor-pointer">Become a Host</p>
<GlobeAltIcon className="h-6 cursor-pointer" />

<div className="flex items-center space-x-2 border-2 p-2 rounded-full">
    <MenuIcon className="h-6" />
    <UserCircleIcon className="h-6" />
</div>

</div>

    {searchInput && (
        <div className="flex flex-col
        col-span-3 mx-auto">
            <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5861"]}
                onChange={ handleSelect }
            />
            <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
                </h2>
                <UsersIcon className="h-5" />
                <input type="number"
                value={noOfGuests}
                min={1}
                onChange= {(e) => setNoOfGuests(e.target.value)}
                className="w-12 pl-2 text-lg outline-none text-red-400"
                 />
            </div>
            
            <div className="flex">
            <button 
            onClick={resetInput}
            className="flex-grow text-gray-500">
             Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
            </div>
        </div>
    )}


    </header>
  )
}

export default Header
