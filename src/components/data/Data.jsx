export const nav = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Services",
      path: "/services",
    },
    {
      text: "Blog",
      path: "/blog",
    },
    {
      text: "Pricing",
      path: "/pricing",
    },
    {
      text: "Contact",
      path: "/contact",
    },
] 
export const infoLists = [
    {
      icon: <i className="las la-phone"></i>,
      text: "+88012 3457 7894",
    },
    {
      icon: <i className="las la-envelope"></i>,
      text: "example@gamil.com",
    }
]
export const categories = [
    {
        text: "Fashion",
        path: "/",
    },
    {
        text: "Electronic",
        path: "/",
    },
    {
        text: "Cars",
        path: "/",
    },
    {
        text: "Garden & Home",
        path: "/",
    },
    {
        text: " Music",
        path: "/",
    },
    {
        text: "Health ",
        path: "/",
    },
    {
        text: "Pet ",
        path: "/",
    },
    {
        text: "Toys ",
        path: "/",
    },
]

import img1 from '../../assets/images/slider-img-1.png'
import img2 from '../../assets/images/slider-img-2.png'
import img3 from '../../assets/images/slider-img-3.png'

export const heros = [
  {
   subtitle: "Starting at $274", 
   title: "The best tablet Collection 2023",
   desc: "Exclusive offer -35% off this week ", 
   image: img1,
  },
  {
   subtitle: "Starting at $99", 
   title: "The best note book collection 2023",
   desc: "Exclusive offer -10% off this week ", 
   image: img2
  },
  {
   subtitle: "Starting at $8564", 
   title: "The best Mac book collection 2023",
   desc: "Exclusive offer -50% off this week ", 
   image: img3
  },
]

import cartImg1 from '../../assets/images/product-cat-1.png'
import cartImg2 from '../../assets/images/product-cat-2.png'
import cartImg3 from '../../assets/images/product-cat-3.png'
import cartImg4 from '../../assets/images/product-cat-4.png'
import cartImg5 from '../../assets/images/product-cat-5.png'

export const catItems = [
  {
    image: cartImg1,
    name: "Headphones",
    qty: "3 Product", 
  },
  {
    image: cartImg2,
    name: "Mobile Tablets ",
    qty: "2 Product", 
  },
  {
    image: cartImg3,
    name: "CPU Heat Pipes ",
    qty: "6 Product", 
  },
  {
    image: cartImg4,
    name: " Smart Watch",
    qty: "1 Product", 
  },
  {
    image: cartImg5,
    name: " Bluetooth",
    qty: "8 Product", 
  },
]
export const features = [
  {
    icon: <i className="fas fa-truck"></i>,
    title: "Free Delivery",
    desc: "Orders from all item", 
  },
  {
    icon: <i className="fas fa-dollar-sign"></i>,
    title: " Return & Refund",
    desc: " Money back guarantee", 
  },
  {
    icon: <i className="fas fa-percentage"></i>,
    title: " Member Discount",
    desc: " Onevery order over $140.00", 
  },
  {
    icon: <i className="fas fa-headset"></i>,
    title: "Support 24/7 ",
    desc: " Contact us 24 hours a day", 
  },
]

import appDownloadImg from '../../assets/images/delivery-boy.webp'

export const appDownload = {
  subtitle:  "Organic Products and Food",
  title:  "Quick Delivery to Your Home",
  desc:  "There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers. See Our latest discounted products from here and get a special discount.",
  image: appDownloadImg
}

import imageLeft from '../../assets/images/app-download-img-left.webp'
import imageRight from '../../assets/images/app-download-img-right.webp'
import appStoreImage from '../../assets/images/app-store.svg'
import appGoogle from '../../assets/images/play-store.svg'

export const appStore = {
  subtitle:  "Organic Products and Food",
  title:  "Get Your Daily Needs From Our KachaBazar Store",
  desc:  "There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers.",
  imageLeft: imageLeft,
  imageRight: imageRight,
  appStore: appStoreImage,
  appGoogle: appGoogle,
}

export const footer = [
  {
    title: "Layouts",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
  {
    title: "Sections",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "Company",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]
  