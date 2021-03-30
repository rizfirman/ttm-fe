import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "../path"
import {
    AdminLoginPage, 
    MainPage,
    AdminDashboard
} from '../../pages'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.MAINPAGE} component={MainPage} exact/>
                <Route path={ROUTES.ADMINLOGIN} component={AdminLoginPage} exact/>
                <Route path={ROUTES.ADMINDASHBOARD} component={AdminDashboard} />
            </Switch>
        </Router>
    )
}

export default Routes
