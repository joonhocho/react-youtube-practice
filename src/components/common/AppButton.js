import { makeButtonComponent } from "../utils/buttonUtils";
const AppButton = () => {
  const button = {
    svgSource: `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" class="style-scope yt-icon"></path>
  </g></svg>`,
    width: 40,
    height: 40,
    color: "white",
    borderType: "none"
  };

  return makeButtonComponent(button);
};

export default AppButton;
