const products = [
    { 
        id: 1, 
        name: 'ECE Hoodie', 
        originalPrice: '$65.00 CAD', 
        discountedPrice: '$55.00 CAD', 
        images: ['imgs/merch/eceHoodieFront.png', 'imgs/merch/eceHoodieBack.png'],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        paymentLinks: {
            generic:"https://square.link/u/TShJdAYZ",
            form: "https://docs.google.com/forms/d/e/1FAIpQLSeFSvp5z8Da6JL68OCO_t1-YCDvEXt46gaiLnDA8G4ScGi7mw/viewform?usp=dialog"
        },
        details: "imgs/merch/eceHoodieDetail.png",
        sizeGuideImage: 'imgs/merch/eceHoodieSizing.png'
    }
];

export default products;