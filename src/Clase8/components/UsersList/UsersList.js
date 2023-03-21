import './usersList.css';

const UserListItem = ({userData}) => {
    const {name, lastName, gender, other_gender, pictureURL, address, grade, hasPayed, isReady } = userData;
    return ( 
    <div className="userContainer">
        <div className="avatarMini">
            <img src={pictureURL} alt={name} />
            <p>{name} - {lastName}</p>
        </div>
        
        <div className="userDetails">
            <ul>
                <li><p>Grado : {grade}</p></li>
                <li><p>Direccion : {address}</p></li>
                {<li><p>Genero : {other_gender !== "" ? other_gender : gender}</p></li>}
                {hasPayed && <li> <h5> Ya pago su inscripcion </h5>  </li>}
                {isReady && <li> <h5> Ya esta listo(a) para empezar </h5>  </li>}
            </ul>
            
        </div>
        
    </div>)
}


export const UsersList = ({usuariosRegistrados}) => {
    if(!usuariosRegistrados || usuariosRegistrados.length <=0)
        return <p> No Hay Usarios Registrados aun </p>

    return (
            usuariosRegistrados.map((usuario) => {
                return (
                   <UserListItem userData = {usuario}/>
                )
            })
        
    )
}