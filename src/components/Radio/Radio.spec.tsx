import { render, screen } from '@testing-library/react';
import Radio from '.';

describe('Radio Component', () => {
  describe('RadioGroup', () => {
    test('should render RadioGroup', () => {
      render(<Radio.Group />)

      expect(document.getElementsByTagName('fieldset')[0]).toBeInTheDocument()
    })

    test('should receive className props', () => {
      render(<Radio.Group className="className-foo" />)

      expect(
        document.getElementsByClassName('className-foo')[0],
      ).toBeInTheDocument()
    })

    test('should receive default props', () => {
      render(<Radio.Group id="group" />)

      expect(document.getElementById('group')).toBeInTheDocument()
    })

    test('should render children default props', () => {
      render(<Radio.Group><Radio.Button>Button</Radio.Button></Radio.Group>)

      expect(screen.getByText('Button')).toBeInTheDocument()
    })
  })

  describe('RadioButton', () => {
    test('should render RadioButton', () => {
      render(<Radio.Button />)

      const input = screen.getByRole('radio');

      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'radio');
    })

    test('should receive className props', () => {
      render(<Radio.Button className="className-foo" />)

      expect(
        document.getElementsByClassName('className-foo')[0],
      ).toBeInTheDocument()
    })

    test('should receive default props', () => {
      render(<Radio.Button id="button" />)

      expect(document.getElementById('button')).toBeInTheDocument()
    })

    test('should render children default props', () => {
      render(<Radio.Button>Button</Radio.Button>)

      expect(screen.getByText('Button')).toBeInTheDocument()
    })
  })
});
