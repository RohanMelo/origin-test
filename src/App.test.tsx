import { App } from './App';
import { render, fireEvent } from './test-utils';

describe('App', () => {
  describe('Checking first text', () => {
    it('returns the correct text', () => {
      const screen = render(<App />);

      expect(screen.getByText(/saving goal\./i)).toBeVisible();
    });
  });
});
