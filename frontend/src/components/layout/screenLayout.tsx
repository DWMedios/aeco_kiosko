interface Props {
  children: React.ReactNode;
  imgBg: string;
}

const ScreenLayout = ({ children, imgBg }: Props) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className={`absolute inset-0 bg-[url('${imgBg}')] bg-cover bg-center`}
      />
      {children}
    </div>
  );
};

export default ScreenLayout;
