export const rule = `
        .button-ripple {
          animation: ripple 1s;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          height: 100px;
          margin-left: -50px;
          margin-top: -50px;
          right: 0;
          opacity: 0;
          position: absolute;
          width: 100px;
          z-index: -1;
        }`

export const keyframe = `
        @keyframes ripple {
          0% {
            opacity: 1;
            scale: 0;
          }
          100% {
            opacity: 0;
            scale: 10;
          }
        }`
