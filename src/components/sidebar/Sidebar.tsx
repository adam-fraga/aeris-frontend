import "./Sidebar.css";
import { PropsWithChildren } from "react";
import { Logos } from "../../assets/svg/Logos";

export const Sidebar = (props: PropsWithChildren) => {
  return (
    <div id='sidebar'>
      <Logos />
      {props.children}
    </div>
  );
};
