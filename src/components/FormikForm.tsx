import React from 'react'
import { Formik, Form } from 'formik'
import { Button, Flex, VStack } from '@chakra-ui/react'
import FormikWrapper from './FormikWrapper'

const FormikForm: React.FC = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Formik
      initialValues={{
        delivery: false,
        eat: null
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form>
          <VStack spacing={4}>
            <FormikWrapper
              name="delivery"
              type="checkbox"
              options={[{ label: 'Доставка' }]}
            />
            <FormikWrapper
              name="eat"
              type="radio"
              options={[
                { value: 'burger', label: 'Бургер' },
                { value: 'pizza', label: 'Пицца' }
              ]}
            />
            <Button type="submit" colorScheme="blue">
              Отправить
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  </Flex>
)

export default FormikForm
