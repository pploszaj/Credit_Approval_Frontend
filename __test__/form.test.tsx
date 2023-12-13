import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../src/pages/Form'; // Adjust the import path according to your project structure

describe('Form Component', () => {
  test('renders Form component', () => {
    render(<Form />);
    expect(screen.getByText(/Submit Form/i)).toBeInTheDocument();
  });

  test('input value change', () => {
    render(<Form />);
    const firstNameInput = screen.getByLabelText(/First Name:/i) as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  test('form submission with incomplete data shows error', async () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Submit Form/i));
    await waitFor(() => {
      expect(screen.getByText(/Please fill out all fields of the form/i)).toBeInTheDocument();
    });
  });

  test('loading state appears during form submission', async () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Submit Form/i));
    expect(screen.getByText(/Calculating.../i)).toBeInTheDocument();
  });
  
  test('last name input value change', () => {
    render(<Form />);
    const lastNameInput = screen.getByLabelText(/Last Name:/i) as HTMLInputElement;
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
});

test('gender dropdown change', () => {
    render(<Form />);
    const genderSelect = screen.getByLabelText(/Gender:/i) as HTMLInputElement;
    fireEvent.change(genderSelect, { target: { value: 'Male' } });
    expect(genderSelect.value).toBe('Male');
});


});