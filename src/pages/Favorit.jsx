import "../components/products/products.css"
import CardPro from "../components/products/CardPro"
import { useContext } from "react"
import { FavoritProvider } from "../contextStore/FavoritProvider"

function Favorit() {

  const {favorit} = useContext(FavoritProvider)
  return (
    <div>
    <div className="fav-page">
      <h1>favorit</h1>
      <div className="favorit-container">
        {favorit.map(item=>{
          return <CardPro key={item.id} pro={item} />
        })}

      </div>
    </div>


    </div>
  )
}
export default Favorit