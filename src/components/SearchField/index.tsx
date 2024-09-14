import { Search } from 'lucide-react'
import { ComponentProps, forwardRef } from 'react'

import { joinClassNames } from '../../utils'
import styles from './styles.module.scss'

const SearchField = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <div className={joinClassNames(styles.container, className)}>
      <input ref={ref} type='text' {...props} />
      <Search />
    </div >
  ),
)

SearchField.displayName = 'SearchField'

export default SearchField
