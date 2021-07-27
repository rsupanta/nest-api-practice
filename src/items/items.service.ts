import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item 1',
      qty: 100,
      description: 'Item 1 description',
    },
    {
      id: '2',
      name: 'Item 2',
      qty: 200,
      description: 'Item 2 description',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
