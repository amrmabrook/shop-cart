import { useEffect, useState } from "react"
import { FavoritProvider } from "./FavoritProvider" 

const FavoritContext = ({children})=> {

  
  const [favorit,setFavorit] = useState(()=>{
    let savedFav = localStorage.getItem("fav")
    return savedFav ? JSON.parse(savedFav) : [];
  })
  
  
    


  const addToFavorit = (pro)=>{
    let exist = favorit.find(el=>el.id === pro.id)
    if(exist){
    return
    }
    setFavorit(prev=>([...prev,{
      id:pro.id,title:pro.title,price:pro.price,img:pro.images[0]
    }]))
  }


  const removeFav = (pro)=>{
     setFavorit(prev=>[...prev.filter(el=>el.id !== pro.id)])
  }




  

  //add to localstore
  useEffect(()=>{
    localStorage.setItem("fav",JSON.stringify(favorit))
  },[favorit])
    




  return (
    
    <FavoritProvider.Provider value={{favorit,setFavorit,removeFav,addToFavorit}}>
        {children}
    </FavoritProvider.Provider>
  )
}

export default FavoritContext