import './index.css'

const CryptoCard = (props) => {
    const {name, imageUrl, price} = props
    return(
       <div className='card-container'>
        <img src={imageUrl} alt='avatar' className='avatar'/>
        <p className='name'>{name}</p>
        <p className='price'>{price}</p>
       </div>
    )
}

export default CryptoCard