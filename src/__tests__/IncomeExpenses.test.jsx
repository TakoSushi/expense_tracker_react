import { screen, render } from "@testing-library/react";

import { IncomeExpenses } from "../components/IncomeExpenses";

describe('IncomeExpenses', () => {
  it('should correct render', () => {
    render(<IncomeExpenses />);

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByTestId('money-plus')).toBeInTheDocument();
    expect(screen.getByTestId('money-minus')).toBeInTheDocument();
  });
  
  it('should shows correct values', () => {
    render(<IncomeExpenses />);

    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Приход');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Траты');
    expect(screen.getByTestId('money-plus')).toHaveTextContent(/^\+\s{1}₽\d+.\d{2}$/);
    expect(screen.getByTestId('money-minus')).toHaveTextContent(/^-\s{1}₽\d+.\d{2}$/);
  });
});
