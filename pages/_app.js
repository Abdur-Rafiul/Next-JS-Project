import '../styles/globals.css'
import'../styles/fontawesome.css'
import ScrollTopBtn from "../Components/ScrollTopBtn";
import React from "react";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {

  return (
   <>
       <NextNProgress
           color="red"
           startPosition={0.3}
           stopDelayMs={200}
           height={3}
       />
       <ScrollTopBtn/>
   <Component {...pageProps} />

   </>
  )
}

export default MyApp
