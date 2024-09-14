import { fireEvent, render } from '@testing-library/react'
import { createRef } from 'react'

import SearchField from '.'

describe('SearchField component', () => {
  test('should render input', () => {
    render(<SearchField />)

    expect(document.getElementsByTagName('input')[0]).toBeInTheDocument()
  })

  test('should receive className props', () => {
    render(<SearchField className="className-foo" />)

    expect(
      document.getElementsByClassName('className-foo')[0],
    ).toBeInTheDocument()
  })

  test('should receive default props', () => {
    render(<SearchField id="input" />)

    expect(document.getElementById('input')).toBeInTheDocument()
  })

  test('should receive ref props', () => {
    const inputRef = createRef<HTMLInputElement>()

    render(<SearchField ref={inputRef} />)

    const input = document.getElementsByTagName('input')[0]

    expect(input).toBe(inputRef.current)
  })

  test('should call onChange when user type', () => {
    const mockOnChange = vi.fn()

    render(<SearchField onChange={mockOnChange} />)

    const input = document.getElementsByTagName('input')[0]

    fireEvent.change(input, { target: { value: 'new value' } })

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'new value',
        }),
      }),
    )
  })
})
