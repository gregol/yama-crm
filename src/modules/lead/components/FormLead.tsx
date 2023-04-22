import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_LEADS_MUTATION } from '../api/graphql/mutation';
import Input from '@/modules/core/components/atom/Input/Input';

import { useLeadHook} from '../hooks/useLeadHook'
import ButtonAtom from '@/modules/core/components/atom/ButtonAtom';
import { LeadDataInterface } from '../types/types';
import Alert from '@/modules/core/components/atom/Alert';


interface ILead {
  lead?: any
}
const LeadForm = ({lead}: ILead) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LeadDataInterface>();
  const {createNewLead} = useLeadHook()

  const [success, setSuccess] = useState<boolean | null>(null);

  const onSubmit = async (data: LeadDataInterface) => {
    try {
      const newData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
          }
      await createNewLead(newData);
      setSuccess(true);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {!success && success !== null && <Alert alertType='alert-success' alertContent='Lead created Successfully' />}
    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto w-full md:max-w-2xl'>
      <div className="flex flex-wrap -mx-2">
     <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <Input
            label='Name'
            name='name'
            id='name'
            type='text'
            placeholder='Name'
            register={register}
            validation={{
            required: 'name is required',
            }}
            error={errors.name}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
       <Input
        label='Email'
        name='email'
        id='email'
        type='text'
        placeholder='Email'
        register={register}
        validation={{
        required: 'Email is required',
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address'
        }
        }}
        error={errors.email}
    />
      </div>
       <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
       <Input
            label='Phone'
            name='phone'
            id='phone'
            type='text'
            placeholder='Phone'
            register={register}
            validation={{
                required: 'Phone is required',
            }}
            error={errors.phone}
        />
        </div>
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
       <Input
            label='Company'
            name='company'
            id='company'
            type='text'
            placeholder='Company'
            register={register}
            validation={{
                required: 'Company is required',
            }}
            error={errors.phone}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
       <Input
            label='Message'
            name='message'
            id='message'
            type='text'
            placeholder='Message'
            register={register}
            validation={{
                required: 'Message is required',
            }}
            error={errors.phone}
        />
      </div>
      </div>
       <div className="flex w-full justify-center items-center mt-6">
         <ButtonAtom id='btn_submit' type="submit">Create</ButtonAtom>
      </div>
    </form>
  </>
  );
};

export default LeadForm;
