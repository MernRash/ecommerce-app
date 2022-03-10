
import {createContext} from "react"
import AppleMacBook from '../../media/Products/Apple Macbook Air.png';

    const ListOfProducts = [ 
    {
        id : 0,
        title :"Apple Macbook Pro",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 50000,
        quantity : 5,
        description : "",
    },
    {
        id : 1,
        title :"Apple Macbook Pro",
        ratings : 4.5,
        imgUrl : AppleMacBook,
        price : 1000,
        quantity : 5,
        description : "",
    },
    {
        id : 2,
        title :"Apple Macbook Air",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
    {
        id : 3,
        title :"Apple iPhone 11",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
    {
        id : 4,
        title :"Apple Macbook Pro",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
    {
        id : 5,
        title :"Apple Ipad",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
    {
        id : 6,
        title :"Apple Watch 21-1",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
    {
        id : 7,
        title :"Apple iPod 2A",
        ratings : 4,
        imgUrl : AppleMacBook,
        price : 100,
        quantity : 5,
        description : "",
    },
]

export const productContext = createContext(ListOfProducts);