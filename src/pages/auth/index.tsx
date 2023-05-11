import styles from './styles.module.css';

export default function Auth() {
    /*
    className={`inpt ${styles.inputForm}`}
    */

    return (
        <div className={styles.background}>
            <form className={styles.form}>
                <div className={styles.logoArea}>

                    <img src="/logo.svg" alt="logo" className={styles.logoView} />
                </div>
                <h3 className='text-center font-bold text-xl mb-2'>
                    DuckJudger
                </h3>

                <div className={styles.formArea}>
                    <input className='inpt' type="email" placeholder="yourmail@mail.com" />
                </div>
                <div className={styles.formArea}>
                    <input className='inpt' type="password" placeholder="******" />
                </div>
                <div className={styles.btnArea}>

                    <button className='button primary'>
                        ENTRAR
                    </button>
                </div>
                <div className={styles.areaRegist}>
                <span>Não tem acesso ?! <b>Cadastre-se aqui</b> </span>
                </div>
                
            </form>
        </div>
    )
}