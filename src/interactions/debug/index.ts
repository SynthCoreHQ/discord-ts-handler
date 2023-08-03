import { interactions } from "../../utils";
import ping from "./ping";
import test from "./test";

export default interactions("Debug", [ping, test]);
