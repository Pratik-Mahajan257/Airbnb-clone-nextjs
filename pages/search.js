import { format } from "date-fns";
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";


function Search({ searchResults }) {

    const router = useRouter();
   const { location, startDate, endDate, noOfGuests } = router.query; 
   
   const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
   const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
   const range = `${formattedStartDate} - ${formattedEndDate}`; 

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
    <main className="flex">
    <section className="flex-grow pt-14 px-6">
        <p className="text-xs">300+ Stays - {range} -  {noOfGuests} guests</p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

       <div className="hidden lg:inline-flex mb-5 space-x-3
       text-gray-800 whitespace-nowrap">
        <p className="button">Cancellation Flexibility
        </p>
        <p className="button">type of Place
        </p>
        <p className="button">Price
        </p>
        <p className="button">Rooms and Beds
        </p>
        <p className="button">More filters
        </p>
       </div>
 
       <div className="flex flex-col">
        
       {searchResults?.map((item) => (
         // eslint-disable-next-line react/jsx-key
         <InfoCard 
           img={item.img}
           location={item.location}
           title={item.title}
           description={item.description}
           star={item.star}
           price = {item.price}
           total={item.total}


         />

       ))}
       </div>
    </section>
    </main>


    <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
      const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then
      (res => res.json());

      return {
        props : {
            searchResults,
        }
      }
}