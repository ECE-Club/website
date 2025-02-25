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
            form: "https://forms.gle/4nfHbsNcHFWNr1vB6"
        },
        details: "imgs/merch/eceHoodieDetail.png",
        sizeGuideImage: 'imgs/merch/eceHoodieSizing.png'
    }
];

export default products;