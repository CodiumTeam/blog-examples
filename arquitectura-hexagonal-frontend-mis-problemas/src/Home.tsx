import * as React from 'react';
import { APIClient } from './core/api-client';
import { ListProducts } from './core/products/application/ListProducts';
import { Product } from './core/products/domain/Product';

const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const productList = new ListProducts(new APIClient('https://api.codium.team'));

  React.useEffect(() => {
    productList.getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={product.name} data-testid={'product-id-' + index}>
            <div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              {product.discount && <p>Descuento: ${product.discount}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
