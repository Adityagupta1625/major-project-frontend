import { UserProfileInput } from '@/types/userProfile';
import * as yup from 'yup';

const resolverSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  department: yup.string().required('Department is required.'),
  batch: yup.string().required('Batch is required.'),
  course: yup.string().required('Course is required.'),
  rollNo: yup.string().required('Roll number is required.'),
  resume: yup.string().required('Resume is required.'),
  marks10: yup.string().required('10th marks are required.'),
  marks12: yup.string().required('12th marks are required.'),
  cgpa: yup.string().required('CGPA is required.'),
  mobileNo: yup.string().required('Mobile number is required.'),
  personalEmail: yup.string().required('Personal email is required.'),
  officialEmail: yup
    .string()
    .email('Invalid email format.')
    .required('Email is required.'),
});

const resolver = async (values: UserProfileInput) => {
  try {
    await resolverSchema.validate(values, { abortEarly: false });
    return { values, errors: {} };
  } catch (validationErrors: any) {
    const errors = validationErrors.inner.reduce((acc: any, err: any) => {
      acc[err.path] = { type: err.type, message: err.message };
      return acc;
    }, {});
    return { values, errors };
  }
};

export default resolver;
