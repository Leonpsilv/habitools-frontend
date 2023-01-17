import ButtonForm from "./Button";
import InputForm from "./Input";

import styles from "./styles/Login.module.css";
import stylesInp from "./styles/Input.module.css";
import stylesBtn from "./styles/Btn.module.css";

const Login = () => (
  <div className={styles.container}>
    <h1>Faça seu Login</h1>

    <div className={styles.inputSection}>
      <label htmlFor="emailInput">Login</label>
      <InputForm
        place="Digite seu email"
        classType={stylesInp.input}
        name="emailInput"
        inputType="email"
      />
    </div>

    <div className={styles.inputSection}>
      <label htmlFor="passwordInput">Senha</label>
      <InputForm
        place="Digite sua senha"
        classType={stylesInp.input}
        name="emailInput"
        inputType="password"
      />
    </div>
    <ButtonForm
      value="Enviar"
      classType={stylesBtn.btn}
    />

    <p> Não possui cadastro? <a href="#">Clique aqui.</a></p>
  </div>
);

export default Login;