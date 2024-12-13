import React from 'react'
import { Field, FieldProps } from 'formik'
import {
  FormControl,
  FormErrorMessage,
  VStack,
  Radio,
  RadioGroup
} from '@chakra-ui/react'

interface FormikWrapperProps {
  name: string
  as: React.ComponentType<any>
  options?: { label: string; value?: string }[] // Для радио-групп
  [key: string]: any
}

const FormikWrapper: React.FC<FormikWrapperProps> = ({
  name,
  as: Component,
  options,
  ...props
}) => (
  <Field name={name}>
    {({ field, meta, form }: FieldProps) => {
      const handleChange = (value: any) => form.setFieldValue(name, value)

      const isNumberInput = Component.displayName === 'NumberInput'

      return (
        <FormControl isInvalid={!!meta.error && meta.touched}>
          {isNumberInput ? (
            <Component
              {...field}
              {...props}
              value={field.value || ''}
              onChange={(value: number) => handleChange(Number(value))}
            >
              {props.children}
            </Component>
          ) : options ? (
            <RadioGroup {...field} {...props} onChange={handleChange}>
              <VStack align="flex-start">
                {options.map(({ label, value }) => (
                  <Radio key={value} value={value}>
                    {label}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
          ) : (
            <Component {...field} {...props} />
          )}
          {meta.touched && meta.error && (
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          )}
        </FormControl>
      )
    }}
  </Field>
)

export default FormikWrapper
