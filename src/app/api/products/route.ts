import { NextResponse } from 'next/server';
import { ProductI } from '@/lib/types';


const products: ProductI[] = [
    {
        "id": 1,
        "title": "HAVIT HV-G92 Gamepad",
        "newPrice": 120,
        "prevPrice": 160,
        "discountPercent": 40,
        "ratting": 88,
        "imgSrc": "/g92-2-500x500 1.png",
        "description": "The HAVIT HV-G92 Gamepad offers a comfortable grip and precise control for an immersive gaming experience. It is compatible with PC and gaming consoles, making it perfect for all gamers."
    },
    {
        "id": 2,
        "title": "AK-900 Wired Keyboard",
        "newPrice": 960,
        "prevPrice": 1160,
        "discountPercent": 35,
        "ratting": 75,
        "imgSrc": "/ak-900-01-500x500 1.png",
        "description": "The AK-900 Wired Keyboard is a durable and reliable keyboard designed for heavy usage. Its ergonomic design ensures comfort during long hours of typing or gaming."
    },
    {
        "id": 3,
        "title": "IPS LCD Gaming Monitor",
        "newPrice": 370,
        "prevPrice": 400,
        "discountPercent": 30,
        "ratting": 90,
        "imgSrc": "/g27cq4-500x500 1.png",
        "description": "Enjoy stunning visuals with the IPS LCD Gaming Monitor. With vibrant colors and a fast refresh rate, this monitor delivers a seamless gaming experience."
    },
    {
        "id": 4,
        "title": "S-Series Comfort Chair",
        "newPrice": 370,
        "prevPrice": 400,
        "discountPercent": 25,
        "ratting": 99,
        "imgSrc": "/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
        "description": "The S-Series Comfort Chair provides superior support and comfort, perfect for long gaming sessions or office use. Its adjustable features ensure an ergonomic seating position."
    },
    {
        "id": 5,
        "title": "The North Coat",
        "newPrice": 260,
        "prevPrice": 360,
        "ratting": 65,
        "imgSrc": "/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
        "description": "The North Coat combines fashion and functionality with its premium materials and elegant design. Perfect for staying warm and stylish during cold seasons."
    },
    {
        "id": 6,
        "title": "Gucci Duffle Bag",
        "newPrice": 960,
        "prevPrice": 1160,
        "ratting": 65,
        "imgSrc": "/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
        "description": "The Gucci Duffle Bag is a statement piece with luxurious craftsmanship and ample space for your essentials, making it ideal for both travel and daily use."
    },
    {
        "id": 7,
        "title": "RGB Liquid CPU Cooler",
        "newPrice": 160,
        "prevPrice": 170,
        "ratting": 65,
        "imgSrc": "/gammaxx-l240-argb-1-500x500 1.png",
        "description": "The RGB Liquid CPU Cooler ensures optimal cooling performance for your PC while adding a vibrant touch with customizable RGB lighting."
    },
    {
        "id": 8,
        "title": "Small Bookshelf",
        "newPrice": 360,
        "prevPrice": 400,
        "ratting": 65,
        "imgSrc": "/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
        "description": "The Small Bookshelf is a compact and stylish solution for organizing your books and decor items, blending seamlessly with modern interiors."
    },
    {
        "id": 9,
        "title": "Breed Dry Dog Food",
        "newPrice": 100,
        "ratting": 35,
        "imgSrc": "/71RdoeXxtrL 1.png",
        "description": "Breed Dry Dog Food provides complete and balanced nutrition for your furry companion, promoting overall health and vitality with high-quality ingredients."
    },
    {
        "id": 10,
        "title": "CANON EOS DSLR Camera",
        "newPrice": 360,
        "ratting": 95,
        "imgSrc": "/eos-250d-03-500x500 1.png",
        "description": "Capture stunning photos and videos with the CANON EOS DSLR Camera. Perfect for beginners and professionals alike, it delivers exceptional image quality and ease of use."
    },
    {
        "id": 11,
        "title": "ASUS FHD Gaming Laptop",
        "newPrice": 700,
        "ratting": 325,
        "imgSrc": "/ideapad-gaming-3i-01-500x500 1.png",
        "description": "The ASUS FHD Gaming Laptop is designed for gamers who demand high performance. With powerful hardware and a stunning display, it delivers an immersive gaming experience."
    },
    {
        "id": 12,
        "title": "Curology Product Set",
        "newPrice": 500,
        "ratting": 145,
        "imgSrc": "/curology-j7pKVQrTUsM-unsplash 1.png",
        "description": "The Curology Product Set offers a personalized skincare solution tailored to your needs. Achieve healthier, clearer skin with this dermatologist-recommended set."
    },
    {
        "id": 13,
        "title": "Kids Electric Car",
        "newPrice": 965,
        "ratting": 65,
        "imgSrc": "/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
        "description": "The Kids Electric Car offers a fun and realistic driving experience for children. With a sleek design and safety features, it’s perfect for hours of entertainment."
    },
    {
        "id": 14,
        "title": "Jr. Zoom Soccer Cleats",
        "newPrice": 1160,
        "ratting": 35,
        "imgSrc": "/Copa_Sense 1.png",
        "description": "Designed for young athletes, the Jr. Zoom Soccer Cleats provide excellent grip and comfort on the field, helping kids enhance their game performance."
    },
    {
        "id": 15,
        "title": "GP11 Shooter USB Gamepad",
        "newPrice": 660,
        "ratting": 55,
        "imgSrc": "/GP11_PRD3 1.png",
        "description": "The GP11 Shooter USB Gamepad is a lightweight and responsive controller, ideal for precision gaming. Its ergonomic design ensures comfort during long sessions."
    },
    {
        "id": 16,
        "title": "Quilted Satin Jacket",
        "newPrice": 660,
        "ratting": 55,
        "imgSrc": "/Frame 608.png",
        "description": "Stay warm and stylish with the Quilted Satin Jacket. Perfect for casual outings, it combines functionality with an elegant design for all-season wear."
    },   {
        "id": 17,
        "title": "PlayStation 5",
        "description": "Black and White version of the PS5 coming out on sale. Experience next-gen gaming with lightning-fast loading, adaptive triggers, and stunning graphics.",
        "imgSrc": "/featuredGrid/Frame 684.png",
        "newPrice": 499,
        "prevPrice": 599,
        "ratting": 95
    },
    {
        "id": 18,
        "title": "Women’s Collections",
        "description": "Featured women’s collections that give you another vibe. Explore trendy and stylish apparel perfect for any occasion.",
        "imgSrc": "/featuredGrid/Frame 685.png",
        "newPrice": 150,
        "prevPrice": 200,
        "ratting": 85
    },
    {
        "id": 19,
        "title": "Speakers",
        "description": "Amazon wireless speakers deliver immersive sound quality with seamless connectivity. Perfect for music lovers and audiophiles.",
        "imgSrc": "/featuredGrid/Frame 686.png",
        "newPrice": 120,
        "prevPrice": 150,
        "ratting": 90
    },
    {
        "id": 20,
        "title": "Perfume",
        "description": "GUCCI INTENSE OUD EDP - A luxurious and captivating fragrance that exudes elegance and sophistication.",
        "imgSrc": "/featuredGrid/Frame 687.png",
        "newPrice": 300,
        "prevPrice": 350,
        "ratting": 92
    }
];

// Get all products
export async function GET() {
    try {
      return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch products :: '+ error},
        { status: 500 }
      );
    }
  }