import { Link } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";

export function HomePage() {
  return (
    <Layout>
      <div className="text-center">
        HOME PAGE is being built, click on Dashboard from the Sidebar
        <hr>
        </hr>
        <Link to='/dashboard' className="m-auto flex justify-center items-center">
          <button className="bg-white text-sky-600 hover:bg-slate-100 rounded-md p-2 border-1">Dashboard</button>
        </Link>
      </div>
    </Layout>
  )
}