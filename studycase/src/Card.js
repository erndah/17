const Card = (props) => {

    // const tampung = (id,tipe, saldo) => {
    //     props.setEdit()
    //     const datas = {
    //         id, tipe, saldo
    //     }
    //     props.set(datas)
    // }

    return (
        <div className="card">
            <table>
                <tr>
                    <th>Tanggal</th>
                    <th>Tipe</th>
                    <th>Saldo</th>
                </tr>
                <tr>
                    <td>{props.tanggal}</td>
                    <td>{props.tipe}</td>
                    <td>{props.nominal}</td>
                </tr>
            </table>
        </div>
    )
}

export default Card;