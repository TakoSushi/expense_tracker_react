import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from '../App';

describe("App", () => {
  it('should render correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('should add positive transaction', async () => {
    const user = userEvent.setup();
    render(<App />);

    const textbox = screen.getByRole('textbox');
    const submit = screen.getByTestId('submit-btn');

    await user.click(textbox);
    await user.keyboard('test');
    await user.tab();
    await user.keyboard('3000');
    await user.click(submit);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/₽33000.00/i);
  });

  it('should add negative transaction', async () => {
    const user = userEvent.setup();
    render(<App />);

    const textbox = screen.getByRole('textbox');
    const submit = screen.getByTestId('submit-btn');

    await user.click(textbox);
    await user.keyboard('test');
    await user.tab();
    await user.keyboard('-3000');
    await user.click(submit);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/₽27000.00/i);
  });

  it('should delete transaction', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('delete-btn'));

    expect(screen.queryByRole('listitem')).toBeNull();
  });
})