const [value, setValue] = useState('');

const Button = (props) => {

    return <button disabled={!value}>{props.text}</button>

    {value && (
        <button style={styles.button} disabled={!value}>
            {props.text}</button>
    )}
    
  };
  
export default Button;