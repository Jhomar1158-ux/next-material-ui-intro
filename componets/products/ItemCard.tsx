import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export const ItemCard = ({item: {id, image, title, price}}) => {

    return (
        <Card sx={{ width: 250, m:2 }} key={id}>
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
