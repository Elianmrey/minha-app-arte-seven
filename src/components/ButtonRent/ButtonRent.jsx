import ButtonStyle from "./StyleButtonRent.module.css"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ButtonForRent({ whatWillRent, whatIsIt }) {

    return (
        <div className={ButtonStyle.buttonContainer}>
            <Link to={whatWillRent}> <button className={ButtonStyle.button}>{ whatIsIt }</button></Link>  
        </div>
    )
}

ButtonForRent.propTypes = {
    whatWillRent: PropTypes.string.isRequired,
    whatIsIt: PropTypes.string.isRequired,
}