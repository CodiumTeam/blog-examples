import { APIClient } from '../../api-client';
import { Product } from '../domain/Product';

export class ListProducts {
  private readonly apiClient: APIClient;

  constructor() {
    this.apiClient = new APIClient();
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.apiClient.get<Product[]>(`/products`);
    return products;
  }
}
