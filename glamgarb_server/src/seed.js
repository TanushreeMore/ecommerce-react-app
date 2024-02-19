// Import necessary modules and models
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_project_glamgarb");

// Sample user data
const usersData = [
    {
        "firstName": 'John',
        "lastName": 'Doe',
        "email": 'john@example.com',
        "password": 'password123',
        "role": 'CUSTOMER',
        "mobile": '1234567890',
        "address": [], // Add address IDs if needed
        "paymentInformation": [], // Add payment information IDs if needed
        "ratings": [], // Add rating IDs if needed
        "reviews": [] // Add review IDs if needed
    },
    {
        "firstName": 'Alice',
        "lastName": 'Smith',
        "email": 'alice@example.com',
        "password": 'password456',
        "role": 'CUSTOMER',
        "mobile": '9876543210',
        "address": [], // Add address IDs if needed
        "paymentInformation": [], // Add payment information IDs if needed
        "ratings": [], // Add rating IDs if needed
        "reviews": [] // Add review IDs if needed
    }
];

// Sample product data
const productsData = [
    {
        "_id": {
          "$oid": "65b2336d641a60c11d708473"
        },
        "title": "Women in White",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 888,
        "discountedPrice": 888,
        "quantity": 8,
        "brand": "AAYU",
        "color": "White",
        "imageUrl": "https://images.unsplash.com/photo-1593575620619-602b4ddf6e96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "_id": {
          "$oid": "65b5309385ad8be40fc01de8"
        },
        "title": "my NEW TURRITOPSIS",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65b5309385ad8be40fc01de9"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65b5309385ad8be40fc01dea"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65b5309385ad8be40fc01deb"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65b5309385ad8be40fc01de7"
          }
        ],
        "createdAt": {
          "$date": "2024-01-27T16:29:14.227Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65b530d485ad8be40fc01df6"
        },
        "title": "NEW TURRITOPSIS",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65b530d485ad8be40fc01df7"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65b530d485ad8be40fc01df8"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65b530d485ad8be40fc01df9"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65b530d485ad8be40fc01df5"
          }
        ],
        "createdAt": {
          "$date": "2024-01-27T16:29:14.227Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65b8bed3bc556bf95dbfba99"
        },
        "title": "my product",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65b8bed3bc556bf95dbfba9a"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65b8bed3bc556bf95dbfba9b"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65b8bed3bc556bf95dbfba9c"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65b8bed3bc556bf95dbfba98"
          }
        ],
        "createdAt": {
          "$date": "2024-01-30T06:24:57.595Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65b8bfdfbc556bf95dbfbbaa"
        },
        "title": "NEW TURRI TOPSIS",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65b8bfdfbc556bf95dbfbbab"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65b8bfdfbc556bf95dbfbbac"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65b8bfdfbc556bf95dbfbbad"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65b8bfdfbc556bf95dbfbba9"
          }
        ],
        "createdAt": {
          "$date": "2024-01-30T06:24:57.595Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65b92bc3bc556bf95dbfbf3a"
        },
        "title": "img",
        "description": "trial",
        "price": 500,
        "discountedPrice": 450,
        "quantity": 5,
        "brand": "unsplash",
        "color": "black",
        "size": [
          {
            "name": "S",
            "quantity": 10,
            "_id": {
              "$oid": "65b92bc3bc556bf95dbfbf3b"
            }
          },
          {
            "name": "M",
            "quantity": 15,
            "_id": {
              "$oid": "65b92bc3bc556bf95dbfbf3c"
            }
          },
          {
            "name": "L",
            "quantity": 35,
            "_id": {
              "$oid": "65b92bc3bc556bf95dbfbf3d"
            }
          }
        ],
        "imageUrl": "https://images.unsplash.com/photo-1706260239049-2686c8e30dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65b92bc3bc556bf95dbfbf39"
          }
        ],
        "createdAt": {
          "$date": "2024-01-30T06:24:57.595Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65bb5e512939672004402a6f"
        },
        "title": "NEW TURRI TOPSIS",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65bb5e512939672004402a70"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65bb5e512939672004402a71"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65bb5e512939672004402a72"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65bb5e512939672004402a6e"
          }
        ],
        "createdAt": {
          "$date": "2024-02-01T08:50:12.022Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65bb5e962939672004402a7b"
        },
        "title": "NEW TURRI TOPSIS",
        "description": "Women Boxy, Regular Fit Printed Lapel Collar Casual Shirt",
        "price": 2399,
        "discountedPrice": 599,
        "quantity": 100,
        "brand": "Majestic Women",
        "color": "Brown",
        "size": [
          {
            "name": "S",
            "quantity": 20,
            "_id": {
              "$oid": "65bb5e962939672004402a7c"
            }
          },
          {
            "name": "M",
            "quantity": 30,
            "_id": {
              "$oid": "65bb5e962939672004402a7d"
            }
          },
          {
            "name": "L",
            "quantity": 50,
            "_id": {
              "$oid": "65bb5e962939672004402a7e"
            }
          }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/4/k/l-234-j-turritopsis-original-imagnfwnxzckdueh.jpeg?q=70",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65bb5e962939672004402a7a"
          }
        ],
        "createdAt": {
          "$date": "2024-02-01T08:50:12.022Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65c657edc50a04c9633b800a"
        },
        "title": "new",
        "description": "sasd",
        "price": 152,
        "discountedPrice": 1,
        "quantity": 2,
        "brand": "unsplash",
        "color": "black",
        "size": [
          {
            "name": "S",
            "quantity": 0,
            "_id": {
              "$oid": "65c657edc50a04c9633b800b"
            }
          },
          {
            "name": "M",
            "quantity": 1,
            "_id": {
              "$oid": "65c657edc50a04c9633b800c"
            }
          },
          {
            "name": "L",
            "quantity": 1,
            "_id": {
              "$oid": "65c657edc50a04c9633b800d"
            }
          }
        ],
        "imageUrl": "https://images.unsplash.com/photo-1706260239049-2686c8e30dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65c657edc50a04c9633b8009"
          }
        ],
        "createdAt": {
          "$date": "2024-02-09T08:04:03.922Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "65c657f6c50a04c9633b8016"
        },
        "title": "new",
        "description": "sasd",
        "price": 152,
        "discountedPrice": 1,
        "quantity": 2,
        "brand": "unsplash",
        "color": "black",
        "size": [
          {
            "name": "S",
            "quantity": 0,
            "_id": {
              "$oid": "65c657f6c50a04c9633b8017"
            }
          },
          {
            "name": "M",
            "quantity": 1,
            "_id": {
              "$oid": "65c657f6c50a04c9633b8018"
            }
          },
          {
            "name": "L",
            "quantity": 1,
            "_id": {
              "$oid": "65c657f6c50a04c9633b8019"
            }
          }
        ],
        "imageUrl": "https://images.unsplash.com/photo-1706260239049-2686c8e30dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        "ratings": [],
        "reviews": [],
        "numRatings": 0,
        "category": [
          {
            "$oid": "65c657f6c50a04c9633b8015"
          }
        ],
        "createdAt": {
          "$date": "2024-02-09T08:04:03.922Z"
        },
        "__v": 0
      }
];

// Seed users data
User.insertMany(usersData)
    .then(users => {
        console.log('Users seeded:', users);
        // Seed products data after users are seeded
        return Product.insertMany(productsData);
    })
    .then(products => {
        console.log('Products seeded:', products);
        // Close MongoDB connection after seeding is done
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error seeding data:', error);
    });
