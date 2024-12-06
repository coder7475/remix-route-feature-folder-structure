import { Outlet } from "@remix-run/react";

const ConcertLayout = () => {
  return (
    <div>
      <h1>Concert Layout</h1>
      <Outlet />
    </div>
  );
};

export default ConcertLayout;
