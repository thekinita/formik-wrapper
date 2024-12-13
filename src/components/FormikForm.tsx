import React from 'react'
import { Formik, Form } from 'formik'
import {
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  VStack
} from '@chakra-ui/react'
import FormikWrapper from './FormikWrapper'
import validationSchema from '../utils/validationSchema'

const FormikForm: React.FC = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Formik
      initialValues={{
        name: '',
        address: '',
        floor: 0,
        totalFloors: 0,
        square: 0,
        livingSquare: 0,
        kitchenSquare: 0
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form>
          <VStack spacing={4}>
            <FormikWrapper
              name="name"
              as={Input}
              placeholder="Название объекта"
            />
            <FormikWrapper name="address" as={Input} placeholder="Адрес" />
            <FormikWrapper name="floor" as={NumberInput}>
              <NumberInputField placeholder="Этаж" />
            </FormikWrapper>
            <FormikWrapper name="totalFloors" as={NumberInput}>
              <NumberInputField placeholder="Количество этажей в доме" />
            </FormikWrapper>
            <FormikWrapper name="square" as={NumberInput}>
              <NumberInputField placeholder="Площадь" />
            </FormikWrapper>
            <FormikWrapper name="livingSquare" as={NumberInput}>
              <NumberInputField placeholder="Жилая площадь" />
            </FormikWrapper>
            <FormikWrapper name="kitchenSquare" as={NumberInput}>
              <NumberInputField placeholder="Площадь кухни" />
            </FormikWrapper>
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
