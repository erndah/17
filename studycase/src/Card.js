const Card = (props) => {

    // const tampung = (id,tipe, saldo) => {
    //     props.setEdit()
    //     const datas = {
    //         id, tipe, saldo
    //     }
    //     props.set(datas)
    // }
     
    return (
 
            
                <tr>
                    <td>{props.tanggal}</td>
                    <td>{props.tipe}</td>
                    <td>{props.nominal}</td>
                </tr>
      
       
    )
}

export default Card;