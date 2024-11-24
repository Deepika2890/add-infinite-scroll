import CryptoCard from '../CryptoCard'
import './index.css' 

const CryptoList = (props) => {
    const {cryptoData} = props
    return(
        <div className='container'>
                {cryptoData.map(eachCoin => 
                    <CryptoCard key={eachCoin.id} 
                    name={eachCoin.name} 
                    imageUrl = {eachCoin.image} 
                    price = {eachCoin.current_price} />
                    )
                }
        </div>
    )

}
    
   


export default CryptoList
