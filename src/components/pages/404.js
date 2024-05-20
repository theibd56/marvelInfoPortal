import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}}>
                Page doesnt exist</p>
            <Link style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 
            'display': 'block', 'marginTop': '30px', 'textDecoration': 'underline'}} to='/'>Back to char page</Link>
        </div >
    )
}

export default Page404