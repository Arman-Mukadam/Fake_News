import React from 'react';

function Contact() {
  return (
    <>
      <h1 className='redline4 container my-5'>CONTACT US</h1>
      <form>
        <div className="container contactform my-5">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"><b><i>First Name *</i></b></label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your First Name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"><b><i>Last Name *</i></b></label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Last Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"><b><i> Phone Number *</i></b></label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"><b><i>Email Address *</i></b></label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b><i>Message *</i></b></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className='text-center '>
            <input type="submit" className='submit-btn' />
          </div>
        </div>
      </form>
      <div className='container-fluid footer'>
        <div className='text'>

          <div className='text-center'>Fake News is your news, entertainment, music and fashion website. We provide you with the latest breaking news and videos straight from the</div>
          <div className='text-center'>entertainment industry. Stay close to see what's new and get ready to be amazed by the best quality information available.</div>
          <div className='text-center my-3'>Contact us: contact@fake_news.co</div>
        </div>

      </div>

    </>
  )
}

export default Contact
