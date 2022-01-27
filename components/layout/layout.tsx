import { ReactNode } from "react";
import MainHeader from "./main-header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
