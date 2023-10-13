
import React from "react";
import { Form } from "./Form";
import { render } from "react-dom";

test('Renderização', () => {
   const div = document.createElement('div');
   render(<Form/>, div);

   const containerDiv = div.querySelector('.container');
   expect(containerDiv).not.toBeNull();

   expect(div.childElementCount).toBe(1);

   const form = div.querySelector('form');

   expect (form).not.toBeNull();
   expect(containerDiv?.contains(form)).toBe(true);

   expect(form?.childElementCount).toBe(5);

  expect(form).toContainElement(form!.querySelector('label[for="nome"]'));
  expect(form).toContainElement(form!.querySelector('input[name="nome"]'));
  expect(form).toContainElement(form!.querySelector('label[for="cidade"]'));
  expect(form).toContainElement(form!.querySelector('input[name="cidade"]'));
  expect(form).toContainElement(form!.querySelector('button[type="submit"]'));


   
});