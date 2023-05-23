interface Iprops {
  placeholder: string;
  className?: string;
  type?: string;
  icon?: string;
  styles?: string;
  onchange?: Function | any;
  onIconClick?: Function;
  value?: string;
  readonly?: boolean;
  floatingLabel?: any;
  labelname?: any;
  svgicon?: any;
  svgIconName?: any;
  name?: string;
  register?: any;
}

const Input = ({
  placeholder,
  className,
  type,
  readonly,
  floatingLabel,
  labelname,
  icon,
  styles,
  onIconClick,
  svgicon,
  svgIconName,
  name,
  register,
  onchange,

  ...rest
}: Iprops) => {
  return (
    <div
      className={`${styles} relative `}
      {...(register !== undefined && { ...register(name) })}
    >
      {icon ? (
        <i
          onClick={() => onIconClick && onIconClick()}
          className={`${icon} absolute text-lg`}
        >
          {svgicon}
        </i>
      ) : (
        ""
      )}
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        className={`input-text ${className}  text-[ #B0B0B0] text-base font-Circular-Book px-4 py-4 bg-[#F3F3F3]  text-black rounded-lg text-offwhite w-full  outline-none`}
        required
        name={name || ""}
        readOnly={readonly}
        onChange={onchange ? onchange : () => {}}
        {...rest}
      />
      {floatingLabel ? (
        <label className={`${floatingLabel} absolute text-base text-secondary`}>
          {labelname}
        </label>
      ) : (
        ""
      )}
      {svgicon ? (
        <i
          onClick={() => onIconClick && onIconClick()}
          className={`${svgicon} absolute opacity-75`}
        >
          {svgIconName}
        </i>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
