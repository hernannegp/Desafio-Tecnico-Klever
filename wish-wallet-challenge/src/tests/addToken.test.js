import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React from 'react'

import '@testing-library/jest-dom'

import App from '../App'

describe('Testing addToken page', () => {
  test('Testing elements present on the screen', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);
  
    const kleverLogo = screen.getByTestId('klever-logo');
    const wishWalletImage = screen.getByTestId('img-wish-wallet');
    const addTokenTitle = screen.getByText('Add Token');
    const backButton = screen.getByText('Voltar');
    const tokenTitle = screen.getByText('Token');
    const balanceTitle = screen.getByText('Balance');
    const tokenInput = screen.getByTestId('inputToken')
    const balanceInput = screen.getByTestId('inputBalance')
    const saveButton = screen.getByText('Save');

    expect(kleverLogo).toBeInTheDocument();
    expect(wishWalletImage).toBeInTheDocument();
    expect(addTokenTitle).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(tokenTitle).toBeInTheDocument();
    expect(balanceTitle).toBeInTheDocument();
    expect(tokenInput).toBeInTheDocument();
    expect(balanceInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  })
  test('Testing error message passing only inputToken', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const saveButton = screen.getByText('Save');
    const tokenInput = screen.getByTestId('inputToken')

    userEvent.type(tokenInput, 'KLV')
    userEvent.click(saveButton)

    const msgError = screen.getByText('Preencha os campos corretamente');
    expect(msgError).toBeInTheDocument();
  })
  test('Testing error message passing only balanceToken', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);
    
    const balanceInput = screen.getByTestId('inputBalance');
    const saveButton = screen.getByText('Save');
  
    userEvent.type(balanceInput, 100);
    userEvent.click(saveButton);

    const msgError = screen.getByText('Preencha os campos corretamente');
    expect(msgError).toBeInTheDocument();
  })
  test('Testing error message without passing inputToken and balanceToken', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const saveButton = screen.getByText('Save');

    userEvent.click(saveButton);

    const msgError = screen.getByText('Preencha os campos corretamente');
    expect(msgError).toBeInTheDocument();
  })
  test('Testing saveToken', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const balanceInput = screen.getByTestId('inputBalance');
    const tokenInput = screen.getByTestId('inputToken');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'KLV');
    userEvent.type(balanceInput, '100');
    userEvent.click(saveButton);

    const token = screen.getByText('KLV');
    const balance = screen.getByText('100');
    
    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  })
  test('Testing Back button', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const backButton = screen.getByText('Voltar');

    userEvent.click(backButton);
    
    const homeTokens = screen.getByText('Tokens');
    const homeBalances = screen.getByText('Balance')

    expect(homeTokens).toBeInTheDocument();
    expect(homeBalances).toBeInTheDocument();
  })
})