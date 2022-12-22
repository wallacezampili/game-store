import Button from '../../Resources/Button/btn';
import './card.css'
function Card({name, price, img, }) {
    return (  
        <div className='card'>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <span>R${price}</span>
            <Button text="Comprar"/>
        </div>
    );
}

export default Card;