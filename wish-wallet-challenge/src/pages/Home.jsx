import React from 'react'
import kleverLogo from '../images/logo.svg'
import wishWalletLogo from '../images/shooting-star.png'
import editLogo from '../images/edit-logo.png'
import HomeStyle from '../styles/HomeStyle'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();
  function handleClick() {
    history('/addToken');
}
  return (
    <HomeStyle>
      <div className='content'>
        <img width="175px" src={ kleverLogo } alt="logo-klever"/>
        <div className='wish-wallet-container'>
          <h2 className='wish-wallet-title'><img className='wish-wallet-logo' width='60px' src={ wishWalletLogo } alt="logo-wish-wallet"/>Wish Wallet</h2>
          <button onClick={ handleClick } className='button-wish-wallet'>Add Token</button>
        </div>
        <div className='token-and-balance'>
          <ul className='token-values'>
            <p>Tokens</p>
            <h1><img className='edit-logo' width='20px' src={editLogo} alt="edit-logo"/>KLV</h1>
            <h1><img className='edit-logo' width='20px' src={editLogo} alt="edit-logo"/>DVK</h1>
            <h1><img className='edit-logo' width='20px' src={editLogo} alt="edit-logo"/>KFI</h1>
          </ul>
          <ul>
            <p>Balance</p>
            <h1 className='value'>10,250.50</h1>
            <h1 className='value'>50,250.71</h1>
            <h1 className='value'>10</h1>
          </ul>
        </div>
      </div>
    </HomeStyle>
  )
}

export default Home
