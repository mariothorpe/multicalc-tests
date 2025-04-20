import { describe, it, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { OperandContext } from './context/OperandContext';
import Form from './Form';

function Wrapper() {
  const [operand, setOperand] = useState(0);
  return (
    <OperandContext.Provider value={{ operand, setOperand }}>
      <Form />
    </OperandContext.Provider>
  );
}

describe('Form', () => {
  it('disables button when operand has no value', async () => {
    render(<Wrapper />);
    const input = screen.getByLabelText(/calculate with/i);
    const button = screen.getByRole('button', { name: /submit/i });
    await userEvent.clear(input);
    expect(button).toBeDisabled();
  });
});
