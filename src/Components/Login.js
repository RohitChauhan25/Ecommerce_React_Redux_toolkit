import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ExportApis from '../API/ExportApis';
import { Link } from 'react-router-dom'



export default function Login() {
    const history = useNavigate();
    const [error, seterror] = useState();
    let validationSchema = Yup.object({
        username: Yup.string().required("username is required"),
        password: Yup.string().required("password is required"),
    });

    const UserLogin = (values) => {
       // console.log(values)
        ExportApis.LoginUser(values.username, values.password)
            .then((response) => {
                console.log(response.data);
                let login = response.data;
             
                if (login.token) {
                    localStorage.setItem("Token", login.token);
                    history("/")

                }
                else {
                    seterror(login.message)
                }

            })

    };

    return (
        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image">
                            <img src="img/login-icon-3048.png" alt="" style={{ height: "300px", marginTop: "40px", marginLeft: "40px" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: "",

                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        UserLogin(values)

                                    }}
                                >
                                    {({
                                        errors,
                                        touched,
                                        values,
                                        handleChange,
                                        handleBlur,
                                    }) => (
                                        <Form className="user" method='POST' >
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                    id="username" aria-describedby="emailHelp"
                                                    name="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter Email Address..." />
                                                {errors.username && touched.username ? (
                                                    <div style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}>
                                                        {errors.username}
                                                    </div>
                                                ) : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    id="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="password"
                                                    placeholder="Password" />
                                                {errors.password && touched.password ? (
                                                    <div style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}>
                                                        {errors.password}
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div style={{ color: "red" }}>{error}</div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>

                                            <button className="btn btn-primary btn-user btn-block" type='submit'>Login</button>

                                        </Form>
                                    )}
                                </Formik>
                                <hr />
                                <div className="text-center">
                                    <Link className="small" to="/Forgetpassword">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/Register">Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
 )
}
