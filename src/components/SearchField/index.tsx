import { Search } from 'lucide-react'
import { ComponentProps, forwardRef } from 'react'
import joinClassNames from '../../utils/joinClassNames'
import styles from './styles.module.scss'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <div className={styles.container}>
      <input
        ref={ref}
        type='search'
        {...props}
        className={joinClassNames(styles.input, className)}
      />
      <Search />
    </div>
  ),
)

Input.displayName = 'Input'

export default Input
