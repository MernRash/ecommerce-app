
import {createContext} from "react"
import AppleMacBook from '../../media/Products/Apple Macbook Air.png';

    const ListOfProducts = [ 
    {
        id : 0,
        title :"Apple Macbook Pro",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 50000,
        quantity : 0,
        description : "",
        category:"Mac"
    },
    {
        id : 1,
        title :"Apple Macbook Pro",
        ratings : 4.5,
        imgUrl : AppleMacBook,
        price : 1000,
        quantity : 0,
        description : "",
        category:"Mac"
    },
    {
        id : 2,
        title :"Apple Macbook Air",
        ratings : 3,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Ipad"
    },
    {
        id : 3,
        title :"Apple iPhone 11",
        ratings : 3.5,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Ipad"
    },
    {
        id : 4,
        title :"Apple Macbook Pro",
        ratings : 2.5,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Ipod"
    },
    {
        id : 5,
        title :"Apple Ipad",
        ratings : 5,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Ipod"
    },
    {
        id : 6,
        title :"Apple Watch 21-1",
        ratings : 3.5,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Accessories"
    },
    {
        id : 7,
        title :"Apple iPod 2A",
        ratings : 3,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 0,
        description : "",
        category:"Accessories"
    },
]

export const productContext = createContext(ListOfProducts);