import Card from '../../Layout/ProductCard/card';
import './store.css';

function Store() {
    return (
        <div className='store'>
            <Card name="The Last of Us" img="https://images-americanas.b2w.io/produtos/01/00/img/134137/0/134137096_1SZ.jpg" price={11.39}/>
        </div>
    );
}

export default Store;