import { screen, render } from "@testing-library/react";

import { Transaction } from "../components/Transaction";

const transaction = { id: 2, text: 'Зарплата', amount: 30000 };

describe('Transaction', () => {
  it('should correct render', () => {
    render(<Transaction transaction={transaction} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
