export const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
export const api =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING";
export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const FAQ = [
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 475,
    title: "Will  Foody be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];
// Now Building dynamic Card
// copy from swiggy
// Config Driven UI ** important
export const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "407999",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "163b3a4a-8d36-4288-b016-6d8ef9256396",
      city: "95",
      area: "Trikuta Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "hnfp1vlbb4epeajiaujy",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-trikuta-nagar-trikuta-nagar-2",
        city: "jammu",
      },
      cityState: "95",
      address:
        "HOTEL JAMMU PREMIER KE ANDER (P) LTD: RESIDENCY ROAD, JAMMU, ZONE-2, WARD-7, JAMMU MUNICIPAL CORPORATION (JAMMU & KASHMIR)-180001",
      locality: "Residency Road",
      parentId: 582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 500,
        message: "",
        title: "Delivery Charge",
        amount: "500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6481460~p=1~eid=00000187-7ac7-3d98-0854-91fb00b10102",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "407999",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "286448",
      name: "McDonald's",
      uuid: "a05887fc-cc77-4c98-8b0d-2e70bb526e8b",
      city: "95",
      area: "Resham Ghar Colony",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "1293a58ab5610f4c730c3d8cb6ac1b65",
      cuisines: ["American", "Continental", "Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "mcdonalds-denis-gate-gandhi-nagar",
        city: "jammu",
      },
      cityState: "95",
      address:
        "Commercial Comlpex, Shop No.1. Ground Floor. Denis Gate. Veer Marg, Jammu-180001",
      locality: "Prem Nagar",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 500,
        message: "",
        title: "Delivery Charge",
        amount: "500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "286448",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "474827",
      name: "Amritsari Kulcha Hut - Bus Stand",
      uuid: "27c1c1aa-7e39-45c8-91c1-319b234bc01e",
      city: "95",
      area: "Resham Ghar Colony",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "s7jtqheebliqyclvxjpg",
      cuisines: ["North Indian", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "amritsari-kulcha-hut-jewel-chowk-jewel-chowk",
        city: "jammu",
      },
      cityState: "95",
      address: "G. Floor B.C Road Trikuta Complex Jammu",
      locality: "Jewel Chowk",
      parentId: 32145,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 500,
        message: "",
        title: "Delivery Charge",
        amount: "500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "474827",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "435302",
      name: "The Waffling Station",
      uuid: "85573afd-493e-4d8d-ae0d-40966cd06e9c",
      city: "95",
      area: "Rehari Colony",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "pqxzt4dlx6d8filmg9wj",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "the-waffling-station-jewel-chowk-jewel-chowk",
        city: "jammu",
      },
      cityState: "95",
      address: "Zone 4, Ward 3, Old Janipur, Jammu",
      locality: "Housing Colony",
      parentId: 8504,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 500,
        message: "",
        title: "Delivery Charge",
        amount: "500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6436155~p=4~eid=00000187-7ac7-3d98-0854-91fc00b10437",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "435302",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];
