import React, { useState } from 'react';
import TokenStyle from '../styles/TokenStyle';
import kleverLogo from '../images/logo.svg';
import wishWalletLogo from '../images/shooting-star.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Token = () => {
  const { pathname } = useLocation();
  const history = useNavigate();

  const [tokenInput, setTokenInput] = useState('');

  const handleSaveClick = (e) => {
    e.preventDefault();
    const myArr = [tokenInput]
    if (localStorage.length === 0) {
      localStorage.setItem('tokens', JSON.stringify(myArr))
    }
    const myTokens = JSON.parse(localStorage.getItem('tokens'))
  }

  return (
    <TokenStyle>
      <img width="175px" src={ kleverLogo } alt="logo-klever"/>
      <h2 className='wish-wallet-title'><img className='wish-wallet-logo' width='60px' src={ wishWalletLogo } alt="logo-wish-wallet"/>Wish Wallet</h2>
      <form>
        <div className='addToken-title-and-button'>
          <h2 className='addToken-title'>Add Token</h2>
          <button className="back-button">Voltar</button>
        </div>
        <div className='inputs-container'>
          <label htmlFor='inputToken'>
            <p className='token-p'>Token</p>
            <input onChange={(e) => setTokenInput(e.target.value)} className='inputText' type='text' name='inputToken'/>
          </label>
          <label htmlFor='balanceToken'>
            <p className='balance-p'>Balance</p>
            <input className='inputText' type='text' name='balanceToken'/>
          </label>
        </div>
          {
            pathname === '/editToken' ? <button className='remove-button'>Remove</button> : null
          }
          <button onClick={(e) => handleSaveClick(e)} className='save-button'>Save</button>
      </form>
    </TokenStyle>
  )
}

export default Token;
