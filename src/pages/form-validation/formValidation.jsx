import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';

const FormValidation = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    phone_number: yup
      .string()
      .matches(
        /^(\d{3}-\d{3}-\d{4})$/,
        'Phone number must be in the format 123-456-7890'
      )
      .required('Phone number is required'),
    company: yup.string().required('Company name is required'),
    preferences: yup
      .array()
      .of(yup.string())
      .min(1, 'Please select at least one preference')
      .required('Preferences are required'),
    gender: yup.string().required('Please select your gender'),
    hobbies: yup
      .array()
      .of(yup.string().required('Hobby is required'))
      .min(1, 'Please add at least one hobby')
      .max(5, 'You can add up to 5 hobbies')
      .required('Hobbies are required'),
    skills: yup
      .array()
      .of(yup.string())
      .min(1, 'Please select at least one skill')
      .required('Skills are required'),
    dateRange: yup
      .array()
      .min(2, 'Please select both start and end dates')
      .required('Date range is required'),
  });

  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'CSS', label: 'CSS' },
    { value: 'HTML', label: 'HTML' },
  ];

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e0e0e0',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#333',
    }),
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // useFieldArray for hobbies
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'hobbies', // Field name for the field array
  });

  useEffect(() => {
    append(''); // Adds one empty hobby input when the form is first loaded
  }, [append]);

  const submitFormData = (data) => {
    console.log('Form Submitted: ', data);
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      phone_number: '',
      company: '',
      preferences: [],
      gender: '',
      hobbies: [''], // Reset hobbies field to empty array
    });
    setValue('phone_number', '');
    setCalendarOpen(!calendarOpen);
  };

  const preferences = watch('preferences') || [];
  const handleCheckboxChange = (value) => {
    const currentPreferences = preferences.includes(value)
      ? preferences.filter((item) => item !== value) // Remove if unchecked
      : [...preferences, value]; // Add if checked
    setValue('preferences', currentPreferences); // Update the form state
  };

  return (
    <>
      <form
        className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
        onSubmit={handleSubmit(submitFormData)}
      >
        <div>
          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='first_name'
            {...register('first_name')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Enter your first name'
          />
          {errors.first_name && (
            <label className='text-red-500 text-sm'>
              {errors.first_name.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor='last_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='last_name'
            {...register('last_name')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Enter your last name'
          />
          {errors.last_name && (
            <label className='text-red-500 text-sm'>
              {errors.last_name.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email address<span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            {...register('email')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@flowbite.com'
          />
          {errors.email && (
            <label className='text-red-500 text-sm'>
              {errors.email.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Password<span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            id='password'
            {...register('password')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Enter your password'
          />
          {errors.password && (
            <label className='text-red-500 text-sm'>
              {errors.password.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor='confirm_password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Confirm password<span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            id='confirm_password'
            {...register('confirm_password')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Confirm your password'
          />
          {errors.confirm_password && (
            <label className='text-red-500 text-sm'>
              {errors.confirm_password.message}
            </label>
          )}
        </div>
        <div>
          <label
            htmlFor='phone_number'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Phone number<span className='text-red-500'>*</span>
          </label>
          <InputMask mask='999-999-9999' {...register('phone_number')}>
            {(inputProps) => (
              <input
                {...inputProps}
                type='tel'
                id='phone_number'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='123-456-7890'
              />
            )}
          </InputMask>
          {errors.phone_number && (
            <label className='text-red-500 text-sm'>
              {errors.phone_number.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor='company'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Company<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='company'
            {...register('company')}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Company name'
          />
          {errors.company && (
            <label className='text-red-500 text-sm'>
              {errors.company.message}
            </label>
          )}
        </div>
        <div className='mb-5'>
          <label className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'>
            Preferences<span className='text-red-500'>*</span>
          </label>
          <div className='flex gap-2'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                value='sports'
                checked={preferences.includes('sports')}
                onChange={() => handleCheckboxChange('sports')}
                className='mr-2'
              />
              Sports
            </label>
            <label className='flex items-center'>
              <input
                type='checkbox'
                value='music'
                checked={preferences.includes('music')}
                onChange={() => handleCheckboxChange('music')}
                className='mr-2'
              />
              Music
            </label>
            <label className='flex items-center'>
              <input
                type='checkbox'
                value='reading'
                checked={preferences.includes('reading')}
                onChange={() => handleCheckboxChange('reading')}
                className='mr-2'
              />
              Reading
            </label>
          </div>
          {errors.preferences && preferences.length === 0 && (
            <label className='text-red-500 text-sm'>
              {errors.preferences.message}
            </label>
          )}
        </div>
        <div className='mb-5'>
          <label className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'>
            Gender<span className='text-red-500'>*</span>
          </label>
          <div className='flex gap-2'>
            <label className='flex items-center'>
              <input
                type='radio'
                value='male'
                {...register('gender')}
                className='mr-2'
              />
              Male
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                value='female'
                {...register('gender')}
                className='mr-2'
              />
              Female
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                value='other'
                {...register('gender')}
                className='mr-2'
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <label className='text-red-500 text-sm'>
              {errors.gender.message}
            </label>
          )}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='hobbies'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Hobbies<span className='text-red-500'>*</span>
          </label>

          {fields.map((item, index) => (
            <div key={item.id} className='mb-3'>
              <div className='flex gap-2'>
                <input
                  {...register(`hobbies[${index}]`)}
                  defaultValue={item.hobby} // Set the default value for existing fields
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                  placeholder='Enter a hobby'
                />
                {index !== 0 && fields.length > 1 && (
                  <button
                    type='button'
                    onClick={() => {
                      if (fields.length > 1) {
                        remove(index); // Remove only if there's more than one input
                      }
                    }}
                    className='text-red-500'
                  >
                    Remove
                  </button>
                )}
              </div>
              {errors.hobbies?.[index] && (
                <label className='text-red-500 text-sm'>
                  {errors.hobbies[index]?.message}
                </label>
              )}
            </div>
          ))}
          <button
            type='button'
            onClick={() => append('')} // Append an empty hobby input
            className='text-blue-500 flex items-center disabled:text-gray-400'
            disabled={fields.length >= 5} // Disable button if there are already 5 hobbies
          >
            <FaPlus className='mr-2' /> Add Hobby
          </button>
          {fields.length >= 5 && (
            <p className='text-red-500 text-sm mt-2'>
              You can add up to 5 hobbies only.
            </p>
          )}
        </div>

        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Skills
          </label>
          <Controller
            name='skills'
            control={control}
            defaultValue={[]} // Initialize with an empty array
            render={({ field }) => (
              <Select
                {...field}
                options={skillOptions}
                isMulti // Enable multi-select
                styles={customStyles}
                value={skillOptions.filter((option) =>
                  field.value.includes(option.value)
                )} // Map the selected values to the corresponding options
                onChange={(selectedOptions) => {
                  // Update form state with selected values
                  field.onChange(
                    selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : []
                  );
                }}
              />
            )}
          />
          {errors.skills && (
            <label className='text-red-500 text-sm'>
              {errors.skills.message}
            </label>
          )}
        </div>

        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Date Range
          </label>
          <Controller
            name='dateRange'
            control={control}
            defaultValue={[]} // Initialize with an empty array
            render={({ field }) => (
              <>
                <div className='relative'>
                  <input
                    type='text'
                    readOnly
                    value={
                      field.value && field.value[0] && field.value[1]
                        ? `${field.value[0].toLocaleDateString()} - ${field.value[1].toLocaleDateString()}`
                        : ''
                    }
                    onClick={() => setCalendarOpen(!calendarOpen)} // Toggle calendar visibility
                    className='border p-2 rounded-md w-full'
                    placeholder='Select a date range'
                  />
                  {calendarOpen && (
                    <DatePicker
                      selected={field.value[0]} // Start date
                      onChange={(dates) => field.onChange(dates)} // Pass the selected range to react-hook-form
                      startDate={field.value[0]} // Set start date
                      endDate={field.value[1]} // Set end date
                      selectsRange // Enable range selection
                      inline
                      dateFormat='MM/dd/yyyy' // Set date format
                      className='absolute mt-2'
                    />
                  )}
                </div>
              </>
            )}
          />
          {errors.dateRange && (
            <label className='text-red-500 text-sm'>
              {errors.dateRange.message}
            </label>
          )}
        </div>

        <div className='col-span-full flex justify-end'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
