import AvaForm from "../../components/Formularys/AvalForm/AvalForm.jsx"

import StyleModal from "./StyleAvalModal.module.css"
import PropTypes from 'prop-types';

export default function AvalModal({ avaliate })
{
    return (
        <div className={StyleModal.AvalContainer}>
            <h2>Avaliações: </h2>
            <AvaForm avaliation={avaliate} />
        </div>
        );
}
 
AvalModal.propTypes = {
    avaliate: PropTypes.func.isRequired
}