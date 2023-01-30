import React from "react";
import "./css/Input.css";

const Input = ({placeholder, onChange, value}) => {
	return (
		<input
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			type="text"
			className="input"/>
	);
};

export default Input;