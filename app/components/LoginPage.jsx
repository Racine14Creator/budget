import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"

const LoginPage = () => {
  return (
    <div>
      <h3 className="text-3xl font-extrabold">Welcome to <span>My Budget</span> App</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi sint. Ipsum, iste fugiat nulla necessitatibus architecto hic, maxime illo incidunt veritatis possimus voluptate optio dolorem? Laborum eaque doloremque tenetur.
      </p>
      <button><LoginLink>Get Started</LoginLink></button>
    </div>
  )
}

export default LoginPage
