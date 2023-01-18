import stylesBtn from "./styles/Btn.module.css";
import stylesInp from "./styles/Input.module.css";
import styles from "./styles/Form.module.css";

import InputForm from "./Input";
import ButtonForm from "./Button";
import useForm from "../../Hooks/useForm";

const Register = () => {
  const nameForm = useForm('name');
  const loginForm = useForm('email');
  const passwordForm = useForm('password');

  return (
    <div className={styles.containerLogin}>
      <h1>Faça seu Cadastro</h1>

      <div className={styles.inputSection}>
        <label htmlFor="emailInput">Nome</label>
        <InputForm
          place="Digite seu nome de usuário"
          classType={stylesInp.input}
          name="nameInput"
          inputType="text"

          {...nameForm}
        />
      </div>
  
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

      <div className={styles.inputSection}>
        <label htmlFor="passwordInput">Confirme sua senha</label>
        <InputForm
          place="Repita a senha digitada acima"
          classType={stylesInp.input}
          name="confirmPasswordInput"
          inputType="password"

          {...passwordForm}
        />
  
      </div>

      <div className={styles.loginActions}>
        <ButtonForm
          value="Cadastrar"
          classType={stylesBtn.btn}
        />

        <p className={styles.fpassword}><a href="/login">voltar ao login</a></p>
      </div>  
    </div>
  )
}

export default Register;