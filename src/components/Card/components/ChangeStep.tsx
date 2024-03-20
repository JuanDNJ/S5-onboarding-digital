import cardStyle from "../css/card.module.css";
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
          ? `${cardStyle.btnAction} ${cardStyle.back}`
          : `${cardStyle.btnAction}  ${cardStyle.next}`
      }
    >
      {children}
    </button>
  );
};

export default ChangeStep;
