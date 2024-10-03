import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { From } from 'react-hook-form'

interface CustomInput {
	form: typeof Form,
	
}

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
						<FormMessage className="form-message mt-2"/>
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput