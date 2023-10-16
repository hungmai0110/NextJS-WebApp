import withAuth from "@utils/withAuth";
import AdminPage from "./AdminPage";

const Admin = () => {
  return <AdminPage />;
};

export default withAuth(Admin);
