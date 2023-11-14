const products = [
    { id: "1", name: "Zapato", img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg" , price: 25000, category: "calzados", description: "Un Zapato", stock: 8 },
    { id: "2", name: "Bota", img: "https://arandu.com.ar/media/2022/05/06142M_web.jpg", price: 30000, category: "calzados", description: "Una Bota", stock: 9 },
    { id: "3", name: "Ojota", img: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/4/_/4.000.0320001_0_7.jpg", price: 15000, category: "calzados", description: "Un Ojota", stock: 12 },
    { id: "4", name: "Zapatilla", img: "https://pampero.com.ar/wp-content/uploads/2022/03/424116004_C4-3-copia.jpg", price: 18000, category: "calzados", description: "Una Zapatilla", stock: 7 },
    { id: "5", name: "Remera", img: "https://www.segutecnica.com/images/000000000001757037365remera-naranja-segutecnica.png", price: 10000, category: "ropa", description: "Una Remera", stock: 15 },
    { id: "6", name: "Camisa", img: "https://http2.mlstatic.com/D_NQ_NP_930364-MLA46363651354_062021-O.webp", price: 12000, category: "ropa", description: "Una Camisa", stock: 16},
    { id: "7", name: "Pantalón", img: "https://static.goldengoose.com/image/upload/w_auto,c_scale,f_auto,q_auto/v1656939667/Style/ECOMM/GMP01190.P000786-15369", price: 11000, category: "ropa", description: "Un Pantalón", stock: 14 },
    { id: "8", name: "Medias", img: "https://http2.mlstatic.com/D_NQ_NP_796457-MLA54969111378_042023-O.webp", price: 3000, category: "accesorios", description: "Unas Medias", stock: 20 },
    { id: "9", name: "Boxers", img: "https://levisarg.vtexassets.com/arquivos/ids/850761/272_641c40173fdde.jpg?v=638345369338430000", price: 2000, category: "accesorios", description: "Unos Boxers", stock: 19 },
    { id: "10", name: "Corbatas", img: "https://www.shutterstock.com/image-vector/red-plain-striped-ties-vector-260nw-242424307.jpg", price: 1000, category: "accesorios", description: "Unas Corbatas", stock: 17 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };