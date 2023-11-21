import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  value,
  required,
  onChange,
  error,
  helperText
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      type={showPassword ? 'text' : 'password'}
      value={value}
      required={required}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`toggle ${label} visibility`}
              onClick={togglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;




