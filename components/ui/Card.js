import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function MediaCard({title, image, price, id}) {

    return (
            <Link href={`/product/${id}`}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 200 }}
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
            </Link>

    );
}