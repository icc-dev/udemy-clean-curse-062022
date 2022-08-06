(() => {

  // product.interface.ts
  interface Product { 
      id:   number;
      name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log(`Producto ${id}`, { id, name: 'Mac'});
    }

    addProduct(product: Product) {
      console.log(`Guardando el producto`, product);
    }
  }

  class NotificationService {
    sendEmail(emails: string[], template: string, payload: any) {
      console.log(`Enviando correo a los clientes`, { payload, template, emails });
    }
  }
  
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
  
    constructor(public productService: ProductService, public notificationService: NotificationService) {

    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct( product: Product ){
      this.productService.addProduct(product);
    }

    notifyClients() {
      this.notificationService.sendEmail(
        ['iancardenas96@gmail.com'],
        'to-user',
        {}
      )
    }
      
  }

  class CartBloc {
    addToCart( productId: number) {
      console.log(`Agregando al carrito ${productId}`);
    }
  }
  

  // product.controller.ts
  const productService = new ProductService();
  const notificationService = new NotificationService();
  const productBloc = new ProductBloc(productService, notificationService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'Mac' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);

})();