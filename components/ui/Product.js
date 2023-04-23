import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';

export const Product = (item) => {
    // item.item.data.title
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                    {item.item.data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    {item.item.data.description}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    Category: {item.item.data.category}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                    Add to cart!
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={item.item.data.image}
                    alt={item.item.data.title}
                />
                </Card>
            </CardActionArea>
        </Grid>
    )
}
