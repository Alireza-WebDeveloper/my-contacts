'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import CheckboxField from '@/app/libs/design/form/checkbox-field';
import InputField from '@/app/libs/design/form/input-field';
import TextareaField from '@/app/libs/design/form/textarea-field';
import Button from '@/app/libs/design/button';
import CheckboxOption from '@/app/libs/design/form/checkbox-option';
import { Address, FormData } from './types/index.types';
import { addressFields, industries } from './option';
import Title from '@/app/libs/design/title';

const AddCompany = () => {
  // !! State
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    phone: '',
    address: {
      zipCode: '',
      country: '',
      state: '',
      city: '',
      street: '',
      line1: '',
      line2: '',
    },
    shippingAddress: {
      zipCode: '',
      country: '',
      state: '',
      city: '',
      street: '',
      line1: '',
      line2: '',
    },
    isGovernmental: false,
    industries: [],
  });

  // !! Handlers Action
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (
    e: ChangeEvent<HTMLInputElement>,
    addressType: 'address' | 'shippingAddress'
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [addressType]: {
        ...formData[addressType],
        [name]: value,
      },
    });
  };

  const handleIndustryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      industries: checked
        ? [...formData.industries, value]
        : formData.industries.filter((industry) => industry !== value),
    });
  };

  // !! Submit Form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='max-w-3xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-xl flex flex-col gap-4'>
      <Title level={3}>افزودن شرکت</Title>
      <form
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        <InputField
          required
          label='نام شرکت'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
        />
        <TextareaField
          label='توضیحات'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <InputField
          label='تلفن'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {addressFields.map((field) => (
          <InputField
            key={field}
            label={`آدرس ${field}`}
            name={field}
            type='text'
            value={formData.address[field as keyof Address]}
            onChange={(e) => handleAddressChange(e, 'address')}
            required
          />
        ))}

        {addressFields.map((field) => (
          <InputField
            key={field}
            label={`آدرس حمل و نقل ${field}`}
            name={field}
            type='text'
            value={formData.shippingAddress[field as keyof Address]}
            onChange={(e) => handleAddressChange(e, 'shippingAddress')}
            required
          />
        ))}

        <CheckboxField
          label='آیا دولتی است؟'
          name='isGovernmental'
          value={formData.isGovernmental}
          onChange={(e) =>
            setFormData({ ...formData, isGovernmental: e.target.checked })
          }
          className='flex items-center space-x-2'
        />

        <div className='flex flex-col gap-3'>
          <label className='block text-sm font-medium text-gray-700'>
            صنایع
          </label>
          <div className='grid grid-cols-2 gap-4'>
            {industries.map((industry) => (
              <CheckboxOption
                key={industry}
                label={industry}
                value={industry}
                checked={formData.industries.includes(industry)}
                onChange={handleIndustryChange}
                className='flex items-center space-x-2'
              />
            ))}
          </div>
        </div>

        <Button
          className='mt-6 w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-all'
          type='submit'
        >
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default AddCompany;
