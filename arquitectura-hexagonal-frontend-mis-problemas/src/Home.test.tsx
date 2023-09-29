import { render, screen } from '@testing-library/react';
import { productsHandlerException } from './api-mocks/handlers';
import { mswServer, rest } from './api-mocks/msw-server';
import HomePage from './Home';
import { expect, it, describe } from 'vitest';

describe('Component: HomePage', () => {
  it('displays returned products on successful fetch with global handler', async () => {
    render(<HomePage />);

    const displayedProducts = await screen.findAllByTestId(/product-id-\d+/);
    expect(displayedProducts).toHaveLength(2);
    expect(screen.getByText('Product Zero')).toBeInTheDocument();
    expect(screen.getByText('Product One')).toBeInTheDocument();
  });

  it('displays returned products on successful fetch', async () => {
    createGetSuccessResponse('/products', [
      {
        name: 'Curso de Docker',
        image: 'https://codium.cdn.com/products/docker.course.jpg',
        price: 10,
      },
      {
        name: 'Curso de legacy code',
        image: 'https://codium.cdn.com/products/legacy-code-course.jpg',
        price: 15,
      },
    ]);
    render(<HomePage />);

    const displayedProducts = await screen.findAllByTestId(/product-id-\d+/);
    expect(displayedProducts).toHaveLength(2);
    expect(screen.getByText('Curso de Docker')).toBeInTheDocument();
    expect(screen.getByText('Curso de legacy code')).toBeInTheDocument();
  });

  // en caso de que quisiera testear un error
  it.skip('displays error message when fetching products raises error', async () => {
    mswServer.use(productsHandlerException);
    render(<HomePage />);

    const errorDisplay = await screen.findByText('Failed to fetch products');
    expect(errorDisplay).toBeInTheDocument();
    const displayedProducts = screen.queryAllByTestId(/product-id-\d+/);
    expect(displayedProducts).toEqual([]);
  });
});

function createGetSuccessResponse(
  path: string,
  response: Record<string, unknown> | Record<string, unknown>[]
) {
  const productsHandler = rest.get(
    `https://api.codium.team${path}`,
    async (req, res, ctx) => res(ctx.json(response))
  );
  mswServer.use(productsHandler);
}
