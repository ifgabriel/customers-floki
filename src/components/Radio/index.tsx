import { ComponentProps, forwardRef } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.module.scss';

const Group = ({ className, ...props }: ComponentProps<'fieldset'>) => {
  return (
    <fieldset className={joinClassNames(styles.group, className)} {...props} />
  );
};

const Button = forwardRef<HTMLInputElement, Omit<ComponentProps<'input'>, 'type'>>(({ children, ...props }, ref) => (
  <label>
    {children}
    <input type="radio" {...props} ref={ref} />
  </label>
))


const Radio = {
  Button,
  Group,
}

export default Radio