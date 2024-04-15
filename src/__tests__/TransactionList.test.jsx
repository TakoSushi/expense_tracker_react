import { screen, render } from "../testing-utils/customRender";

import { TransactionList } from "../components/TransactionList";

describe('TransactionList', () => {
  it('should correct render', () => {
    render(<TransactionList />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/история/i);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});
