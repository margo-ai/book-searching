import React, { ChangeEvent } from 'react';

import { SelectWrapper } from './selectStyles';

type Props = {
    label: string;
    value?: string;
    options: { label: string; value: string }[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ label, options, onChange }: Props) => {
    return (
        <SelectWrapper>
            <label htmlFor="select">{label}</label>
            <select id="select" onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </SelectWrapper>
    );
};
