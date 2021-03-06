function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const audioKeyData = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Chord-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Chord-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Chord-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Shaker",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Punchy-Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Side-Stick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Snare",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { audioKeyData } = this.props;
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { className: "app-title" }, "DRUM MACHINE"),
      React.createElement("div", { id: "display" },
      React.createElement("div", { className: "drum-pads" },
      audioKeyData.map(obj => {
        return React.createElement(DrumPad, { text: obj.keyTrigger, audio: obj.url });
      })),

      React.createElement("h1", { className: "currently-playing" }, "Press a key from keyboard or click any of the above key to play a sound")),




      React.createElement("div", { className: "footer" },
      React.createElement("div", { className: "copyrights" }, "\xA9\xA0 Shubham Tiwari 2020"),
      React.createElement("div", { className: "links" },
      React.createElement("a", {
        class: "fa fa-github link-icon",
        "aria-hidden": "true",
        href: "https://github.com/STiwari1097",
        target: "_blank" }),

      React.createElement("a", {
        class: "fa fa-codepen link-icon",
        "aria-hidden": "true",
        href: "https://codepen.io/_STiwari",
        target: "_blank" }),

      React.createElement("a", { class: "fa fa-linkedin link-icon", "aria-hidden": "true" })))));




  }}


class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",










    () => {
      this.audio.current.currentTime = 0;
      const parent = this.audio.current.parentNode;
      const id = this.audio.current.id;
      const display = parent.parentNode.parentNode;
      parent.classList.add("active");
      display.querySelector("h1").innerText = id;
      this.audio.current.play();
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener("ended", () => {const parent = this.audio.current.parentNode;parent.classList.remove("active");});}

  render() {
    const { text, audio } = this.props;
    return (
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}


document.addEventListener("keydown", event => {
  const id = event.key.toUpperCase();
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    const display = parent.parentNode.parentNode;
    parent.classList.add("active");
    display.querySelector("h1").innerText = id;
    audio.play();
    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});

ReactDOM.render(
React.createElement(App, { audioKeyData: audioKeyData }),
document.getElementById("app"));