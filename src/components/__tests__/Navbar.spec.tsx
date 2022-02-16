import { render, fireEvent } from '../../test-utils';
import Navbar from '../Navbar';

describe('Navbar testing', () => {
  test('Logo is visible', () => {
    const screen = render(<Navbar />);

    expect(
      screen.getByRole('img', {
        name: /origin logo/i,
      })
    ).toBeVisible();
  });
});
