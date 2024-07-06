import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        celphone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact.mail'), {
            onSuccess: () => reset()
        })
    }

    return (
        <div className="flex flex-col px-4 py-16 mx-auto max-w-7xl">
            <h1 className="pb-8 text-4xl font-bold">Contáctanos</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='relative w-full'>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            className='w-full p-4 text-lg border-gray-500 rounded-md outline-none peer border-1 valid:border-primary-500 focus:border-primary-500'
                            onChange={(e) => setData('name', e.target.value)}
                            required={true}
                        />
                        <span className='absolute p-2 text-lg text-gray-500 transition-transform duration-500 bg-white pointer-events-none top-2 left-2 peer-valid:text-primary-500 peer-valid:translate-x-2 peer-valid:-translate-y-6 peer-valid:text-sm peer-focus:text-primary-500 peer-focus:translate-x-2 peer-focus:-translate-y-6 peer-focus:text-sm'>
                            Nombre o Razón Social
                        </span>
                        {errors.name && <div className='mt-2 text-sm text-red-500'>{errors.name}</div>}
                    </div>
                    <div className='relative w-full'>
                        <input
                            type="text"
                            id="celphone"
                            value={data.celphone}
                            className='w-full p-4 text-lg border-gray-500 rounded-md outline-none peer border-1 valid:border-primary-500 focus:border-primary-500'
                            onChange={(e) => setData('celphone', e.target.value)}
                            required={true}
                        />
                        <span className='absolute p-2 text-lg text-gray-500 transition-transform duration-500 bg-white pointer-events-none top-2 left-2 peer-valid:text-primary-500 peer-valid:translate-x-2 peer-valid:-translate-y-6 peer-valid:text-sm peer-focus:text-primary-500 peer-focus:translate-x-2 peer-focus:-translate-y-6 peer-focus:text-sm'>
                            Teléfono
                        </span>
                        {errors.celphone && <div className='mt-2 text-sm text-red-500'>{errors.celphone}</div>}
                    </div>
                    <div className='relative w-full'>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            className='w-full p-4 text-lg border-gray-500 rounded-md outline-none peer border-1 valid:border-primary-500 focus:border-primary-500'
                            onChange={(e) => setData('email', e.target.value)}
                            required={true}
                        />
                        <span className='absolute p-2 text-lg text-gray-500 transition-transform duration-500 bg-white pointer-events-none top-2 left-2 peer-valid:text-primary-500 peer-valid:translate-x-2 peer-valid:-translate-y-6 peer-valid:text-sm peer-focus:text-primary-500 peer-focus:translate-x-2 peer-focus:-translate-y-6 peer-focus:text-sm'>
                            Correo Electrónico
                        </span>
                        {errors.celphone && <div className='mt-2 text-sm text-red-500'>{errors.celphone}</div>}
                    </div>
                    <div className='relative w-full'>
                        <input
                            type="text"
                            id="subject"
                            value={data.subject}
                            className='w-full p-4 text-lg border-gray-500 rounded-md outline-none peer border-1 valid:border-primary-500 focus:border-primary-500'
                            onChange={(e) => setData('subject', e.target.value)}
                            required={true}
                        />
                        <span className='absolute p-2 text-lg text-gray-500 transition-transform duration-500 bg-white pointer-events-none top-2 left-2 peer-valid:text-primary-500 peer-valid:translate-x-2 peer-valid:-translate-y-6 peer-valid:text-sm peer-focus:text-primary-500 peer-focus:translate-x-2 peer-focus:-translate-y-6 peer-focus:text-sm'>
                            Asunto
                        </span>
                        {errors.subject && <div className='mt-2 text-sm text-red-500'>{errors.subject}</div>}
                    </div>
                    <div className='relative w-full md:col-span-2'>
                        <input
                            type="text"
                            id="message"
                            value={data.message}
                            className='w-full p-4 text-lg border-gray-500 rounded-md outline-none peer border-1 valid:border-primary-500 focus:border-primary-500'
                            onChange={(e) => setData('message', e.target.value)}
                            required={true}
                        />
                        <span className='absolute p-2 text-lg text-gray-500 transition-transform duration-500 bg-white pointer-events-none top-2 left-2 peer-valid:text-primary-500 peer-valid:translate-x-2 peer-valid:-translate-y-6 peer-valid:text-sm peer-focus:text-primary-500 peer-focus:translate-x-2 peer-focus:-translate-y-6 peer-focus:text-sm'>
                            Ingresa un mensaje
                        </span>
                        {errors.message && <div className='mt-2 text-sm text-red-500'>{errors.message}</div>}
                    </div>
                </div>
                <div className='flex justify-end my-4'>
                    <button className={`px-6 py-3 text-lg text-white rounded-full bg-primary-500 ${processing && 'bg-primary-300'}`} type="submit" disabled={processing}>
                        {processing ? 'Enviando...' : 'Enviar Ahora'}
                    </button>
                </div>
            </form>
        </div>
    )
}
