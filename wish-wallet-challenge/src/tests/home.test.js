import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React from 'react'

import '@testing-library/jest-dom'

import App from '../App'

describe('Testing home page render', () => {
  test('Testing elements present on the screen', () => {
  render(<App />)

    const kleverLogo = screen.getByTestId('klever-logo');
    const wishWalletImage = screen.getByTestId('img-wish-wallet');
    const wishWalletTitle = screen.getByText('Wish Wallet');
    const buttonAddToken = screen.getByText('Add Token');
    const listTokens = screen.getByText('Tokens');
    const listBalances = screen.getByText('Balance')

    expect(kleverLogo).toBeInTheDocument();
    expect(wishWalletImage).toBeInTheDocument();
    expect(wishWalletTitle).toBeInTheDocument();
    expect(buttonAddToken).toBeInTheDocument();
    expect(listTokens).toBeInTheDocument();
    expect(listBalances).toBeInTheDocument();

    userEvent.click(buttonAddToken);

    expect(screen.getByText('Add Token')).toBeInTheDocument();
  })
})