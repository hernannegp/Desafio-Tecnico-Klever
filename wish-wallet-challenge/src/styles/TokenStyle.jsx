import styled from 'styled-components'

const TokenStyle = styled.div`
  text-align: center;
  margin-top: 50px;

  .wish-wallet-title {
    font-weight: bolder;
    font-size: xx-large;
    margin-top: 20px;
    margin-right: 350px;
  }

  .wish-wallet-logo {
    margin-right: 10px;
  }

  form {
    margin-top: 30px;
  }

  .addToken-title-and-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .addToken-title {
    margin-right: 235px;
  }

  .back-button {
    border-style: none;
    width: 110px;
    height: 35px;
    border-radius: 8%;
    background-color: gray;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
  }

  .inputText {
    width: 480px;
    height: 40px;
    border-radius: 6px;
    color: black;
  }

  label {
    margin-top: 20px;
  }

  .token-p {
    margin-right: 425px;
  }
  
  .balance-p {
    margin-right: 410px;
  }

  .save-button {
    margin-top: 20px;
    margin-left: 278px;
    background-color: #aa33b5;
    border-style: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
  }

  .remove-button {
    background-color: #920000;
    border-style: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
  }
`

export default TokenStyle;