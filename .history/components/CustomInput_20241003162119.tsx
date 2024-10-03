import React from 'react'
import { FormControl, FormField, FormLabel } from './ui/form'
import { Input } from './ui/input'

const CustomInput = ({ form, name, label, placeholder}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col mt-1">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type="password"
                {...field}
              />
            </FormControl>
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput