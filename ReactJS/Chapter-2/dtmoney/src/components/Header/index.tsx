import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewModalTransaction: () => void;
}

export function Header({ onOpenNewModalTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewModalTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}