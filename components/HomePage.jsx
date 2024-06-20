import { Dashboard } from '@/app/components/Dashboard/Dashboard';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import IndexPage from './IndexPage';
import { log } from 'next/dist/server/typescript/utils';
import User from '@/app/models/User.module';
import DBconnection from '@/app/libs/mongodb.config';

export default async function HomePage() {

  const { getUser } = getKindeServerSession();

  await DBconnection();

  const authUser = await getUser();
  if (!authUser) {
    return <IndexPage/>;
  }

  const foundUser = await User.findOne({ email: authUser.email });
  console.log('Found user ', foundUser);

  if (!foundUser) {
    await User.create({
      name: `${authUser.family_name} ${authUser.given_name}`,
      picture: authUser.picture,
      email: authUser.email,
      password: '123',
    });

    return <Dashboard/>;
  } else {
    return <Dashboard/>;
  }
}
