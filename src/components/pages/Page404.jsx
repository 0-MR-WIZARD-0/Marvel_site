import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"
import Image404 from "../../resources/img/404.jpg"

const Page404 = () => {
  return (
    <div>
        <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginBottom': '30px'}}>Page doesn't exist</p>
        <Link to='/' style={{'display': "block", 'textAlign': "center"}}><img alt="Image not found" src={Image404}/></Link>
    </div>
  )
}

export default Page404