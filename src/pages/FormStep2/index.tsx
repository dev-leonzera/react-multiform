import {Link, useHistory} from 'react-router-dom';
import * as Style from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { SelectOption } from '../../components/SelectOption';
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })}
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step3');
        } else {
            alert('Digite seu nome');
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente</p>

                <hr/>

                <SelectOption 
                    title="Sou iniciante" 
                    description="Comecei ontem" 
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption 
                    title="Sou profissional" 
                    description="Fuderoso" 
                    icon="🤠"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </Style.Container>
        </Theme>
    )
}