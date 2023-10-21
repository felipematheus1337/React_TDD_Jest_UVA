/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Form } from './Form';

test('Verifica a renderização dos elementos e o número de elementos no formulário', () => {
  const {container} = render(<Form />);
   
  const containerDiv = container.getElementsByClassName('container')[0];
  expect(containerDiv).toBeInTheDocument();

  const form = screen.getByRole('form'); 
  expect(form).toBeInTheDocument();

  expect(screen.getByText('Nome da Escola:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();

  expect(screen.getByText('Cidade:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Cidade')).toBeInTheDocument();

  const botao = container.getElementsByTagName('button')[0];

  expect(botao).toBeInTheDocument();

  const formElements = form.querySelectorAll('input, label, button');
  expect(formElements).toHaveLength(5);
 
});

test('Verifica se um alerta é renderizado após clicar no botão', () => {
  render(<Form />);
  const alertSpy = jest.spyOn(window, 'alert');

  const button = screen.getByRole('button', { name: 'Criar' });
  fireEvent.click(button);

  expect(alertSpy).toHaveBeenCalledTimes(1);
});
