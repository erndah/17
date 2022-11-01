import {Link} from "react-router-dom"
import {useState, useEffect} from 'react';
import Card from "./Card.js"
const Riwayat = () =>{
  const [datas, setDatas] = useState([])

    return(
    <>
    
      <Link to="/">Home</Link>

      <div className="container">
      {datas.map((data,i) => 
        <Card 
        key={i}  
        tanggal={data.tanggal} 
        tipe={data.tipe} 
        nominal={data.nominal} 
        />
      )}
      </div>

      </>  
    )   
}

export default Riwayat