import BackToData from '@/components/BackToData'
import { RegistrationForm } from '@/components/RegistrationForm'
import { HiArrowLeft } from 'react-icons/hi'

const Register = () => {
    return (
        <div className="container min-h-screen">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">Registration</h3>
                <BackToData label="Back" icon={<HiArrowLeft/>} path="/data"/>
            </div>
            <RegistrationForm />
        </div>
    )
}

export default Register