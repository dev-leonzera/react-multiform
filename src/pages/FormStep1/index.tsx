import {useHistory} from 'react-router-dom';
import * as Style from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step2');
        } else {
            alert('Digite seu nome');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo 1/3 - {state.name}</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input 
                        type="text" 
                        autoFocus 
                        value={state.name} 
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>

            </Style.Container>
        </Theme>
    )
}