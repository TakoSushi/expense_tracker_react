import { screen, render } from "@testing-library/react";

import { Balance } from "../components/Balance";

describe('Balance', () => {
  it('should correct render', () => {
    render(<Balance />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });
  
  it('should shows correct values', () => {
    render(<Balance />);
    expect(screen.getByRole('heading', {level: 4})).toHaveTextContent('Ваш баланс');
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/^₽\d+.\d{2}/);
  });
});
