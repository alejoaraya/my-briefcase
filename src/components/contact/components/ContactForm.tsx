export const ContactForm = () => {
  // const { values, handleSubmit, handleChange, errors, resetForm, touched } =
  //   useFormik({
  //     initialValues: {
  //       sender: "",
  //       email: "",
  //       message: "",
  //     },
  //     validate: (values) => {
  //       messageSchema.parse(values);
  //     },
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values));
  //       resetForm();
  //     },
  //   });

  return (
    // <div className='flex items-center justify-center mb-28 md:mb-36'>
    //   <form
    //     onSubmit={handleSubmit}
    //     className='flex flex-col gap-5 justify-between p-10 bg-base-200 w-full md:w-[825px] h-full md:h-[513px] rounded-lg'
    //   >
    //     <div className='flex flex-col h-full gap-5 md:gap-0'>
    //       <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
    //         <div className='flex flex-col gap-2'>
    //           <Input
    //             type='text'
    //             name='sender'
    //             value={values.sender}
    //             handleChange={handleChange}
    //             text='Full name / Company'
    //             placeholder='Enter your full name or company'
    //             className={`${
    //               (errors.sender || touched.sender) && "border-red-600 border-2"
    //             }`}
    //           />
    //         </div>

    //         <Input
    //           className={`${
    //             (errors.email || touched.email) && "border-red-600 border-2"
    //           }`}
    //           type='email'
    //           name='email'
    //           value={values.email}
    //           handleChange={handleChange}
    //           text='Email'
    //           placeholder='Enter your email address'
    //         />
    //       </div>
    //       <Textarea
    //         handleChange={handleChange}
    //         name='message'
    //         value={values.message}
    //         placeholder='Enter the message'
    //         text='Message'
    //         className={`${
    //           (errors.message || touched.message) && "border-red-600 border-2"
    //         }`}
    //       />
    //     </div>
    //     <div className='flex items-center justify-between gap-5'>
    //       <SocialMediaForm />

    //       <button
    //         type='submit'
    //         className='w-48 text-base btn btn-primary lato-bold h-14'
    //       >
    //         SUBMIT
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className='mb-32 place-items-center'>
      <fieldset className=' fieldset'>
        <div className='flex gap-3'>
          <input
            type='text'
            className=' input'
            placeholder='Enter your email'
          />
          <button className='btn btn-primary'>send</button>
        </div>
      </fieldset>
    </div>
  );
};
