import { useForm } from 'react-hook-form';

export default function SignUpUser() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:</label>
            <input {...register('firstName', { required: true })} />
            {errors.firstName && <span>This field is required</span>}

            <label>Last Name:</label>
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <span>This field is required</span>}

            <label>User Name:</label>
            <input {...register('userName', { required: true })} />
            {errors.userName && <span>This field is required</span>}

            <label>Email:</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span>Please enter a valid email address</span>}

            <label>Password:</label>
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span>This field is required</span>}

            <label>Confirm Password:</label>
            <input type="password" {...register('confirmPassword', { required: true })} />
            {errors.confirmPassword && <span>This field is required</span>}

            <button type="submit">Submit</button>
        </form>
    );

}
