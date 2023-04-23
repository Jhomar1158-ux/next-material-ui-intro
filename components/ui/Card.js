import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from './Product';
import { useRouter } from 'next/router';

export default function MediaCard({title, image, price, key}) {
    
    // const [productPage, setProductPage] = React.useState(productPageBool)
    const router = useRouter();
    const handleClick = () =>{
        router.push(`/product?id=${1}`);
    }
    return (
        <>
            <button onClick={handleClick}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title="image product"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">{price}</Button>
                        <Button size="small" disabled>Add to car</Button>
                    </CardActions>
                </Card>
            </button>
        </>

    );
}