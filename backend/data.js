import bcrypt from 'bcryptjs';
const data = {
  user: [
    {
      name: 'Immanuel',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'nati',
      email: 'nati@gmail.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // id: 1,
      name: 'Nike air',
      slug: 'Nike slim air',
      category: 'Shoe',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 13,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 10,
      description: 'original brand new shoes',
    },
    {
      // id: 2,
      name: 'Nike jordan',
      slug: 'Nike slim Jordan',
      category: 'Shirt',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 11,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'original brand new shoes',
    },
    {
      // id: 3,
      name: 'Nike',
      slug: 'Nike slim shirt',
      category: 'Shoe',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'original brand new shoes',
    },
    {
      // id: 4,
      name: 'Nike latest',
      slug: 'Nike slim latest',
      category: 'Shoe',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'original brand new shoes',
    },
  ],
};

export default data;
