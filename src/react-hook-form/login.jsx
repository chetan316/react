import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    loginid: yup.string().required('Required LoginId'),
    password: yup.string()
        .min(2, "Password must be atleast 2 characters long")
        .required('Password is required')
})

const LoginForm = () => {
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { isDirty, isSubmitting, touched, submitCount } = formState;

    const loginSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(loginSubmit)}>
            <input name="loginid"
                type="text"
                ref={register} />
            {errors.loginid && <p>{errors.loginid.message}</p>}

            <input name="password"
                type="password"
                ref={register} />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" value="Login" />

            {/* <h2>formState:</h2>
            <pre>{JSON.stringify(formState, null, 2)}</pre> */}
        </form>
    );
}

export default LoginForm;

// import React from "react";
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers';


// const SignupSchema = yup.object().shape({
//     firstName: yup.string().required(),
//     age: yup
//         .number()
//         .required()
//         .positive()
//         .integer(),
//     website: yup.string().url()
// });

// function LoginForm() {
//     const { register, handleSubmit, errors } = useForm({
//         resolver: yupResolver(SignupSchema)
//     });
//     const onSubmit = data => {
//         alert(JSON.stringify(data));
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label>First Name</label>
//                 <input type="text" name="firstName" ref={register} />
//                 {errors.firstName && <p>{errors.firstName.message}</p>}
//             </div>
//             <div style={{ marginBottom: 10 }}>
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" ref={register} />
//                 {errors.lastName && <p>{errors.lastName.message}</p>}
//             </div>
//             <div>
//                 <label>Age</label>
//                 <input type="text" name="age" ref={register} />
//                 {errors.age && <p>{errors.age.message}</p>}
//             </div>
//             <div>
//                 <label>Website</label>
//                 <input type="text" name="website" ref={register} />
//                 {errors.website && <p>{errors.website.message}</p>}
//             </div>
//             <input type="submit" />
//         </form>
//     );
// }

// export default LoginForm;
