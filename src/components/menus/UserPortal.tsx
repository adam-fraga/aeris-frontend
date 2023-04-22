import "./UserPortal.css";
import DarkThemeButton from "../buttons/DarkThemeButton";
import SvgDashboard from "../../assets/svg/SvgDashboard";
import { SvgBill } from "../../assets/svg/SvgBill";
import { SvgUser } from "../../assets/svg/SvgUser";

export const UserPortal = () => {
  return (
    <div id='userPortal'>
      <DarkThemeButton />
      <SvgDashboard />
      <SvgBill />
      <SvgUser />
    </div>
  );
};
