import {Link} from "react-router-dom"
import {useState, useEffect} from 'react';
import Card from "./Card.js"
const Riwayat = () =>{
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/users/data')
      .then(res => res.json())
      .then(res => setDatas(res.data))
  })

    return(
    <>
    
      <table id="tb" className="tabel-none">
        <tr>
          <th>Tanggal</th>
          <th>Tipe</th>
          <th>Jual</th>
        </tr>
 
      {datas.map((data,i) => 
        <Card 
        key={i}  
        tanggal={data.tanggal} 
        tipe={data.tipe} 
        nominal={data.nominal} 
        />
      )}
      
      </table>
      

      </>  
    )   
}

export default Riwayat