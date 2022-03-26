import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React from 'react'

import '@testing-library/jest-dom'

import App from '../App'

describe('Testing editToken page', () => {
  test('Testing elements presents on screen', () => {
    render(<App />)

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const balanceInput = screen.getByTestId('inputBalance');
    const tokenInput = screen.getByTestId('inputToken');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'KLV');
    userEvent.type(balanceInput, '100');
    userEvent.click(saveButton);

    const editButton = screen.getByTestId('editButton');

    userEvent.click(editButton);

    const kleverLogo = screen.getByTestId('klever-logo');
    const wishWalletImage = screen.getByTestId('img-wish-wallet');
    const backButton = screen.getByText('Voltar');
    const tokenTitle = screen.getByText('Token');
    const editTitle = screen.getByText('Edit Token');
    const balanceTitle = screen.getByText('Balance');
    const removeButton = screen.getByTestId('removeButton');
    const balanceInputInEditScreen = screen.getByTestId('inputBalance');
    const tokenInputInEditScreen = screen.getByTestId('inputToken');
    const saveButtonInEditScreen = screen.getByText('Save');

    expect(kleverLogo).toBeInTheDocument();
    expect(wishWalletImage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(tokenTitle).toBeInTheDocument();
    expect(balanceTitle).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(balanceInputInEditScreen).toBeInTheDocument();
    expect(tokenInputInEditScreen).toBeInTheDocument();
    expect(saveButtonInEditScreen).toBeInTheDocument();
    expect(editTitle).toBeInTheDocument();
  })
  test('Testing error message passing only inputToken', () => {
    render(<App />)
    const saveButtonInEditScreen = screen.getByText('Save');
    const tokenInputInEditScreen = screen.getByTestId('inputToken')

    userEvent.type(tokenInputInEditScreen, 'KLV')
    userEvent.click(saveButtonInEditScreen)

    const msgError = screen.getByText('Preencha os campos corretamente');
    expect(msgError).toBeInTheDocument();
  })
  test('Testing error message passing only balanceInput', () => {
    render(<App />)
    const saveButton = screen.getByText('Save');
    const balanceInput = screen.getByTestId('inputBalance')

    userEvent.type(balanceInput, '100')
    userEvent.click(saveButton)
    
    const msgError = screen.getByText('Preencha os campos corretamente');
    expect(msgError).toBeInTheDocument();
  })
  test('Passing inputs correctly edit token in localStorage', () => {
    render(<App />);
    
    const backButton = screen.getByText('Voltar');
    userEvent.click(backButton);

    const token = screen.getByText('KLV');
    const balance = screen.getByText('100');
    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();

    const editButton = screen.getByTestId('editButton');

    userEvent.click(editButton);

    const tokenInput = screen.getByTestId('inputToken');
    const balanceInput = screen.getByTestId('inputBalance');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'KLV2');
    userEvent.type(balanceInput, '102');
    userEvent.click(saveButton);

    const newToken = screen.getByText('KLV2')
    const newBalance = screen.getByText('102');

    expect(newToken).toBeInTheDocument();
    expect(newBalance).toBeInTheDocument();
  })
  test('Testing remove button', () => {
    render(<App />)
    const editButton = screen.getByTestId('editButton');

    userEvent.click(editButton);

    const removeButton = screen.getByTestId('removeButton');
    userEvent.click(removeButton);

    const emptyToken = screen.getByTestId('emptyToken');
    const emptyBalance = screen.getByTestId('emptyBalance');

    expect(emptyToken).toBeEmptyDOMElement()
    expect(emptyBalance).toBeEmptyDOMElement()
  })
  test('Back button', () => {
    render(<App />);

    const buttonAddToken = screen.getByText('Add Token');

    userEvent.click(buttonAddToken);

    const balanceInput = screen.getByTestId('inputBalance');
    const tokenInput = screen.getByTestId('inputToken');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'KLV');
    userEvent.type(balanceInput, '100');
    userEvent.click(saveButton);

    const editButton = screen.getByTestId('editButton');

    userEvent.click(editButton);

    const backButton = screen.getByText('Voltar');
    userEvent.click(backButton);

    const token = screen.getByText('KLV');
    const balance = screen.getByText('100');

    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  })
})