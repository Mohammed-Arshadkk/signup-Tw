import img1 from "../../assets/icons8-google-48.png"
import img2 from "../../assets/icons8-facebook-48.png"

function Header() {
  return (
    <div>
        <div className='w-screen h-screen flex justify-center space-y-6 bg-cover' style={{backgroundImage:`url(https://media.istockphoto.com/id/1146846875/photo/business-graphics-calculator-and-coffe-concept.jpg?s=612x612&w=0&k=20&c=eEeucl7eD8MPajN8JymHlFp5yzhlONryo4icoa64Xp0=)`}}>
            <div className='bg-white w-[80%] h-[88%] rounded-2xl mt-12 flex'>
                <div className='bd w-[55%] h-[100%]'>
                    <h1 className='font-bold text-4xl p-11'>Welcome</h1>
                    <p className='ml-12 -mt-8'>Let's get started with your new account</p>

                       <div className='ml-16 text-center p-5'>
                        <div className='w-[70%] h-9 border-2 border-black rounded-full'>Continue with google
                        <img className="w-4 -mt-4 ml-6" src={img1} alt="" /></div>
                        <div className='w-[70%] h-9 border-2 border-black rounded-full mt-4'>Continue with facebook 
                        <img className="w-5 mb-11 -mt-5 ml-6" src={img2} alt="" /></div><br />
                
                        <hr className='w-[70%]'/>
                        <p className='mr-32'>or</p>
                        </div>

                <div className='flex flex-col ml-24 mb-8'>
                    <p>Email*</p>
                    <button className='w-[70%] h-9 border-2 border-black rounded-full '>Enter your email</button>
                    <p>Password*</p>
                    <button className='w-[70%] h-9 border-2 border-black rounded-full '>Create your password</button>
                    <p>Repeat password*</p>
                    <button className='w-[70%] h-9 border-2 border-black rounded-full'>Repeat your password</button>
                    <button className='w-[70%] h-9 border-2 border-black rounded-full mt-4 bg-black text-white'>Sign Up</button>
                </div>
                </div>
                <img className='w-[50%]' src="https://images.unsplash.com/photo-1521495084171-3ad639e3d525?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

        </div>
      
    </div>
  )
}

export default Header
