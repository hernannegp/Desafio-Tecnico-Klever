import React from 'react'
import kleverLogo from '../images/logo.svg'
import wishWalletLogo from '../images/shooting-star.png'
import editLogo from '../images/edit-logo.png'
import HomeStyle from '../styles/HomeStyle'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();
  const handleClick = () => {
    history('/addToken');
  }
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  const balances = JSON.parse(localStorage.getItem('balances'));
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
            { tokens === null ? <></> : tokens.map((token, index) => (
              <h1 key={index}><img onClick={ () => history(`/editToken/${index}`) } className='edit-logo' width='20px' src={editLogo} alt="edit-logo"/>{token}</h1>
            ))}
          </ul>
          <ul>
            <p>Balance</p>
            { balances === null ? <></> : balances.map((balance, index) => (
              <h1 key={index} className='value'>{balance}</h1>
            ))}
          </ul>
        </div>
      </div>
    </HomeStyle>
  )
}

export default Home
