import styles from '../styles/Input.module.css'

const Input = ({ children, ...rest }) => {
  return (
    <input className={styles.input} {...rest}>
      {children}
    </input>
  )
}

export default Input