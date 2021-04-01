import {Helmet} from 'react-helmet';
const AdminLoginPage = () => {
    return (
        <div className="admin-login">
            <Helmet>
                <style>
                {'body { background-image: linear-gradient(to right, #84fab0 0%, #fbc2eb 51%, #84fab0 100%); }'}
                </style>
            </Helmet>
            <div className="container">
                <div  className=" row justify-content-center">
                    <div  className="card border hover-overlay" style={{width:'20rem'}}>
                        <div className="card-header border-0" style={{background:"transparent"}}>
                            <div className="text-center">
                                <h3>LOGO</h3>
                            </div>
                        </div>
                       <div className="card-body">
                            <div class="mb-3 ">
                            <p className="form-label">Email:</p>
                            <input
                            type="email"
                            className="form-control no-border "
                            placeholder="name@example.com">
                            </input>

                            </div>
                            <div class="mb-3">
                            <label className="form-label">Password:</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            placeholder="********"
                            >
                            </input>
                            </div>
                            <p className="text-right"><a className=" text-muted" href="#">forgot password?</a></p>
                            <div class="mb-3">
                                <div className="">
                                    <a href="#" className="btn btn-primary btn-block border-0">Login</a>
                                </div>
                            </div>
                            
                       </div>
                    </div>
                </div>
        </div>
        </div>  
    )
}

export default AdminLoginPage
