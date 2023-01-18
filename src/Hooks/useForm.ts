import React from "react";

const types = <any> {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido!'
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'A senha precisa conter ao menos um caracter maiúsculo, um minúsculo, um especial e pelo menos 8 caracteres ao todo'
    }
}

const useForm = () => {
    const [value, setValue] = React.useState<any>();
    const [error, setError] = React.useState<any>(null);

    // function validate (value: string | any[]) {
    //     const getsType = types[type as keyof object];
        
    //     if(type === false) return true;

    //     if(value.length === 0) {
    //         setError('O campo deve ser preenchido!');
    //         return false;
    //     } else if (getsType && !getsType.regex.test(value)) {
    //         setError(getsType.message);
    //         return false;
    //     } 
        
    //     setError(null);
    //     return true;
    // }

    function onChange ({target}: any) {
        // if(error) validate(target.value);
        setValue(target.value);
      }

    return {
        value,
        error,
        onChange,
        // validate: () => validate(value)
    }
}


export default useForm;