import { makeButtonfromSvg } from "../utils/buttonUtils";
const MessageButton = () => {
  const button = {
    svgSource: `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path d="M12.04 4C17 4 21 7.7 21 12.3c0 4.57-4 8.28-8.96 8.28-1.76 0-3.4-.47-4.8-1.28-.15-.1-.35-.1-.52-.04-1.58.68-2.8.88-3.45.93-.2 0-.34-.26-.22-.4.6-.9 1.08-1.8 1.43-2.5.1-.2.1-.46-.04-.65C3.58 15.4 3.1 13.9 3.1 12.3c0-4.6 4-8.3 8.94-8.3zm1.6 9.56v1.58c0 .17.22.25.34.13l3.43-3.34c.1-.07.1-.2 0-.27L14 8.32c-.12-.12-.33-.04-.33.13V10c0 .1-.07.18-.17.2-3.38.52-5.04 2.73-5.74 5.1-.06.2.2.34.32.2 1.3-1.42 3.05-2.1 5.4-2.13.1 0 .2.1.2.2z" class="style-scope yt-icon"></path>
  </g></svg>`,
    width: 24,
    height: 24,
    color: "none",
    borderType: "none"
  };

  return makeButtonfromSvg(button);
};

export default MessageButton;