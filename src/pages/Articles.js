import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import articles from '../data/articles.js';

function Articles() {

    function goToUrl(url) {
        window.open(url, '_blank');
    }

    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Articles
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                Explore a diverse collection of articles to help you thrive academically and socially
            </Typography>
            <br/>
            <Grid container spacing={3} sx={{ padding: "0 30px" }}>
                {articles.map(article => (
                <Grid item xs={12} sm={6} md={4} key={article.id} sx={{ display: 'flex' }}>
                    <Card sx={{ borderRadius: "20px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={article.image}
                            alt={article.title}
                            sx={{objectPosition: 'center 23%'}}
                        />
                        <CardContent>
                            <Typography
                            onClick={() => goToUrl(article.link)}
                            sx={{ cursor: 'pointer', color: "#152a51", marginBottom: "10px" }}
                            variant="h5"
                            >
                            {article.title}
                            </Typography>
                            <Typography sx={{ color: "#152a51" }} variant="body1">
                            {article.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                            <Button size="small" color="primary" onClick={() => goToUrl(article.link)}>
                            Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}
  
export default Articles;