import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-300 flex justify-evenly py-2 font-serif w-auto ">
      <li>
        <Link to="https://www.gcetjammu.org.in/hostelFORM.doc">
          {" "}
          Allotment form
        </Link>
      </li>
      <li>
        <Link to="https://www.gcetjammu.org.in/"> Fee Details</Link>
      </li>
    </div>
  );
}

export default Footer;
