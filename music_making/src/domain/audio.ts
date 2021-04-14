import { Optional } from "./types";

export function accessContext(): Optional<AudioContext> {
  // return window.AudioContext || window.webkitAudioContext || null;
  return window.AudioContext || null;
}
