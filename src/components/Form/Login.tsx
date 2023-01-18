import ButtonForm from "./Button";
import InputForm from "./Input";

import styles from "./styles/Form.module.css";
import stylesInp from "./styles/Input.module.css";
import stylesBtn from "./styles/Btn.module.css";
import useForm from "../../Hooks/useForm";

const Login = () => {
  const loginForm = useForm('email');
  const passwordForm = useForm('password');

  return (
    <div className={styles.containerLogin}>
      <h1>Faça seu Login</h1>
  
      <div className={styles.inputSection}>
        <label htmlFor="emailInput">Email</label>
        <InputForm
          place="Digite seu email"
          classType={stylesInp.input}
          name="emailInput"
          inputType="email"

          {...loginForm}
        />
      </div>
  
      <div className={styles.inputSection}>
        <label htmlFor="passwordInput">Senha</label>
        <InputForm
          place="Digite sua senha"
          classType={stylesInp.input}
          name="passwordInput"
          inputType="password"

          {...passwordForm}
        />
  
      </div>
  
      <div className={styles.loginActions}>
        <ButtonForm
          value="Enviar"
          classType={stylesBtn.btn}
          />
    
        <p className={styles.fpassword}><a href="#">Esqueceu a senha?</a></p>
      </div>
  
      <p> Não possui cadastro? <a href="/cadastro">Clique aqui.</a></p>
    </div>
  )
};

export default Login;