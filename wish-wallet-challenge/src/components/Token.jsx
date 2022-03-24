import React, { useState } from 'react';
import TokenStyle from '../styles/TokenStyle';
import kleverLogo from '../images/logo.svg';
import wishWalletLogo from '../images/shooting-star.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Token = () => {
  const { pathname } = useLocation();
  const history = useNavigate();

  const [tokenInput, setTokenInput] = useState('');
  const [balanceInput, setBalanceInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (localStorage.getItem('tokens') === null) {
      localStorage.setItem('tokens', '[]');
    }
    if (localStorage.getItem('balances') === null) {
      localStorage.setItem('balances', '[]');
    }
    if (tokenInput.length > 0 && balanceInput.length > 0) {
      const myBalances = JSON.parse(localStorage.getItem('balances'));
      const myTokens = JSON.parse(localStorage.getItem('tokens'));
      myBalances.push(balanceInput);
      myTokens.push(tokenInput);
      localStorage.setItem('tokens', JSON.stringify(myTokens));
      localStorage.setItem('balances', JSON.stringify(myBalances));
      setIsVisible(false);
      history('/');
    }
    if (!tokenInput && !balanceInput) {
      setIsVisible(true)
    }
  }

  const handleBackButton = () => {
    history('/')
  }

  return (
    <TokenStyle>
      <img width="175px" src={ kleverLogo } alt="logo-klever"/>
      <h2 className='wish-wallet-title'><img className='wish-wallet-logo' width='60px' src={ wishWalletLogo } alt="logo-wish-wallet"/>Wish Wallet</h2>
      <form>
        <div className='addToken-title-and-button'>
          <h2 className='addToken-title'>Add Token</h2>
          <button onClick={ handleBackButton } className="back-button">Voltar</button>
        </div>
        <div className='inputs-container'>
          <label htmlFor='inputToken'>
            <p className='token-p'>Token</p>
            <input onChange={(e) => setTokenInput(e.target.value)} className='inputText' type='text' name='inputToken'/>
          </label>
          <label htmlFor='balanceToken'>
            <p className='balance-p'>Balance</p>
            <input onChange={(e) => setBalanceInput(e.target.value)} className='inputText' type='number' name='balanceToken'/>
          </label>
        </div>
          {
            pathname === '/editToken' ? <button className='remove-button'>Remove</button> : null
          }
          <button onClick={(e) => handleSaveClick(e)} className='save-button'>Save</button>
          { isVisible === true ? <h1>Preencha os campos corretamente</h1> : null }
      </form>
    </TokenStyle>
  )
}

export default Token;
