import * as Yup from 'yup'

declare module 'yup' {
  interface NumberSchema {
    moreThanSumOfFields(fields: string[], message?: string): this
  }
}

Yup.setLocale({
  mixed: {
    required: 'Поле обязательно для заполнения'
  },
  number: {
    min: ({ min }) => `Значение не может быть меньше ${min}`,
    max: ({ max }) => `Значение не может быть больше ${max}`
  }
})

Yup.addMethod<Yup.NumberSchema<number>>(
  Yup.number,
  'moreThanSumOfFields',
  function (fields: string[]) {
    return this.test(
      'moreThanSumOfFields',
      'Общая площадь должна быть больше суммы жилой площади и площади кухни',
      function (value) {
        const parent = this.parent as Record<string, number | undefined>
        const total = fields.reduce((sum, field) => {
          const fieldValue = parent[field] ?? 0
          return sum + fieldValue
        }, 0)
        return value !== undefined && value > total
      }
    )
  }
)

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
  floor: Yup.number().required().min(-1).max(Yup.ref('totalFloors')),
  totalFloors: Yup.number().required().min(-3).max(200),
  square: Yup.number()
    .required()
    .min(0)
    .max(400)
    .moreThanSumOfFields(['livingSquare', 'kitchenSquare']),
  livingSquare: Yup.number().required().min(0),
  kitchenSquare: Yup.number().required().min(0)
})

export default validationSchema
