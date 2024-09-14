import { ComponentProps, createContext, useContext, useState } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.module.scss';

const RadioGroupContext = createContext<{
    value: unknown
    onChange: (value: unknown) => void;
} | undefined>(undefined);


interface GroupProps<T extends string> extends Omit<ComponentProps<'div'>, 'onChange'> {
    defaultValue?: T;
    onChange?: (value: T) => void;
}

const Group = <T extends string>({ defaultValue, className, onChange, children }: GroupProps<T>) => {
    const [value, setValue] = useState<T | undefined>(defaultValue);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange?.(newValue);
    };

    return (
        <RadioGroupContext.Provider value={{ value, onChange: handleChange }}>
            <div className={joinClassNames(styles.group, className)}>{children}</div>
        </RadioGroupContext.Provider>
    );
};

interface ButtonProps<T extends string> extends Omit<ComponentProps<'input'>, 'type' | 'value'> {
    value: T
}

const Button = <T extends string>({ value, children }: ButtonProps<T>) => {
    const context = useContext(RadioGroupContext);

    if (!context) {
        throw new Error('Radio must be used within a RadioGroup');
    }

    const { value: selectedValue, onChange } = context;

    return (
        <label>
            <input
                type="radio"
                checked={selectedValue === value}
                onChange={() => onChange(value)}
            />
            {children}
        </label>
    );
};

const Radio = {
    Button,
    Group,
}

export default Radio