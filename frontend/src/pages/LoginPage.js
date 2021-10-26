import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import logo from './img/Logo.png' 
const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <main>
                <div className="container">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <a href="#"><img id="logo" src={logo}/></a>
                                <h3 className="h3">Many Task<br/>Easy Solution</h3>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 box">
                                <form className="col-md-6 col-lg-6 col-sm-12" onSubmit={loginUser}>
                                    <p className="form-title">Create New Account</p>
                                    <div className="form-group1">
                                        <input type="text" name="username" className="form-control" id="exampleInputEmail1" placeholder="Your Name"/>
                                    </div>
                                    {/* <div className="form-group2">
                                        <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Email"/>
                                    </div> */}
                                    <div className="form-group3">
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Password"/>
                                    </div>
                                    <input type="submit" className="btn btn-primary"/>
                                    <div className="form-group4 text-center">
                                        <a href="#">Already have an account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LoginPage
