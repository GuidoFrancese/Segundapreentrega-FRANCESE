import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";

import { collection, getDocs, query, where } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CardItem } from "../CardItem/CardItem";
import { CartContext } from "../../context/CartContext";





export const Products = () => {
  const { totalProducts } = useContext(CartContext)
  const [products, setProducts] = useState([]);
  const [changes, setChanges] = useState(true);

  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setProducts(productList);
    });
  };

useEffect(() => {
     getProductsDB();
    

}, [])


  return (
    <>
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          Home
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("calzados")}>
          Zapatillas
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("ropa")}>
         Camisetas
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalProducts} </Typography>
        </Box>
      </Box>
      <Typography fontSize={25} marginBottom={3}>
           ¡Bienvenidos a la tienda con los mejores productos relacionados a la NBA!
      </Typography>
      <Box component="div" display="flex" flexWrap="wrap">
        {products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};