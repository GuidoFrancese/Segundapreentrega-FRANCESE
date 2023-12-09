import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Zapatilla", img: "https://www.digitalsport.com.ar/files/products/61e01bc1cf233-542549-500x500.jpg", price: 200, category: "calzados", description: "Dunk X", stock: 5 },
  { name: "Zapatilla", img: "https://s1.dswcdn.com/uploads/Nike_SB_Shoes/NIke_Dunk_SB_Low/Nike_SB_Dunk_Low_Medium_Curry_Fossil_Sail_DD1390-100_P2.jpg", price: 180, category: "calzados", description: "Dunk XI", stock: 2 },
  { name: "Zapatilla", img: "https://kingwalk.com/wp-content/uploads/2022/03/Nike-SB-Dunk-Low-White-Black-Trail-End-Brown-1.jpg", price: 250, category: "calzados", description: "Dunk XV", stock: 4 },
  { name: "Zapatilla", img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw81bfc9bd/products/NIDV0821-400/NIDV0821-400-1.JPG", price: 150, category: "calzados", description: "Dunk VII", stock: 3 },
  { name: "Zapatilla", img: "https://hips.hearstapps.com/hmg-prod/images/sp21-nike-sportswear-dunk-29-native-1600-1611055218.jpg?resize=980:*", price: 100, category: "calzados", description: "Dunk V", stock: 7 },

  { name: "Camiseta", img: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/W/CW3669-738_0_7.jpg", price: 90, category: "ropa", description: "Lebron Lakers", stock: 50 },
  { name: "Camiseta", img: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/A/V/AV4947-496_0.jpg", price: 95, category: "ropa", description: "Curry Golden State", stock: 50 },
  { name: "Camiseta", img: "https://images.footballfanatics.com/phoenix-suns/unisex-nike-devin-booker-white-phoenix-suns-swingman-jersey-association-edition_ss5_p-4650381+pv-2+u-3d3anmm81l6bkuf814ez+v-iwbhoe22ksvvtwtelxcg.jpg?_hv=2&w=900", price: 95, category: "ropa", description: "Booker Phonix", stock: 50 },
  { name: "Camiseta", img: "https://images.footballfanatics.com/indiana-pacers/indiana-pacers-nike-association-edition-swingman-jersey-white-tyrese-haliburton-unisex_ss4_p-13348910+pv-1+u-i8pkuos00l2vrvg6mob9+v-93d5f80bc71f4b819fe4447f3002841c.jpg?_hv=2&w=600", price: 95, category: "ropa", description: "Haliburton Pacers", stock: 50},
  { name: "Camiseta", img: "https://basketworld.com/24351-large_default/james-harden-philadelphia-76ers-icon-eition-swingman-jersey-22-23-junior.jpg", price: 95, category: "ropa", description: "Harden Clippers", stock: 50 }, ]
 

 export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};