function LoginInput (props) {
    const { value, placeholder, onChange } = props;

    return (
        <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    );
}

export default LoginInput;