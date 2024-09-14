import { ComponentProps, forwardRef } from 'react'
import joinClassNames from '../../utils/joinClassNames'
import styles from './styles.module.scss'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type='search'
      {...props}
      className={joinClassNames(styles.input, className)}
    />
  ),
)

Input.displayName = 'Input'

export default Input
