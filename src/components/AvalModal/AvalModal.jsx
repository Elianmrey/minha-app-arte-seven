import AvalForm from "../../components/Formularys/AvalForm/AvalForm.jsx"

import StyleModal from "./StyleAvalModal.module.css"
import PropTypes from 'prop-types';

export default function AvalModal({ avaliate, CloseModalOnButtonClicked })
{
    return (
         <div className={StyleModal.AvalContainer}>
            <AvalForm avaliation={avaliate} CloseModalOnButtonClicked={CloseModalOnButtonClicked } />
        </div>
        );
}
 
AvalModal.propTypes = {
    avaliate: PropTypes.func.isRequired,
    CloseModalOnButtonClicked: PropTypes.func.isRequired
    
}