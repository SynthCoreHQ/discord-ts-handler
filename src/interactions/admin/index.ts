import { interactions } from "../../utils";
import ban from "./ban";
import kick from "./kick";

export default interactions("Admin", [ban, kick]);
