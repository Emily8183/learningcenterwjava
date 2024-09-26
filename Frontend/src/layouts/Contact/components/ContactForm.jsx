import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //当用户输入新数据（value)，相应字段更新为用户输入的值
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //在不刷新页面的情况下上传（处理）表单数据

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Thank you for contacting me!");
      })
      .catch((error) => alert("Oops! There's an error."));
  };

  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Please fill out the form below to send me
                a message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                <form
                  id="contactForm"
                  name="contactform v1"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contactform v1"
                  />
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name..."
                      onChange={handleChange}
                    />
                    <label for="name">Name</label>
                    <div className="invalid-feedback">A name is required.</div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email..."
                      onChange={handleChange}
                      //   data-sb-validations="required,email"
                    />
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      //   data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      //   data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>

                  <div className="form-floating">
                    {/* TODO: update the form format */}
                    <tr className="form-control">
                      <td>Subject</td>
                      <td>
                        {/* <select value={selectedValue} onChange={handleSelectChange}> */}
                        <select name="subject" onChange={handleChange}>
                          <option value="Category 1">
                            Would like to build a project together
                          </option>
                          <option value="Category 2">
                            Discuss about Leetcode solutions
                          </option>
                          <option value="Category 3">Job opportunity</option>
                          <option value="Category 4">Others</option>
                        </select>
                      </td>
                    </tr>
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      onChange={handleChange}
                      style={{ height: "12rem" }}
                      //   data-sb-validations="required"
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      className="invalid-feedback"
                      //   data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <br />
                  {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      {/* <a href="https://startbootstrap.com/solution/contact-forms"> */}
                      https://startbootstrap.com/solution/contact-forms
                      {/* </a> */}
                    </div>
                  </div>
                  {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  {/* <!-- Submit Button--> */}
                  <button
                    className="btn btn-primary text-uppercase"
                    id="submitButton"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactForm;
