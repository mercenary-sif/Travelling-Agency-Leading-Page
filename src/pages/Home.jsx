import { Brand, Footer } from "../components/export"
import {BookTrip, Categories, ContactUs, Header, Reviews, TopSelling} from "../containers/export"


const Home = () => {
  return (
      <div>
         <Header/> 
         <Categories/>
         <TopSelling/>
         <BookTrip/>
         <Reviews/>
         <Brand/>
         <ContactUs/>
         <Footer/>
    </div>
  )
}

export default Home
