import './shoeCards.css'

function shoeCards(props) {
    return (
        < div className="cardHolder" >
            <img className="card-img" src={props.shoe.mainImage} alt="shoe-card" />
            <div className="sex-size">
                <p className="sex">{props.shoe.sex}</p>
                <p className="size">{props.shoe.size}</p>
            </div>
            <div className="name-price">
                <p className="name">{props.shoe.name}</p>
                <p className="price">{props.shoe.price}</p>
            </div>
        </ div>
    );
}

export default shoeCards