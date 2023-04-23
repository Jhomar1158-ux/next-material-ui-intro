import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardMedia, Typography } from '@mui/material';

export const Product = (item) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        image={item.item.data.image}
                        title="image product"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.item.data.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.item.data.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">{item.item.data.category}</Button>
                        <Button size="small" disabled>Add to car</Button>
                    </CardActions>
        </Card>
    )
}
