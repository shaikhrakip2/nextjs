import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col-md-12 text-dark-700 font-bold">
            <Link href="/login/studentlogin">Student Login</Link>
          </div>
          <div className="col-md-12 text-dark-700 font-bold">
            <Link href="/login/teacherlogin">Teacher Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
