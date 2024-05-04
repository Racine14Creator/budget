import { RegistrationForm } from '@/components/RegistrationForm'
import Link from 'next/link'

const Register = () => {
    return (
        <div className="container min-h-screen">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">Registration</h3>
                <Link className='px-4 py-2 rounded-md bg-error text-white' href={'/data'}>Back</Link>
            </div>
            <RegistrationForm />
        </div>
    )
}

export default Register