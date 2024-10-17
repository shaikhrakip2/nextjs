import Link from "next/link";
import '../style.css';
const TeacherLogin = () => {
  return (
    // <>
    // <h1>Teacher Login Page</h1>
    // <Link href="/login" className="text-center">Go to Login Page</Link>
    // </>


    <>
       
      
        
      <div className="container">
        <div className="row">
          <form action="">

            <div className="col-sm-12">
              <label htmlFor="name">Name :- </label>
              <input type="text" name="name" id="name" className="form-control" placeholder="Enter Your Name" required />
            </div><br/>
            <div className="col-sm-12">
                <label htmlFor="age">Age :- </label>
                <input type="text" name="age" id="age" placeholder="Enter Your Age" required />
            </div><br/>
            <div className="col-sm-12">
                <label htmlFor="email">Email :- </label>
                <input type="email" name="email"  placeholder="Enter Your Email" required/>
            </div><br />    
            <div className="col-sm-12">
                <label htmlFor="password">Password :- </label>
                <input type="password" name="password" placeholder="Enter Your Password" required />
            </div><br />

            <button type="button" className="" value="">Login</button>

          </form>

        </div>
      </div>

    </>
  );
};

export default TeacherLogin;
