import ButtonForm from "./Button";
import InputForm from "./Input";

import styles from "./styles/Login.module.css";
import stylesInp from "./styles/Input.module.css";

const Login = () => (
  <div className={styles.container}>
    <h1>Faça seu Login</h1>
    <label htmlFor="emailInput">Login</label>
    <InputForm
      place="Digite seu email"
      classType={stylesInp.input}
      name="emailInput"
      inputType="email"
    />

    <label htmlFor="passwordInput">Senha</label>
    <InputForm
      place="Digite sua senha"
      classType={stylesInp.input}
      name="emailInput"
      inputType="password"
    />

    <ButtonForm
      value="Enviar"
      classType="login"
    />
  </div>
);

export default Login;