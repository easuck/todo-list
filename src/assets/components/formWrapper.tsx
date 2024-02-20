import React from 'react';
import {FC} from 'react';

const FormWrapper : FC<{title: string}> = ({title}) => {
    return (
        <div>{title}</div>
    );
}

export default FormWrapper;