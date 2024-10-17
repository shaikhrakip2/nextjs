import Link from "next/link";
const Student = () => {
  return (
    <>
      {/* dynamic routes */}
      <h1 className="text-center font-bold pt-3">Student Page</h1>
      <ul className="text-center font-bold pt-5">
        <li>
          <Link href="/student/1">Suresh</Link>
          <br />
        </li>

        <li>
          <Link href="/student/2">Habib</Link>
          <br />
        </li>

        <li>
          <Link href="/student/3">Nikil</Link>
        </li>
      </ul>
    </>
  );
};
export default Student;
