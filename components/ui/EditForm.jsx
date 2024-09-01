"use client";
import "react-toastify/dist/ReactToastify.css";

const url = process.env.NEXT_PUBLIC_URL;

export default function EditKidForm({
  _id,
  Name,
  Father,
  Mother,
  Phone,
  country,
  Nounou,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Les informations sur le bébé
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Tous les champs doivent être remplis.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='Name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Les noms de l&apos;enfant
              </label>
              <div className='mt-2'>
                <input
                  id='Name'
                  name='Name'
                  placeholder="Les noms de l'enfant"
                  type='text'
                  value={formData.Name}
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='Mother'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Le nom de la maman
              </label>
              <div className='mt-2'>
                <input
                  id='Mother'
                  name='Mother'
                  type='text'
                  value={formData.Mother}
                  onChange={handleChange}
                  placeholder='Le nom de la maman'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='Father'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Le nom du père
              </label>
              <div className='mt-2'>
                <input
                  id='Father'
                  name='Father'
                  type='text'
                  value={formData.Father}
                  onChange={handleChange}
                  placeholder='Le nom du père'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Pays
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete='country-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option value=''>Choisir le pays</option>
                  <option value='Rwanda'>Rwanda</option>
                  <option value='Congo'>Congo</option>
                  <option value='Ouganda'>Ouganda</option>
                  <option value='Autre'>Autre</option>
                </select>
              </div>
            </div>

            <div className='col-span-3'>
              <label
                htmlFor='streetAddress'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Adresse
              </label>
              <div className='mt-2'>
                <input
                  id='streetAddress'
                  name='address'
                  type='text'
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='Adresse'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-2'>
              <label
                htmlFor='nounou'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Nounou
              </label>
              <div className='mt-2'>
                <input
                  id='nounou'
                  name='Nounou'
                  type='text'
                  value={formData.Nounou}
                  onChange={handleChange}
                  placeholder='Nounou'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-4'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Téléphone
              </label>
              <div className='mt-2'>
                <input
                  id='phone'
                  name='Phone'
                  type='tel'
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder='Téléphone'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}
