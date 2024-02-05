import React from 'react'

const Contact = () => {
  return (
    <>
        <section>
        <div className="container my-5">
            <div className="m-lg-1 text-center my-5">
                <h3>&mdash; CONTACT US &mdash;</h3>
                <br/>
                <p>
                    Contact us here and let us know your feedback!
                    <br/>
                    We are happy to serve you.
                </p>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="img-box box-shadow">
                        <img className="img-left" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" alt="Card cap"/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                    <form id='form'>
                        <div className="box-shadow form-box p-3">
                            <div className="form-group text-left">
                                <label htmlFor="name">Name :</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name"
                                    placeholder="Enter name"/>
                            </div>

                            <div className="form-group text-left">
                                <label htmlFor="email">Email :</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                    placeholder="Enter email"/>
                            </div>

                            <div className="form-group text-left">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"
                                    placeholder="Enter message"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Contact