import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const proceed = window.confirm(`you added ${data.name}?`)
        if(proceed){
            const url = `http://localhost:5000/parts`
            fetch(url,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(data)
    
            })
            .then(res => res.json())
            .then(result => console.log(result))
            window.location.reload()

        }

    };
    return (
        <div>
            <h2 className='text-center'>Added Product</h2><br/>
            <form className='text-center text-black ' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register("name")} placeholder='Porduct Name' required/><br/><br/>
      <input type="number" {...register("price")} placeholder='Price' required /><br/><br/>
      <input type="number" {...register("quantity")} placeholder='Product Quantity' required /><br/><br/>
      <input type="number" {...register("minQuantity")} placeholder='Min Quantity' required /><br/><br/>
      <input {...register("img")} placeholder='img url' required/><br/><br/>
      <textarea {...register("text")} placeholder='Product Description' required/><br/><br/>
      <button class="btn btn-primary">Submit</button>
    </form>
        </div>
    );
};

export default AddProduct;