import { ReactNode } from 'react'
import { SidebarItem } from '../SidebarItem';
import * as Style from './styles'
import { useForm } from '../../contexts/FormContext';
import { Header } from './../Header/index';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {

    const { state } = useForm();

    return(
        <Style.Container>
            <Style.Area>
                <Header />

                <Style.Steps>
                    <Style.Sidebar>
                    <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </Style.Sidebar>

                    <Style.Page>
                        {children}
                    </Style.Page>
                </Style.Steps>
            </Style.Area>
        </Style.Container>
    )
}