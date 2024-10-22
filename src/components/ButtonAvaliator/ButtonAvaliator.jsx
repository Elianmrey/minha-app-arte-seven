import ButtonStyle from "./StyleButtonAvaliator.module.css"
import PropTypes from "prop-types";


export default function ButtonForRent({ whatIsIt, eventClick }) {

    return (
        <div className={ButtonStyle.buttonContainer}>
            <button className={ButtonStyle.button} onClick={eventClick}>{ whatIsIt }</button>
        </div>
    )
}

ButtonForRent.propTypes = {
    whatWillRent: PropTypes.string.isRequired,
    whatIsIt: PropTypes.string.isRequired,
    eventClick: PropTypes.func.isRequired,
}