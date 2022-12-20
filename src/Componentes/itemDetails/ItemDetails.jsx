

const ItemDetails =({celular})=>{

    return(
        <section className="container">
            <img className="container__img" src={celular.post} />
            <div className="container__caracteristicas">
                <h1>{celular.name}</h1>
                <h3>Memoria: {celular.memoria}</h3>
                <h3>Color: {celular.color}</h3>
            </div>        
            </section>
    )
}

export default ItemDetails