import React from 'react'
import { Field, FieldProps } from 'formik'
import {
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  VStack
} from '@chakra-ui/react'

interface FormikWrapperProps {
  name: string
  type: 'checkbox' | 'radio'
  options: { label: string; value?: string }[]
}

const FormikWrapper: React.FC<FormikWrapperProps> = ({
  name,
  type,
  options
}) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <FormControl>
        {type === 'radio' ? (
          <RadioGroup>
            <VStack alignItems="start">
              {options?.map((option) => (
                <Radio
                  key={option.value}
                  {...field}
                  value={option.value}
                  isChecked={field.value === option.value}
                >
                  {option.label}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        ) : (
          <Checkbox {...field} isChecked={field.value}>
            {options[0].label}
          </Checkbox>
        )}
      </FormControl>
    )}
  </Field>
)

export default FormikWrapper
