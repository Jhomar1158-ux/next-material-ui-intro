import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export const ItemCard = ({item: {id, image, title, price}}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/product/${ id }`);
    }

    return (
        <Card sx={{ width: 250, m:2 }} key={id} onClick={ onClick }>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">{price}</Button>
            <Button size="small" disabled>Add to cart!</Button>
            </CardActions>
        </Card>
    )
}
