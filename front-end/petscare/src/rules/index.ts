import * as yup from "yup";

export const schemaStepperData = yup
  .object({

    serviceData: yup
      .number()
      .required(),  
    professionalData: yup
      .number()
      .required(),
    dateData: yup
    .date().default(() => new Date())
  })
  .required();


