import { writable } from "svelte/store";
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("https://tickets.elegantwebcreations.com");
export const user = writable(false);
if (pb.authStore.isValid) user.set(pb.authStore.model);
