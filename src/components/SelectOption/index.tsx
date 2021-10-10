import * as Style from './styles'

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
    return(
        <Style.Container onClick={onClick}selected={selected}>
            <Style.Icon>{icon}</Style.Icon>
            <Style.Info>
                <Style.Title>{title}</Style.Title>
                <Style.Description>{description}</Style.Description>
            </Style.Info>
        </Style.Container>
    )
}