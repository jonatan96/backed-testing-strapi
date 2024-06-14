export default {
  routes: [
    {
      method: 'GET',
      path: '/hello',
      handler: 'book.findHelloController',
      config: {},
    },
    {
      method: 'GET',
      path: '/books/average',
      handler: 'book.findBookAverageController',
      config: {},
    },
    // {
    //   method: 'GET',
    //   path: '/books',
    //   handler: 'book.findBookPrice',
    //   config: {},
    // }
  ],
}
