import Head from 'next/head'
import { useSelector,useDispatch } from 'react-redux'
import { handelLogout,handelLogIn } from '@/store/reducers/authSlice'
import { increment,decrement } from '@/store/reducers/counter'


export default function Home() {



const dispatch =useDispatch()
const isLogIn=useSelector(state =>state.auth.isLogIn)
const count=useSelector(state =>state.counter.value)

// console.log(count);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <center >
       {isLogIn ?(
          <>
         <button 
         onClick={()=>dispatch(handelLogout())}
         style={{width:150}}>
           logout </button>
         <h5>name</h5>
         </>       
       ):(
        <button 
        onClick={()=>dispatch(handelLogIn()) }
        style={{width:150}}> login </button>
       )}
             <b> <h1> Counter </h1> </b>
                 <b> <span> {count} </span> </b>
          <button  onClick={()=>  dispatch(increment(1))} ><b>  + </b></button>
          <button  onClick={()=> dispatch(decrement(1))}><b>  - </b></button>
      </center>

    </>
  )
}
