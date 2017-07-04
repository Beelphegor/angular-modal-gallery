/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


export const styles:any[] = ['.ng-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,0.8);\r\n  \r\n  z-index: 9999;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n.ng-gallery-content[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 10000;\r\n  text-align: center;\r\n\r\n  > a {\r\n    &.nav-left,\r\n    &.nav-right {\r\n      color: #fff !important;\r\n      text-decoration: none;\r\n      font-size: 60px;\r\n      cursor: pointer;\r\n      outline: none;\r\n    }\r\n\r\n    &.nav-left {\r\n      position: fixed;\r\n      left: 15px;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\r\n\r\n    &.nav-right {\r\n      position: fixed;\r\n      right: 15px;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\r\n  }\r\n\r\n  > img {\r\n    height: auto;\r\n    max-height: calc(100% - 150px);\r\n    max-width: calc(100% - 100px);\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto 0 auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    -webkit-transform: translateY(-50%);\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-user-drag: none;\r\n  }\r\n\r\n  &.effect {\r\n    animation: fadeIn 0.5s;\r\n  }\r\n\r\n  > span {\r\n\r\n    &.info-text {\r\n      color: #fff;\r\n      display: inline-block;\r\n      width: 100%;\r\n      height: 20px;\r\n      font-weight: bold;\r\n      text-align: center;\r\n      position: fixed;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n\r\n    @media (max-width: 676px) {\r\n      &.info-text {\r\n        bottom: 100px;\r\n      }\r\n    }\r\n\r\n    @media (min-width: 676px) and (max-width: 752px) {\r\n      &.info-text {\r\n        padding-top: 52px;\r\n      }\r\n    }\r\n\r\n    @media (min-width: 752px) and (max-width: 804px) {\r\n      &.info-text {\r\n        padding-top: 43px;\r\n      }\r\n    }\r\n\r\n    @media (min-width: 804px) {\r\n      &.info-text {\r\n        bottom: 100px;\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  > .ng-thumbnails-wrapper {\r\n    width: 400px;\r\n    height: 70px;\r\n    text-align: center;\r\n    position: fixed;\r\n    bottom: 20px;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    overflow-x: hidden;\r\n\r\n    > .ng-thumbnails {\r\n      width: 4000px;\r\n      height: 70px;\r\n\r\n      > div {\r\n        > img {\r\n          width: auto;\r\n          height: 70px;\r\n          float: left;\r\n          margin-right: 10px;\r\n          cursor: pointer;\r\n          opacity: 0.6;\r\n\r\n          &:hover,\r\n          &.active {\r\n            transition: opacity 0.25s ease;\r\n            opacity: 1;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from { opacity: 0.3; }\r\n      to { opacity: 1; }\r\n}\r\n\r\n\r\nuiload[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n  > div {\r\n    position: relative;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes uil-ring-anim {\r\n  0% {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-moz-keyframes uil-ring-anim {\r\n  0% {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-ms-keyframes uil-ring-anim {\r\n  0% {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes uil-ring-anim {\r\n  0% {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.uil-ring-css[_ngcontent-%COMP%] {\r\n  background: none;\r\n  position: relative;\r\n  top: 0;\r\n  margin: 180px auto 0 auto;\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  > div {\r\n    position: absolute;\r\n    display: block;\r\n    width: 80px;\r\n    height: 80px;\r\n    top: 20px;\r\n    left: 20px;\r\n    border-radius: 40px;\r\n    box-shadow: 0 6px 0 0 #fff;\r\n    -ms-animation: uil-ring-anim 1s linear infinite;\r\n    -moz-animation: uil-ring-anim 1s linear infinite;\r\n    -webkit-animation: uil-ring-anim 1s linear infinite;\r\n    -o-animation: uil-ring-anim 1s linear infinite;\r\n    animation: uil-ring-anim 1s linear infinite;\r\n  }\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvanVhbmovRGVza3RvcC9wcm9qZWN0cy9hbmd1bGFyLW1vZGFsLWdhbGxlcnkvc3JjL2NvbXBvbmVudHMvbW9kYWwtZ2FsbGVyeS5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2p1YW5qL0Rlc2t0b3AvcHJvamVjdHMvYW5ndWxhci1tb2RhbC1nYWxsZXJ5L3NyYy9jb21wb25lbnRzL21vZGFsLWdhbGxlcnkuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=