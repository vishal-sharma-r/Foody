


export const API_URL =
 "https://corsproxy.io/?https://www.swiggy.com//dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING";
 export  const api =  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING";
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
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
export const restaurantList =[
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "407999",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "163b3a4a-8d36-4288-b016-6d8ef9256396",
        "city": "95",
        "area": "Trikuta Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "hnfp1vlbb4epeajiaujy",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-trikuta-nagar-trikuta-nagar-2",
          "city": "jammu"
        },
        "cityState": "95",
        "address": "HOTEL JAMMU PREMIER KE ANDER (P) LTD: RESIDENCY ROAD, JAMMU, ZONE-2, WARD-7, JAMMU MUNICIPAL CORPORATION (JAMMU & KASHMIR)-180001",
        "locality": "Residency Road",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6481460~p=1~eid=00000187-7ac7-3d98-0854-91fb00b10102",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "407999",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "286448",
        "name": "McDonald's",
        "uuid": "a05887fc-cc77-4c98-8b0d-2e70bb526e8b",
        "city": "95",
        "area": "Resham Ghar Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
        "cuisines": [
          "American",
          "Continental",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "mcdonalds-denis-gate-gandhi-nagar",
          "city": "jammu"
        },
        "cityState": "95",
        "address": "Commercial Comlpex, Shop No.1. Ground Floor. Denis Gate. Veer Marg, Jammu-180001",
        "locality": "Prem Nagar",
        "parentId": 630,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "286448",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "474827",
        "name": "Amritsari Kulcha Hut - Bus Stand",
        "uuid": "27c1c1aa-7e39-45c8-91c1-319b234bc01e",
        "city": "95",
        "area": "Resham Ghar Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "s7jtqheebliqyclvxjpg",
        "cuisines": [
          "North Indian",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "amritsari-kulcha-hut-jewel-chowk-jewel-chowk",
          "city": "jammu"
        },
        "cityState": "95",
        "address": "G. Floor B.C Road Trikuta Complex Jammu",
        "locality": "Jewel Chowk",
        "parentId": 32145,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "474827",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "435302",
        "name": "The Waffling Station",
        "uuid": "85573afd-493e-4d8d-ae0d-40966cd06e9c",
        "city": "95",
        "area": "Rehari Colony",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "pqxzt4dlx6d8filmg9wj",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 4.599999904632568,
        "slugs": {
          "restaurant": "the-waffling-station-jewel-chowk-jewel-chowk",
          "city": "jammu"
        },
        "cityState": "95",
        "address": "Zone 4, Ward 3, Old Janipur, Jammu",
        "locality": "Housing Colony",
        "parentId": 8504,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6436155~p=4~eid=00000187-7ac7-3d98-0854-91fc00b10437",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "435302",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 4.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
  ];
