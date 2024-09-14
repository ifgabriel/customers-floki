import { ComponentProps } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.module.scss';


const Group = ({ className, ...props }: ComponentProps<'fieldset'>) => {
    return (
        <fieldset className={joinClassNames(styles.group, className)} {...props} />
    );
};


const Button = ({ children, ...props }: Omit<ComponentProps<'input'>, 'type'>) => (
    <label>
        {children}
        <input
            type="radio"
            {...props}
        />
    </label>
);


const Radio = {
    Button,
    Group,
}

export default Radio