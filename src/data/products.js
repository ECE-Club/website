const products = [
    { 
        id: 1, 
        name: 'ECE Hoodie', 
        originalPrice: '$65.00 CAD', 
        discountedPrice: '$55.00 CAD', 
        images: ['imgs/merch/eceHoodieFront.png', 'imgs/merch/eceHoodieBack.png'],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        paymentLinks: {
            // xs: "https://example.com/payment/xsmall",
            // s: "https://example.com/payment/small",
            // m: "https://example.com/payment/medium",
            // l: "https://example.com/payment/large",
            // xl: "https://example.com/payment/xlarge",
            // xxl: "https://example.com/payment/xxlarge",
            // xxxl: "https://example.com/payment/xxxlarge",
            generic:"https://square.link/u/TShJdAYZ"
        },
        details: "imgs/merch/eceHoodieDetail.png",
        sizeGuideImage: 'imgs/merch/eceHoodieSizing.png'
    }
];

export default products;