export const restaurants = [
  {
    info: {
      id: "224920",
      name: "Chandralok Kachouri",
      cloudinaryImageId: "qbo11lh7l43xpkd7wqts",
      locality: "Kp Kakkar Road",
      areaName: "Rambagh",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks", "South Indian", "Chinese", "Fast Food", "Pizzas"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "224920",
        fees: [
          { name: "BASE_DISTANCE", fee: 1900 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 1900,
      },
      parentId: "57887",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "147619",
      name: "Jai Shree Shankar Punjabi Dhaba",
      cloudinaryImageId: "slfbprrckr7jk1zm58rd",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: [
        "Indian",
        "North Indian",
        "Chinese",
        "South Indian",
        "Snacks",
        "Punjabi",
        "Beverages",
      ],
      avgRating: 3.6,
      veg: true,
      feeDetails: {
        restaurantId: "147619",
        fees: [
          { name: "BASE_DISTANCE", fee: 2500 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 2500,
      },
      parentId: "108723",
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "127614",
      name: "Statesman House",
      cloudinaryImageId: "98588793791dd32f2daa7e3595fcb69c",
      locality: "Hewett Road",
      areaName: "Rambagh",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "127614",
        fees: [
          { name: "BASE_DISTANCE", fee: 1900 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 1900,
      },
      parentId: "195577",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "380152",
      name: "The Quick Curry",
      cloudinaryImageId: "aq5uredkyfrmct6a99cv",
      locality: "Vivekanand Marg",
      areaName: "Leader Road",
      costForTwo: "₹250 for two",
      cuisines: ["Thalis", "North Indian"],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: "380152",
        fees: [
          { name: "BASE_DISTANCE", fee: 1900 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 1900,
      },
      parentId: "212902",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "666981",
      name: "Fire House Pizza",
      cloudinaryImageId: "906c0affa7d8ff78a3e4db88b4433cde",
      locality: "Neta nagar",
      areaName: "Civil Lines",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.6,
      veg: true,
      feeDetails: {
        restaurantId: "666981",
        fees: [
          { name: "BASE_DISTANCE", fee: 1900 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 1900,
      },
      parentId: "79622",
      avgRatingString: "3.6",
      totalRatingsString: "10+",
    },
  },
  {
    info: {
      id: "481918",
      name: "Al-Baik Zone",
      cloudinaryImageId: "mra2lrsmgduhwswzzee0",
      locality: "Nakhas Kona",
      areaName: "Leader Road",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Arabian", "Biryani"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "481918",
        fees: [
          { name: "BASE_DISTANCE", fee: 1900 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 1900,
      },
      parentId: "8049",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
    },
  },
  {
    info: {
      id: "80312",
      name: "Raju Kitchen Restaurant",
      cloudinaryImageId: "u8m5sxxbwuwfjolzdf69",
      locality: "Tandon Road",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: [
        "Indian",
        "Chinese",
        "Mughlai",
        "North Indian",
        "Snacks",
        "Lucknowi",
        "Biryani",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "80312",
        fees: [
          { name: "BASE_DISTANCE", fee: 2500 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 2500,
      },
      parentId: "165971",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "404669",
      name: "Momos castle",
      cloudinaryImageId: "lubiprpdt4cgnunga3rr",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "404669",
        fees: [
          { name: "BASE_DISTANCE", fee: 2500 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 2500,
      },
      parentId: "250870",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
    },
  },
  {
    info: {
      id: "147244",
      name: "Delight The Pastry Shop",
      cloudinaryImageId: "dlx59kcbntvnlf8igifw",
      locality: "Jahid Complex",
      areaName: "Kareli",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Chinese", "Biryani", "Snacks"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "147244",
        fees: [
          { name: "BASE_DISTANCE", fee: 2500 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 2500,
      },
      parentId: "70572",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "80427",
      name: "Jai Shree Shankar Bhojanalaya",
      cloudinaryImageId: "qhdec9rh38ewnb80tkim",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "South Indian",
        "Chinese",
        "Snacks",
        "Indian",
      ],
      avgRating: 3.7,
      veg: true,
      feeDetails: {
        restaurantId: "80427",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "108722",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "80703",
      name: "Aryan Family's Delight",
      cloudinaryImageId: "kb34u4pywk49ksbyn4g5",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Fast Food",
        "Snacks",
        "Burgers",
        "Chinese",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "80703",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "6001",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "87514",
      name: "Haldiram Bhujiawala",
      cloudinaryImageId: "nkd7purcqzconoypeto9",
      locality: "Tashkent Marg",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chinese",
        "Desserts",
        "Indian",
        "Fast Food",
      ],
      avgRating: 3.7,
      veg: true,
      feeDetails: {
        restaurantId: "87514",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "92848",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "128962",
      name: "Pizza Club 99",
      cloudinaryImageId: "yxkkxyhgvcb0mkmneoj6",
      locality: "Gulteria",
      areaName: "Dhoomanganj",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Fast Food", "Beverages"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "128962",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "13512",
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "80216",
      name: "Hot Stuff",
      cloudinaryImageId: "beeaadg3lqjics4fzuvw",
      locality: "Lal Bhadhur Shastri Marg",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Beverages", "Desserts", "Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "80216",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "97558",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "150376",
      name: "Shri Ram Shakahari Bhojnalaya",
      cloudinaryImageId: "suz4we5x7dgznrquxvu9",
      locality: "Katju Road",
      areaName: "Leader Road",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "150376",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "186817",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "314904",
      name: "Capsicum",
      cloudinaryImageId: "60d52c0fb85ea4f566864b2709538d6f",
      locality: "Mahewa Purab Patti",
      areaName: "Naini",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Pizzas", "Pastas", "Snacks", "Beverages"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "314904",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "55813",
      avgRatingString: "3.5",
      totalRatingsString: "100+",
    },
  },
  {
    info: {
      id: "380494",
      name: "Chinese Hunger",
      cloudinaryImageId: "h5zwpqi3jquzonhjq8bn",
      locality: "Mahewa Naini",
      areaName: "Naini",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "380494",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "61783",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
    },
  },
  {
    info: {
      id: "591407",
      name: "Sardar G Malai Chaap Junction",
      cloudinaryImageId: "sk6saam8uteg0kuoxkas",
      locality: "Tashkand Marg",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Tandoor", "Arabian", "Punjabi"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "591407",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "14511",
      avgRatingString: "4.0",
      totalRatingsString: "50+",
    },
  },
  {
    info: {
      id: "80226",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "80226",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "238136",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "a3poc70wqkajnw3zxpsl",
      locality: "Tashkand Marg",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "238136",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "4961",
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "332194",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "mlhwn3yictyis4cey2ai",
      locality: "Lajpat Rai Road",
      areaName: "Meergunj",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "332194",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "582",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "442057",
      name: "Shravan Specials by Lunchbox",
      cloudinaryImageId: "crakciwcxxy6jfoqxzkj",
      locality: "Civil Lines",
      areaName: "Stanley Road",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "442057",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "21938",
      avgRatingString: "3.3",
      totalRatingsString: "6",
    },
  },
  {
    info: {
      id: "442056",
      name: "The Biryani Life",
      cloudinaryImageId: "uu7a0fqio5jygufj8lul",
      locality: "Stanley Road",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "442056",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "8496",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
    },
  },
  {
    info: {
      id: "723874",
      name: "Hudson Chopsticks",
      cloudinaryImageId: "1952cde9bea82274227516f5caa99123",
      locality: "PD Tandon Road",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "Thai",
        "Asian",
        "Snacks",
        "Tibetan",
        "Nepalese",
        "Pan-Asian",
        "Seafood",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "723874",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "7129",
      avgRatingString: "4.2",
      totalRatingsString: "50+",
    },
  },
];

export const ResItemsData = [
  {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "Domino's Pizza",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
                {
                  id: "Dineout",
                  title: "Dineout",
                  cta: "https://swiggy.com/menu/59284/dineout",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "59284",
                name: "Domino's Pizza",
                city: "Lucknow",
                slugs: {
                  restaurant: "dominos-pizza-beside-sbh-bank-hazratganj",
                  city: "lucknow",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/398ec331-d60c-4bb2-a197-b500b8143f95_59284.jpg",
                locality: "Hazratganj",
                areaName: "Hazratganj",
                costForTwo: "40000",
                costForTwoMessage: "₹400 for two",
                cuisines: ["Pizzas", "Italian"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "59284",
                  icon: "dominos_cod_xc6inc",
                },
                parentId: "2456",
                avgRatingString: "4.3",
                totalRatingsString: "9.8K+ ratings",
                sla: {
                  restaurantId: "59284",
                  deliveryTime: 30,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 30,
                  lastMileTravel: 1,
                  serviceability: "SERVICEABLE",
                  rainMode: "RAIN_MODE_NONE",
                  longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  zoneId: 468,
                  slaString: "25-30 MINS",
                  lastMileTravelString: "1.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-22 03:59:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: "Get items under 189",
                  shortDescriptionList: [
                    {
                      meta: "Get items under 189",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹125 off on orders above ₹1199",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "Get items under 189",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹125 off on orders above ₹1199 | Use code FLAT125",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "dominos-pizza-beside-sbh-bank-hazratganj",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message: "Beside Sbh Bank, Sapru Marg, Hazratganj, Lucknow",
                  },
                  {
                    title: "Cuisines",
                    message: "Pizzas,Italian",
                  },
                ],
                logo: "dominos_logo_zohi7f",
                totalRatings: 9800,
                aggregatedDiscountInfoV2: {
                  header: "Get items under 189",
                  shortDescriptionList: [
                    {
                      meta: "Get items under 189",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹125 off on orders above ₹1199",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "Get items under 189",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹125 off on orders above ₹1199 | Use code FLAT125",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                nudgeBanners: [
                  {
                    minValue: 839,
                    maxValue: 1199,
                    priority: 3,
                    couponCode: "FLAT125",
                    discountInfo: {
                      discountType: "Flat",
                      value: 125,
                    },
                    lockedMessage:
                      "Add items worth ₹<amount> to save ₹125 | Code FLAT125",
                    unlockedMessage:
                      "FLAT125 Coupon Unlocked! Use it to save ₹125",
                    logoCtx: {},
                  },
                  {
                    minValue: 2800,
                    maxValue: 4000,
                    priority: 4,
                    couponCode: "PARTY",
                    discountInfo: {
                      discountType: "Percentage",
                      value: 20,
                    },
                    lockedMessage:
                      "Add items worth ₹<amount> to unlock flat 20% off | Code PARTY",
                    unlockedMessage:
                      "PARTY Coupon Unlocked! Use it to save flat 20% off",
                    logoCtx: {},
                  },
                ],
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/59284",
                },
                generalPurposeInfoListV2: [
                  {
                    cta: {
                      info: {
                        recordings: {},
                      },
                      linkCta: {},
                    },
                  },
                ],
                ratingSlab: "RATING_SLAB_5",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "26.85339927002,80.94768245403668",
                backgroundImageOverlayInfo: {},
                featuredSectionInfo: {},
              },
              analytics: {},
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 5,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                  },
                },
                scrollBar: {
                  scrollThumbColor: "#E46D47",
                  scrollTrackColor: "#e4e4e4",
                  width: 54,
                  height: 4,
                  scrollStyling: {
                    padding: {
                      top: 20,
                      bottom: 20,
                    },
                  },
                },
              },
              id: "offerCollectionWidget",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "Extra ₹25 off",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                        offerIds: ["e3075be7-f340-41ef-9b1e-f22b9a07b584"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        description: "APPLICABLE OVER & ABOVE COUPONS",
                        offerType: "offers",
                        restId: "59284",
                        offerLogo:
                          "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "ITEMS AT ₹189",
                        offerTag: "DEAL OF DAY",
                        offerTagColor: "#E46D47",
                        offerIds: ["d9f49b98-dd87-4a43-9678-f2bf2fb14faf"],
                        expiryTime: "1970-01-02T04:18:57Z",
                        description: "ON SELECT ITEMS |",
                        offerType: "offers",
                        restId: "59284",
                        offerLogo: "offers/deal-of-day",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹125 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["14c0d0ef-6c42-4a65-8501-5fb17fe1c6a3"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE FLAT125",
                        description: "ABOVE ₹1199",
                        offerType: "offers",
                        restId: "59284",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT 20% OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["fc875815-8813-4928-b25c-6323e06d721b"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE PARTY",
                        description: "ABOVE ₹4000",
                        offerType: "offers",
                        restId: "59284",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹100 OFF",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/31/2c03d1fc-7bc6-4085-b797-f11af939da63_SBI.png",
                        offerIds: ["6b752671-40e9-468b-afd9-5584ff432748"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE SBIDELIGHTS",
                        description: "ABOVE ₹749",
                        offerType: "offers",
                        restId: "59284",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/31/2c03d1fc-7bc6-4085-b797-f11af939da63_SBI.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.MenuTab",
              tabs: [
                {
                  id: "REGULAR",
                  title: "Full Menu",
                  selected: true,
                  analytics: {},
                  selectedImage: "v1594205104/fullMenuActive_qcsdzt.png",
                  unselectedImage: "v1594205107/fullMenuInactive_fbdtp2.png",
                },
              ],
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
  },
];

export const recomendedData = [
  [
    {
      id: "143166579",
      name: "Tandoori Roti",
      category: "Breads",
      description: "serves 1",
      imageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/6/13/fc1a76ba-27f6-4dc4-b22a-33e2fc7c16a4_c007b08f-0238-4962-bd6e-50a361c8510a.jpg",
      isVeg: 1,
      price: 2000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "140 ratings",
          ratingCountV2: "140",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "110369220",
      name: "Tawa Roti",
      category: "Breads",
      description: "serves 1",
      imageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/6/13/1eaf5848-9ffd-4eb8-a45c-b24edb0af115_cc6f1d49-52ba-48cf-91a7-5c62fb3c0a3a.jpg",
      isVeg: 1,
      price: 2000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "143 ratings",
          ratingCountV2: "143",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "106662881",
      name: "Garlic Naan",
      category: "Breads",
      description:
        "A Delicious combination of naan topped with garlic pieces and chutney with a smokey flavour.",
      imageId: "0728fca73a4f018287583981f3b447fc",
      isVeg: 1,
      price: 9000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "26 ratings",
          ratingCountV2: "26",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "36859219",
      name: "Butter Missi Roti",
      category: "Breads",
      description: "serves 1",
      imageId: "aaa6644ff9e0ab31cdd7cab0ca46e8f7",
      isVeg: 1,
      price: 3000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "197 ratings",
          ratingCountV2: "197",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "36859200",
      name: "Paneer Paratha",
      category: "Breads",
      description:
        "Crispy and delicious wheat parantha, filled in with spicy paneer masala.",
      imageId: "839a7333a384e6220644aa3efffb6e9d",
      isVeg: 1,
      price: 8000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {
        text: "Bestseller",
        textColor: "#ffffff",
        topBackgroundColor: "#d53d4c",
        bottomBackgroundColor: "#b02331",
      },
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      isBestseller: true,
      ratings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "495 ratings",
          ratingCountV2: "495",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "143166590",
      name: "Garlic Roti",
      category: "Breads",
      description: "serves 1",
      imageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/6/14/36d86e52-197a-4106-9c19-3536ecac69c8_78eaede3-24cd-4772-aec3-472f193f7282.jpg",
      isVeg: 1,
      price: 3500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "19 ratings",
          ratingCountV2: "19",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "143166607",
      name: "Aloo Kulcha",
      category: "Breads",
      description:
        "Traditional and authentic aloo kulcha bread stuffed with aloo pyaaz masala , baked in tandoor chole, chatori imli pyaz chutney, raita with every kulcha.",
      imageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/5/24/9d886f9e-6823-4897-ad04-ec5acd67beb1_21a4e27f-ce74-46fa-bea5-c02d9fc623c8.jpg",
      isVeg: 1,
      price: 10000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "2.2",
          ratingCount: "5 ratings",
          ratingCountV2: "5",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "143166585",
      name: "Butter Tandoori Roti",
      category: "Breads",
      description: "serves 1",
      imageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/6/13/fc1a76ba-27f6-4dc4-b22a-33e2fc7c16a4_c007b08f-0238-4962-bd6e-50a361c8510a.jpg",
      isVeg: 1,
      price: 3000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "34 ratings",
          ratingCountV2: "34",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "36859221",
      name: "Paneer Kulcha",
      category: "Breads",
      description:
        "Traditional and authentic amritsari kulcha bread stuffed with paneer, baked in tandoor tastes best with chole or dal makhani",
      imageId: "kvp66wm6r724bmtszrru",
      isVeg: 1,
      price: 10000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "62 ratings",
          ratingCountV2: "62",
        },
      },
      itemPriceStrikeOff: true,
    },
    {
      id: "143166609",
      name: "Paneer Naan",
      category: "Breads",
      description: "serves 1",
      isVeg: 1,
      price: 11000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {},
      },
      itemPriceStrikeOff: true,
    },
  ],
];
