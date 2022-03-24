import styled from 'styled-components'

const HomeStyle = styled.div`
  display: flex;
  justify-content: center;

  .content {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  }

  .wish-wallet-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
  }

  .wish-wallet-logo {
    margin-right: 10px;
  }

  .wish-wallet-title {
    margin-right: 140px;
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: xx-large;
  }

  .button-wish-wallet {
    border-style: none;
    border-radius: 8%;
    padding: 7px;
    width: 100px;
    background-color: #aa33b5;
  }

  .token-and-balance {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  }

  
  ul {
    display: flex;
    flex-direction: column;
  }
  
  .token-values {
    margin-right: 210px;
  }

  h1 {
    margin-top: 8px;
  }

  .edit-logo {
    margin-right: 10px;
  }

  p {
    text-align: center;
  }

  .value {
    display: flex;
    justify-content: flex-end;
  }
`

export default HomeStyle