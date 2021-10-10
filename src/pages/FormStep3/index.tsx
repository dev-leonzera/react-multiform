import {Link} from 'react-router-dom';
import * as Style from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state);
        } else {
            alert('Preencha os dados');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo {state.currentStep}/3 - {state.name}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos</p>

                <hr/>

                <label>
                    Qual seu email?
                    <input 
                        type="email"
                        value={state.email} 
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type="text"
                        value={state.github} 
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>

            </Style.Container>
        </Theme>
    )
}