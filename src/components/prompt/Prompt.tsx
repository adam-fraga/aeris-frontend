import "./Prompt.css";
import { SvgSend } from "../../assets/svg/SvgSend";

export const Prompt = () => {
  return (
    <div id='prompt'>
      <form action=''>
        <div id='chatInputWrapper'>
          <label htmlFor='chatInput' />
          <textarea
            name='chatInput'
            id='chatInput'
            cols={100}
            rows={3}
            autoFocus
          />
          {/* Change to button submit */}
          <SvgSend />
        </div>
      </form>
    </div>
  );
};
