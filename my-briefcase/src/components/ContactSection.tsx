export const ContactSection = () => {
  return (
    <section className='py-[120px]' id='contact'>
      <div className='flex flex-col'>
        <h1>CONTACT</h1>
        <hr />
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <form className='grid grid-flow-row grid-cols-1 gap-5 p-10 bg-base-200'>
        <div className='grid grid-cols-2 gap-5'>
          <input type='text' placeholder='Enter your full name or company' />
          <input type='text' placeholder='Enter your email address' />
        </div>
        <textarea name='' id=''></textarea>
        <button className='btn btn-primary'>SUBMIT</button>
      </form>
    </section>
  );
};
