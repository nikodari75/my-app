import { useForm } from 'react-hook-form';

export default function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input
                {...register('name', { required: true })}
                placeholder='Name'
            />
            {errors.name && <p>Please Enter Name</p>}

            <label>Description:</label>
            <input
                {...register('description', { required: true })}
                placeholder='Description'
            />
            {errors.description && <p>Description is required.</p>}

            <label>Category:</label>
            <input
                {...register('category', { required: true })}
                placeholder='Category'
            />
            {errors.category && <p>Category is required.</p>}

            <label>Quantity:</label>
            <input
                {...register('quantity', { pattern: /\d+/, required: true })}
                placeholder='Quantity'
            />
            {errors.quantity && <p>Please enter a number for quantity.</p>}

            <label>Price:</label>
            <input
                {...register('price', { pattern: /\d+/, required: true })}
                placeholder='Price'
            />
            {errors.price && <p>Please enter a number for price.</p>}

            <button type="submit">Submit</button>
        </form>
    );
}
