import { screen, render } from "../testing-utils/customRender";

import { AddTransaction } from "../components/AddTransaction";
import userEvent from "@testing-library/user-event";

describe('AddTransaction', () => {
  it('should correct render', () => {
    render(<AddTransaction />);

    expect(screen.getByRole('heading', {level: 3}))
      .toHaveTextContent('Добавить новую транзакцию');
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should changed text input value after typed value', async () => {
    const user = userEvent.setup();
    render(<AddTransaction />);

    const textbox = screen.getByRole('textbox');
    const spinbutton = screen.getByRole('spinbutton');

    expect(textbox).toHaveValue('');
    expect(spinbutton).toHaveValue(0);

    await user.click(textbox);
    await user.keyboard('test');
    await user.unhover(textbox);
    await user.click();
    expect(textbox).toHaveValue('test');

    await user.click(spinbutton);
    await user.keyboard('42');
    await user.unhover(spinbutton);
    await user.click();
    expect(spinbutton).toHaveValue(42);
  })
});
