import {  useEffect,useRef } from "react";


export function UseOutsideClick(handler,listenCapturing=true) {
    const ref=useRef()
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("click Outside");
          handler();
        }
      }

      document.addEventListener("mousedown", handleClick, listenCapturing);

      return () => document.removeEventListener("mousedown", handleClick, listenCapturing);
    },
    [handler,listenCapturing]
  );
  //modal needs to keep track which one is open i
 return ref 
}
