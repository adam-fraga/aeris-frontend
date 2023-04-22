import "./MainSectionWrapper.css";
import { FC, PropsWithChildren } from "react";

/* Component share state with: */
/* MainViewArea => Prompt */
/* SettingsWrapper => SettingsData */

export const MainSectionWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='mainSectionWrapper' className=''>
      {children}
    </div>
  );
};
