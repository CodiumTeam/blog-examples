import { rest } from 'msw';
import { Product } from '../core/products/domain/Product';

const mockProducts: Product[] = [
  {
    name: 'Product Zero',
    image: 'https://codium.cdn.com/products/product-0.jpg',
    price: 10,
  },
  {
    name: 'Product One',
    image: 'https://codium.cdn.com/products/product-1.jpg',
    price: 15,
  },
];

const productsHandler = rest.get(
  `https://api.codium.team/products`,
  async (req, res, ctx) => res(ctx.json(mockProducts))
);
export const handlers = [productsHandler];

// exporto en caso quiera crear test de una exception
export const productsHandlerException = rest.get(
  `https://api.codium.team/products`,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);
