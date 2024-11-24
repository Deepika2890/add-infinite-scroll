import Loader from 'react-loader-spinner'
import {useState, useEffect} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptoList  from './components/Cryptolist'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(()=> {
    const fetchingData = async() => {
    try{
    const apiResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&parkline=false`)
    const responseData = await apiResponse.json()
    console.log(responseData)
    setData((prev) => [...prev, ...responseData])
    setLoading(false)
   }
  catch(error){
     console.log('Error fetching data:', error)
  }
}
  fetchingData()
  }, [page])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
      setLoading(true)
      setPage(prev => prev+1)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) //ensure that the code will run only once

  return(
  <div className='whole-bg'>
    <h1 className='heading'>CryptoList</h1>
    <CryptoList cryptoData = {data}/>
    {loading &&  <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />}
  </div>
  )

}

export default App 