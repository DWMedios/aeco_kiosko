import { Layout } from "../../interfaces";

const ScreenLayout = ({ children, image }: Layout) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className={`absolute inset-0 bg-[url('${image}')] bg-cover bg-center`}
      />
      {children}
    </div>
  );
};

export default ScreenLayout;
