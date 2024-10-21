import FormStyle from './StyleAvalForm.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react';



export default function ContributionForm({ avaliation }) {
    
    
    const [avaliations, setAvaliations] = useState({
        author: '', 
        note:'',
        description: '' 

    }
    );
    
    function UpdateAvaliation(event) {
        const { name, value } = event.target;
        setAvaliations(() => ({
            ...avaliations, [name]: value,
        }));
    }
    function GerateRandom(rand) { 
        return Math.ceil(Math.random() + rand * 100);
    }

    function ContributeToFeed() {
        if (avaliations.name != "" && avaliations.description != "" && avaliations.note >= 2 && avaliations.note <= 10 ) {
            avaliation({
                ...avaliations,
                date: new Date().toLocaleDateString('pt-BR'),
                likesAmount: GerateRandom(Math.random()),
                shareAmount: GerateRandom(Math.random())
            });
            setAvaliations({
                author: '',    
                note: '',
                description: ''
            });
        } else { 
            alert('Preencha todos os campos para contribuir.');
        }
}
        return (
            <div className={FormStyle.container}>
                <h2>Adicionar uma Avaliação</h2>
                
                <form className={FormStyle.form} onSubmit={(e) => {
                    e.preventDefault();
                    e.value = '';
                }} method='Post'>
                                        
                    <label htmlFor='author' className={FormStyle.label}>Avaliado por:</label>
                    <input placeholder='Identifique-se aqui' type="text" name="author" value={avaliations.author}   className={FormStyle.userName} onChange={UpdateAvaliation} />
                
                    <label htmlFor='note'>Avaliação Percebida: </label>     
                    <input type='number' placeholder='Proponha sua avaliação aqui (de 1 a 10)' name="note" min={ 2 } max ={10 } value={avaliations.note} className={FormStyle.fieldNoteValue} onChange={UpdateAvaliation} />

                    <label htmlFor='description' className={FormStyle.label}>Argumento da Nota:</label>
                    <textarea placeholder='Descreva sua contribuição aqui' name="description" value={avaliations.description} className={FormStyle.description} onChange={UpdateAvaliation} />
                    
                    <div className={FormStyle.buttonContainer}>
                        <button type='submit' onClick={ContributeToFeed} className={FormStyle.button}>Contribuir</button>
                    </div>
                </form>
            </div>
        )
}

ContributionForm.propTypes = {
    avaliation: PropTypes.func.isRequired
  
}