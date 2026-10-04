import { animate } from 'https://cdn.jsdelivr.net/npm/motion@11/+esm'

let sound = document.querySelector("#sound")

document.addEventListener(
  "click",
  () => {
    sound.play()
    animate("#box", {rotate:360}, {duration:1, repeat: Infinity, ease: "linear"}),
    {once: true}
  }
)
