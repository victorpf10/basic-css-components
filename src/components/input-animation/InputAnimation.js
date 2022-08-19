import { useState, useRef, useEffect } from 'react';
import './style.css';

const InputAnimation = (props) => {
  let {inputName, value, textLabel, type, handleInput} = props;
  const inputRef = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if(document.hasFocus() && inputRef.current.contains(document.activeElement)) {
      setHasFocus(true);
    }
  },[]);

  return (
    <div className={hasFocus ? 'input-focus' : 'input-group'}>
        <span className={hasFocus || value ? 'text-focus' : 'text'}>{textLabel}</span>
        <input name={inputName} type={type}  ref={inputRef} id={inputName} onFocus={() => setHasFocus(true)} onBlur={() => setHasFocus(false)} value={value} onChange={handleInput} />
        <i></i>
    </div>
  )
}

export default InputAnimation