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
        // if (selectedSize) {
        //     window.location.href = product.paymentLinks[selectedSize];
        // } else {
        //     setErrorMsg("Please select a size!");
        // }
        window.open(product.paymentLinks.form, '_blank');
    };

    const handleDetailsOpen = () => {
        setOpenDetails(true);
    };

    const handleDetailsClose = () => {
        setOpenDetails(false);
    };


    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ width: '100%', height: '100%', position: 'relative', padding: '0 10px', '@media (min-width: 600px)': {padding: '0 20px', },}}>
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
                        <Typography variant="body1" color="textSecondary" sx={{ textDecoration: 'line-through', fontSize: { xs: '1rem', sm: '2rem', md: '1.5rem' } }}>
                            {product.originalPrice}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'red', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '2rem', md: '1.5rem' } }}>
                            {product.discountedPrice}
                        </Typography>
                    </div>
                    {/*<br/>
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
                    </FormControl> */}
                    {errorMsg && (
                        <Typography variant="body2" color="error" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                            {errorMsg}
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '1vw', marginBottom: '1vw'}}>
                    <Button size="small" color="secondary" sx={{ marginLeft: '0.5vw',fontSize: '17px'}} onClick={handleDetailsOpen} >
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
    const isMobile = window.innerWidth <= 600; // Check if it's mobile
    const backgroundImage = isMobile ? 'url(/imgs/merch/banner3.png)' : 'url(/imgs/merch/banner2.png)';

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
                backgroundImage: backgroundImage, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                width: '100%',
                height: '70vh',
                color: 'black', 
                padding: '100px 0',
                textAlign: 'center',
                position: 'relative',
                bottom: 20,
            }} 
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: 'rgba(54, 87, 170, 0.2)'
                }}></div>

            <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'flex-end', 
                    height: '90%', 
                    color: 'black',
                    textAlign: 'right',
                    paddingRight: '5vw',
                    width: '50%',
                    marginLeft: 'auto',
                }}>
                <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: '20px', color: "#ffffff", textShadow: '4px 5px 5px rgba(3, 4, 44, 0.7)', fontSize: { xs: '1.90rem', sm: '3rem', md: '4rem', lg: '4rem'},}}>
                    Shop ECE Club Hoodies!
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '30px', color: "#ffffff", textShadow: '4px 5px 5px rgba(3, 4, 44, 0.7)', fontSize: { xs: '0.85rem', sm: '1rem', md: '2rem', lg: '2rem' }}}>
                    Only available for a limited time. <br/>
                    Early Bird discount available until March 9th!
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleScroll}
                    sx={{ padding: { xs: '7px 20px', sm: '7px 20px', md: '10px 30px', lg: '10px 30px'}, backgroundColor: '#13178a', fontSize: { xs: '0.75rem', sm: '2rem', md: '2rem', lg: '2rem'}, fontWeight: 'bold', boxShadow: '3px 4px 15px rgba(0, 0, 0, 0.3)', '&:hover': { backgroundColor: '#0c0f66'}}}
                >
                    Shop Now
                </Button>
            </div>
        </div>

            {/* Products Section */}
            <Container ref={productsSectionRef} sx={{ padding: '20px', minHeight: '75vh', minWidth: '97vw' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem', md: '3rem' } }}>
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
