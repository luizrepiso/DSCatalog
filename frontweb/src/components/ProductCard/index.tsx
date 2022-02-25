import './styles.css';

import ProductImg from 'assets/images/product.png';

import { Product } from 'types/product';
import ProductPrice from 'components/ProductPrice';

type Props = {

    product: Product;
}

const ProductCard = ({ product } : Props) => {

    return (

        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt={product.name} />
                </div>
                <div className="card-bottom-container">
                <h6>{product.name}</h6>
                <ProductPrice price={product.price}/>
            </div>
        </div>

    );
} 
export default ProductCard;
