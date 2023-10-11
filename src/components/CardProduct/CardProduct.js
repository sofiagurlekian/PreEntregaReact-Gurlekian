import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


  const CardProduct = ({ product }) => {
    if (!product) {
      return <div>No product data available</div>;
    }
  // const CardProduct = ({ img, name, description, price }) 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.url} //Recorro los productos que me traje de la API en List Card
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;