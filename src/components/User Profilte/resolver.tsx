import { UserProfileInput } from '@/types/userProfile';
import { Resolver } from 'react-hook-form';

const resolver: Resolver<UserProfileInput> = async (values) => {
  return {
    values: values,
    errors: {
      name: !values.name
        ? {
            type: 'required',
            message: 'Name is required.',
          }
        : null,
      department: !values.department
        ? {
            type: 'required',
            message: 'Department is required.',
          }
        : null,
      batch: !values.batch
        ? {
            type: 'required',
            message: 'Batch is required.',
          }
        : null,
      course: !values.course
        ? {
            type: 'required',
            message: 'Course is required.',
          }
        : null,
      rollNo: !values.rollNo
        ? {
            type: 'required',
            message: 'Roll number is required.',
          }
        : null,
      resume: !values.resume
        ? {
            type: 'required',
            message: 'Resume is required.',
          }
        : null,
      marks10: !values.marks10
        ? {
            type: 'required',
            message: '10th marks are required.',
          }
        : null,
      marks12: !values.marks12
        ? {
            type: 'required',
            message: '12th marks are required.',
          }
        : null,
      cgpa: !values.cgpa
        ? {
            type: 'required',
            message: 'CGPA is required.',
          }
        : null,
      mobileNo: !values.mobileNo
        ? {
            type: 'required',
            message: 'Mobile number is required.',
          }
        : null,
      personalEmail: !values.personalEmail
        ? {
            type: 'required',
            message: 'Personal email is required.',
          }
        : null,
      email: !values.email
        ? {
            type: 'required',
            message: 'Email is required.',
          }
        : values.email,
    },
  };
};

export default resolver;
