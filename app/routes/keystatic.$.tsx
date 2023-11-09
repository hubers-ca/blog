import { makePage } from "@keystatic/remix/ui";
import config from "../../keystatic.config";

export const loader = () => {
  console.log(process.env["KEYSTATIC_GITHUB_CLIENT_ID"]);
  return null;
};

export default makePage(config);
