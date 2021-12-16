const [value, setValue] = useState('');

const Input = (props) => {

    return <input 
    type="email" 
    placeholder={props.input} 
    value={value} 
    onChange={(e) => setValue(e.target.value)}
    
    ></input>

};
  
export default Input;