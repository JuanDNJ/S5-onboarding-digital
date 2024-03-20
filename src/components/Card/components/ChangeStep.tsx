
const ChangeStep = ({
  children,
  action,
  btnBack,
}: {
  children: React.ReactNode;
  action: () => void;
  btnBack: boolean;
}) => {
  return (
    <button
      onClick={action}
      className={
        btnBack
          ? `btnAction back`
          : `btnAction next`
      }
    >
      {children}
    </button>
  );
};

export default ChangeStep;
