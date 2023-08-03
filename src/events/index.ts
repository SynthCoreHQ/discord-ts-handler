import { Event } from "root/utils";
import message from "./message";
import ready from "./ready";
import interaction from "./interaction";

export default [ready, message, interaction] as Event[];
