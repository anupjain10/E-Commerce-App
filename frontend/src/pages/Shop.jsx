import Hero from "../Components/Hero"
import NewCollection from "../components/NewCollection"
import NewsLetter from "../components/NewsLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}
export default Shop