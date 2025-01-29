import React, { useState, useRef } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import products from '../data/products.js';

function ProductCard({ product }) {
    const [selectedSize, setSelectedSize] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
    const [openDetails, setOpenDetails] = useState(false);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        setErrorMsg('');
    };

    const handleImageToggle = (direction) => {
        setImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
    };

    const handleBuyClick = () => {
        if (selectedSize) {
            window.location.href = product.paymentLinks[selectedSize];
        } else {
            setErrorMsg("Please select a size!");
        }
    };

    const handleDetailsOpen = () => {
        setOpenDetails(true);
    };

    const handleDetailsClose = () => {
        setOpenDetails(false);
    };


    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                
                <div style={{
                    position: 'absolute',
                    top: '30%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    width: '95%',
                    zIndex: 1,
                    padding: '0 10vw',
                }}>
                    <IconButton onClick={() => handleImageToggle('prev')}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton onClick={() => handleImageToggle('next')}>
                        <ArrowForward />
                    </IconButton>
                </div>
                <CardMedia
                    component="img"
                    height="325"
                    image={product.images[imageIndex]} // Toggle between front and back
                    alt={product.name}
                    sx={{objectFit: 'contain'}}
                />

                <CardContent>
                    <Typography variant="h6" sx={{fontweight: 'bold', marginBottom: '10px'}}>{product.name}</Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                        {product.price}
                    </Typography> */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <Typography variant="body1" color="textSecondary" sx={{ textDecoration: 'line-through', fontSize: '17px' }}>
                            {product.originalPrice}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'red', fontWeight: 'bold' }}>
                            {product.discountedPrice}
                        </Typography>
                    </div>
                    <br/>
                    <FormControl fullWidth>
                        <InputLabel>Size</InputLabel>
                        <Select
                            value={selectedSize}
                            onChange={handleSizeChange}
                            label="Size"
                        >
                            {product.sizes.map((size) => (
                                <MenuItem key={size} value={size.toLowerCase()}>{size}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {errorMsg && (
                        <Typography variant="body2" color="error" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                            {errorMsg}
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '1vw', marginBottom: '1vw'}}>
                    <Button size="small" color="secondary" sx={{ marginLeft: '0.5vw'}} onClick={handleDetailsOpen} >
                        View Details
                    </Button>
                    <Button 
                        size="small" 
                        color="primary" 
                        onClick={handleBuyClick}
                        sx={{ fontSize: '17px', fontWeight: 'bold', justifyContent: 'flex-end'}}
                    >
                        Buy Now
                    </Button>
                    
                </CardActions>
            </Card>
            <Dialog open={openDetails} onClose={handleDetailsClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{fontSize: '25px', fontWeight: 'bold'}}>{product.name} Details</DialogTitle>
                <DialogContent>
                    <img
                        src={product.details}
                        alt="Size Guide"
                        style={{ width: '80%', height: 'auto', marginTop: '10px' }}
                    />
                    <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: 'bold' }}>
                        Size Guide:
                    </Typography>
                    <img
                        src={product.sizeGuideImage}
                        alt="Size Guide"
                        style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDetailsClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

function Merch() {
    const productsSectionRef = useRef(null);

    const handleScroll = () => {
        if (productsSectionRef.current) {
            const yOffset = -75;
            const yPosition = productsSectionRef.current.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };


    return (
        <div>
            {/* Banner Section */}
            <div style={{
                backgroundImage: 'url(/imgs/merch/bannerBG.jpeg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                color: 'black', 
                padding: '100px 0',
                textAlign: 'center',
                position: 'relative',
                bottom: 20
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(54, 87, 170, 0.2)'
                }}></div>

            <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '65%', 
                    color: 'black',
                    textAlign: 'center',
                }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px'}}>
                    New Collection of ECE Hoodies!
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: '30px', color: "#5e5959"}}>
                    Shop the ECE Club Merch offerings. <br/>
                    Early Bird Hoodies available until Feburary 14th!
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleScroll}
                    sx={{ padding: '10px 30px', fontSize: '18px' }}
                >
                    Shop Now
                </Button>
            </div>
        </div>

            {/* Products Section */}
            <Container ref={productsSectionRef} sx={{ padding: '20px', minHeight: '75vh', minWidth: '97vw' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Featured Products
                </Typography>
                <br/>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Merch;
