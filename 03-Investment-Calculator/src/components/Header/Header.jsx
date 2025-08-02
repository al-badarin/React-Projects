import './Header.css';
import logo from '../../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo shhowing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
