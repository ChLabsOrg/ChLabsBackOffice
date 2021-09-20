import './button.css';

interface IButtonProps{
    className: String,
    text: String,
    isLoading?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({
    className,
    text,
    onClick = () => {},
    isLoading = false,
    ...props
  }) => {
    const children = isLoading ?
        (<div className="loading-icon"></div>)
        : text;

    const button = (
      <button 
        type = "button"
        className={'custom-button ' + className}
        onClick = {onClick}
        disabled = {isLoading}>
          {children}
      </button>
    );
  
    return button;
  };
  
  export default Button;