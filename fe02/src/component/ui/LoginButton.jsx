function LoginButton (props) {
    const { title, onClick } = props;

    return (
        <button type="submit" onClick={onClick}>
            {title}
        </button>
    );
}

export default LoginButton;