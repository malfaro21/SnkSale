import { Order } from '../../src/types'; //Imports the order type from src folder.
import products from './products'; // Imports the default export from products.
import dayjs from 'dayjs'; //Imports the default export from dayjs

const now = dayjs(); //assigns dayjs to a variable named now

const orders: Order[] = [ //Assigns an array of orders to orders
  {
    id: 23123, //assigns an id number to order
    created_at: now.subtract(1, 'hour').toISOString(), //time the order was placed subtracted by an hour, it converts the time to ISO format
    total: 670.0, //total of the order
    status: 'Packing', //order status
    user_id: '1', //id of user who placed order
    order_items: [ //items that were ordered
      {
        id: 1, //id of item ordered
        order_id: 23123, //id of order being placed
        size: '10', //size of the item
        quantity: 2, //how many are being placed
        product_id: products[0].id, //gets the first item in the products array
        products: products[0], //assigns the products array to the first one.
      },
      {
        id: 2,
        order_id: 23123,
        size: '9',
        quantity: 1,
        product_id: products[1].id,
        products: products[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, 'days').toISOString(), //the day the order was created minus 3 days. Using ISO format
    total: 240.0,
    status: 'Delivered',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 32145,
        size: '10',
        quantity: 2,
        product_id: products[3].id,
        products: products[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, 'weeks').toISOString(), //the day the order was created minus 3 weeks. Using ISO format
    total: 1480.0,
    status: 'Delivered',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23445,
        size: '10',
        quantity: 1,
        product_id: products[3].id,
        products: products[3],
      },
      {
        id: 2,
        order_id: 23445,
        size: '10',
        quantity: 1,
        product_id: products[7].id,
        products: products[7],
      },
      {
        id: 3,
        order_id: 23445,
        size: '10',
        quantity: 1,
        product_id: products[8].id,
        products: products[8],
      },
    ],
  },
];

export default orders; //exports orders array as the default so other modules can call the function
