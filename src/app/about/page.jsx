import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 ">
            <header className="display: flex bg-slate-400 justify-end pr-20 gap-7 py-4">
              <h1 className="font-bold text-red-600 hover:text-gray-600 ">
                About pages
              </h1>

              <Link
                href="/"
                className="text-center text-blue-700 hover:text-yellow-200"
              >
                Home
              </Link>
            </header>
          </div>

           <div className="col-sm-12">

            <nav>
              <Image
                src="/assets/img/hero-bg.jpg"
                width={0}
                height={0}
                style={{ width: '100%'}} alt="hero"
              ></Image> 

              <h1 className="text-white font-bold">Welcome to About Page</h1>
              
            </nav>

          </div> 


        </div>
      </div>
    </>
  );
};
export default About;
