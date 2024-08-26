import BackToData from "@/components/BackToData";
import { RegistrationForm } from "@/components/RegistrationForm";
import { HiArrowLeft } from "react-icons/hi";

const Register = () => {
  return (
    <div className='container min-h-screen max-w-7xl w-[1000px] mx-auto'>
      <div className='flex justify-between my-4 items-center'>
        <h3 className='text-3xl font-bold'>Enregistrer un nouveau</h3>
        <BackToData
          label='Retour'
          icon={<HiArrowLeft />}
          path='/dashboard/data'
        />
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Register;
