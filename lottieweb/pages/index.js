import Lottie from "lottie-react";
import LoadingAnimation from '../public/98288-loading.json';

import { useEffect, useState } from "react";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //pretend its taking time to connect and retrieve data
    setTimeout(()=>{

    }, 1000)

  }, [])

  if(loading){
    return <Lottie style={{width:100, height:100}} animationData={LoadingAnimation} loop={true} />
  } 

  return (
    <div >
    Your page is loaded!
    </div>
  )
}
