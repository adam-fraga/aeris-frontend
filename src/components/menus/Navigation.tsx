import { PropsWithChildren, FC } from "react";
import "./Navigation.css";
import { SvgHome } from "../../assets/svg/SvgHome";
import { SvgCommentAltEdit } from "../../assets/svg/SvgCommentAltEdit";
import { SvgCommentAltLines } from "../../assets/svg/SvgCommentAltLines";
import { SvgImage } from "../../assets/svg/SvgImage";
import { SvgBracketsCurly } from "../../assets/svg/SvgBracketsCurly";
import { SvgTool } from "../../assets/svg/SvgTool";

interface NavigationProps extends PropsWithChildren {
  rowLayout: boolean;
}

export const Navigation: FC<NavigationProps> = ({ rowLayout }) => {
  return (
    <>
      {!rowLayout && (
        <nav id='navSidebar'>
          <SvgHome />
          <SvgCommentAltEdit />
          <SvgCommentAltLines />
          <SvgImage />
          <SvgBracketsCurly />
          <SvgTool />
        </nav>
      )}

      {rowLayout && (
        <nav id='navHeader'>
          <h1 className='mainTitle'>Aeris</h1>
        </nav>
      )}
    </>
  );
};
