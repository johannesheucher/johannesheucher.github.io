(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/Johannes/Workspaces/Angular/prayer-preview/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "43SA":
    /*!**********************************************************************!*\
      !*** ./src/app/prayer-edit/editable-card/editable-card.component.ts ***!
      \**********************************************************************/

    /*! exports provided: EditableCardComponent */

    /***/
    function SA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditableCardComponent", function () {
        return EditableCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditableCardComponent = function EditableCardComponent() {
        _classCallCheck(this, EditableCardComponent);
      };

      EditableCardComponent.ɵfac = function EditableCardComponent_Factory(t) {
        return new (t || EditableCardComponent)();
      };

      EditableCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditableCardComponent,
        selectors: [["app-editable-card"]],
        decls: 0,
        vars: 0,
        template: function EditableCardComponent_Template(rf, ctx) {},
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 4px 0;\n  padding: 8px;\n  border-radius: 8px;\n  color: #fff;\n  background-color: #666;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]:hover {\n  background-color: #777;\n}\n[_nghost-%COMP%]   .prayer-row.active[_ngcontent-%COMP%] {\n  background-color: #949;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .thanks[_ngcontent-%COMP%]::after {\n  content: \"Dank\";\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .prayer-row.new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty::after {\n  content: \"Neues Gebet hinzuf\xFCgen...\";\n}\n[_nghost-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border: none;\n  padding: 12px;\n  border-radius: 16px;\n  color: #fff;\n  background-color: #4070c0;\n}\n[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #4a7aca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXRhYmxlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLHNCQUFBO0FBRFI7QUFHUTtFQUNJLHNCQUFBO0FBRFo7QUFJUTtFQUNJLHNCQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhaO0FBT1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFTUTtFQUNJLGtCQUFBO0FBUFo7QUFXWTtFQUNJLG9DQUFBO0FBVGhCO0FBY0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWVRO0VBQ0kseUJBQUE7QUFiWiIsImZpbGUiOiJlZGl0YWJsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIC5wcmF5ZXItcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC50aGFua3Mge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEYW5rJztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5uZXcge1xuICAgICAgICAgICAgc3BhbjplbXB0eTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdOZXVlcyBHZWJldCBoaW56dWbDvGdlbi4uLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuXG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3MGMwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhN2FjYTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-editable-card',
            templateUrl: './editable-card.component.html',
            styleUrls: ['./editable-card.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DQVS":
    /*!******************************************************************!*\
      !*** ./src/app/prayer-view/prayer-card/prayer-card.component.ts ***!
      \******************************************************************/

    /*! exports provided: PrayerCardComponent */

    /***/
    function DQVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrayerCardComponent", function () {
        return PrayerCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../category/category.component */
      "clsX");

      var PrayerCardComponent = function PrayerCardComponent() {
        _classCallCheck(this, PrayerCardComponent);

        this.prayer = _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__["EMPTY_PRAYER"];
      };

      PrayerCardComponent.ɵfac = function PrayerCardComponent_Factory(t) {
        return new (t || PrayerCardComponent)();
      };

      PrayerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrayerCardComponent,
        selectors: [["app-prayer-card"]],
        inputs: {
          prayer: "prayer"
        },
        decls: 15,
        vars: 6,
        consts: [[1, "prayer-card"], [1, "title"], [1, "badge", 3, "category"], [1, "logo"], [1, "kind"], [1, "box"], [1, "content"]],
        template: function PrayerCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gebetskarte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-category", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "F\xFCrbitte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.prayer.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.prayer.thanks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", !ctx.prayer.thanks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prayer.content);
          }
        },
        directives: [_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]],
        styles: ["[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 870px;\n  height: 507px;\n  background: linear-gradient(253.35deg, #1F1E2D 3.3%, #05040F 84.13%);\n  position: relative;\n  padding: 0 36px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #4F4E5C;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  text-transform: uppercase;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 49px;\n  line-height: 73px;\n  letter-spacing: 0.19em;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   app-category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 160px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 31px;\n  right: 27px;\n  width: 64px;\n  height: 64px;\n  background-image: url(\"/prayer-preview/assets/logo.png\");\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  margin: 4px;\n  border: 1px solid #4F4E5C;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: #242329;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   .box.selected[_ngcontent-%COMP%] {\n  background: #B71C1C;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 28px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  margin: 0 100px 0 8px;\n  align-self: center;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 24px 0 58px 0;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 183.3%;\n  color: #E5E5E5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByYXllci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxvRUFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBQUhSO0FBS1E7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFIWjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsY0FBQTtBQU5oQjtBQVNZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFSaEI7QUFZUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBVlo7QUFZWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVmhCO0FBWWdCO0VBQ0ksbUJBQUE7QUFWcEI7QUFjWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQWRoQjtBQWtCUTtFQUNJLHFCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQWxCWiIsImZpbGUiOiJwcmF5ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAucHJheWVyLWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogODcwcHg7XG4gICAgICAgIGhlaWdodDogNTA3cHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1My4zNWRlZywgIzFGMUUyRCAzLjMlLCAjMDUwNDBGIDg0LjEzJSk7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIHBhZGRpbmc6IDAgMzZweDtcblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEY0RTVDO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ5cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDczcHg7XG5cbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xOWVtO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFNUU1RTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcC1jYXRlZ29yeSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMTYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzMXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9wcmF5ZXItcHJldmlldy9hc3NldHMvbG9nby5wbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5raW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RjRFNUM7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI0MjMyOTtcblxuICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjcxQzFDO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTAwcHggMCA4cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFNUU1RTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCA1OHB4IDA7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxODMuMyU7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjRTVFNUU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYm94LXNoYWRvdzogIzAwMDAwMDc1IDAgMCAyMHB4IDEwcHg7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Z1ZXJiaXR0ZS5wbmcnKTtcbiAgICAgICAgLy8gJi50aGFua3Mge1xuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RhbmsucG5nJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrayerCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prayer-card',
            templateUrl: './prayer-card.component.html',
            styleUrls: ['./prayer-card.component.scss']
          }]
        }], null, {
          prayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Kfgs":
    /*!**********************************************************************!*\
      !*** ./src/app/prayer-view/category-card/category-card.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CategoryCardComponent */

    /***/
    function Kfgs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryCardComponent", function () {
        return CategoryCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../category/category.component */
      "clsX");

      function CategoryCardComponent_app_category_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category", 5);
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r1);
        }
      }

      var CategoryCardComponent = function CategoryCardComponent() {
        _classCallCheck(this, CategoryCardComponent);

        this.categories = new Set();
      };

      CategoryCardComponent.ɵfac = function CategoryCardComponent_Factory(t) {
        return new (t || CategoryCardComponent)();
      };

      CategoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryCardComponent,
        selectors: [["app-category-card"]],
        inputs: {
          categories: "categories"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "prayer-card"], [1, "title"], [1, "logo"], [1, "categories"], [3, "category", 4, "ngFor", "ngForOf"], [3, "category"]],
        template: function CategoryCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gebetskarte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryCardComponent_app_category_6_Template, 1, 1, "app-category", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]],
        styles: ["[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 870px;\n  height: 507px;\n  background: linear-gradient(253.35deg, #1F1E2D 3.3%, #05040F 84.13%);\n  position: relative;\n  padding: 0 36px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #4F4E5C;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  text-transform: uppercase;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 49px;\n  line-height: 73px;\n  letter-spacing: 0.19em;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   app-category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 160px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 31px;\n  right: 27px;\n  width: 64px;\n  height: 64px;\n  background-image: url(\"/prayer-preview/assets/logo.png\");\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  margin: 4px;\n  border: 1px solid #4F4E5C;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: #242329;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   .box.selected[_ngcontent-%COMP%] {\n  background: #B71C1C;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 28px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  margin: 0 100px 0 8px;\n  align-self: center;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 24px 0 58px 0;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 183.3%;\n  color: #E5E5E5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByYXllci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxvRUFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBQUhSO0FBS1E7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFIWjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsY0FBQTtBQU5oQjtBQVNZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFSaEI7QUFZUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBVlo7QUFZWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVmhCO0FBWWdCO0VBQ0ksbUJBQUE7QUFWcEI7QUFjWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQWRoQjtBQWtCUTtFQUNJLHFCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQWxCWiIsImZpbGUiOiJwcmF5ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAucHJheWVyLWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogODcwcHg7XG4gICAgICAgIGhlaWdodDogNTA3cHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1My4zNWRlZywgIzFGMUUyRCAzLjMlLCAjMDUwNDBGIDg0LjEzJSk7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIHBhZGRpbmc6IDAgMzZweDtcblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEY0RTVDO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ5cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDczcHg7XG5cbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xOWVtO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFNUU1RTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcC1jYXRlZ29yeSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMTYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzMXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9wcmF5ZXItcHJldmlldy9hc3NldHMvbG9nby5wbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5raW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RjRFNUM7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI0MjMyOTtcblxuICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjcxQzFDO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTAwcHggMCA4cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFNUU1RTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCA1OHB4IDA7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxODMuMyU7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjRTVFNUU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYm94LXNoYWRvdzogIzAwMDAwMDc1IDAgMCAyMHB4IDEwcHg7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Z1ZXJiaXR0ZS5wbmcnKTtcbiAgICAgICAgLy8gJi50aGFua3Mge1xuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RhbmsucG5nJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59Il19 */", "[_nghost-%COMP%]   .categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 54px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoiY2F0ZWdvcnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY2F0ZWdvcmllcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZy10b3A6IDU0cHg7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-category-card',
            templateUrl: './category-card.component.html',
            styleUrls: ['../prayer-card/prayer-card.component.scss', './category-card.component.scss']
          }]
        }], null, {
          categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "NzyP":
    /*!************************************************************!*\
      !*** ./src/app/prayer-control/prayer-control.component.ts ***!
      \************************************************************/

    /*! exports provided: PrayerControlComponent */

    /***/
    function NzyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrayerControlComponent", function () {
        return PrayerControlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _swipe_card_swipe_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./swipe-card/swipe-card.component */
      "e+Na");

      function PrayerControlComponent_app_swipe_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-swipe-card", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prayer", ctx_r0.prayer);
        }
      }

      function PrayerControlComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kategorien");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PrayerControlComponent = /*#__PURE__*/function () {
        function PrayerControlComponent(prayerIO) {
          var _this = this;

          _classCallCheck(this, PrayerControlComponent);

          this.prayerIO = prayerIO;
          this.prayer = undefined;
          this.subscription = this.prayerIO.activePrayer$.subscribe({
            next: function next(prayer) {
              return _this.prayer = prayer;
            }
          });
        }

        _createClass(PrayerControlComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "suppressDblClick",
          value: function suppressDblClick(event) {
            console.log('dblclick on button');
            event.preventDefault();
          }
        }]);

        return PrayerControlComponent;
      }();

      PrayerControlComponent.ɵfac = function PrayerControlComponent_Factory(t) {
        return new (t || PrayerControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__["PrayerIOService"]));
      };

      PrayerControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrayerControlComponent,
        selectors: [["app-prayer-control"]],
        decls: 8,
        vars: 2,
        consts: [[3, "prayer", 4, "ngIf"], ["class", "categories", 4, "ngIf"], [1, "button", 3, "click", "dblclick"], [3, "prayer"], [1, "categories"]],
        template: function PrayerControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrayerControlComponent_app_swipe_card_1_Template, 1, 1, "app-swipe-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrayerControlComponent_div_2_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerControlComponent_Template_button_click_4_listener() {
              return ctx.prayerIO.previous();
            })("dblclick", function PrayerControlComponent_Template_button_dblclick_4_listener($event) {
              return ctx.suppressDblClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerControlComponent_Template_button_click_6_listener() {
              return ctx.prayerIO.next();
            })("dblclick", function PrayerControlComponent_Template_button_dblclick_6_listener($event) {
              return ctx.suppressDblClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prayer);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _swipe_card_swipe_card_component__WEBPACK_IMPORTED_MODULE_3__["SwipeCardComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #efefef;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 16px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 0 solid #ffffff;\n  padding: 12px 20px;\n  margin: auto 0;\n  border-radius: 6px;\n  color: #efefef;\n  background-color: #222;\n  opacity: 0.8;\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:first-child {\n  margin-left: 4px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByYXllci1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURaO0FBS0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhSO0FBS1E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUdBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFQWjtBQVNZO0VBQ0ksZ0JBQUE7QUFQaEI7QUFVWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFSaEIiLCJmaWxlIjoicHJheWVyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICdzY3NzL2NvbnN0JztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAgICAgLmNhdGVnb3JpZXMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDAgc29saWQgI2ZmZmZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIFxuICAgICAgICAgICAgY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuXG4gICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrayerControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prayer-control',
            templateUrl: './prayer-control.component.html',
            styleUrls: ['./prayer-control.component.scss']
          }]
        }], function () {
          return [{
            type: _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__["PrayerIOService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "keydown",
          value: function keydown(event) {
            if (event.key === '1' && event.ctrlKey) {
              console.log('switching to /view');
              this.router.navigateByUrl('view');
            } else if (event.key === '2' && event.ctrlKey) {
              console.log('switching to /control');
              this.router.navigateByUrl('control');
            } else if (event.key === '3' && event.ctrlKey) {
              console.log('switching to /edit');
              this.router.navigateByUrl('edit');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) {
              return ctx.keydown($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _prayer_view_prayer_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./prayer-view/prayer-view.component */
      "fJEj");
      /* harmony import */


      var _prayer_control_prayer_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./prayer-control/prayer-control.component */
      "NzyP");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./category/category.component */
      "clsX");
      /* harmony import */


      var _prayer_view_prayer_card_prayer_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./prayer-view/prayer-card/prayer-card.component */
      "DQVS");
      /* harmony import */


      var _prayer_view_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./prayer-view/category-card/category-card.component */
      "Kfgs");
      /* harmony import */


      var _prayer_control_swipe_card_swipe_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./prayer-control/swipe-card/swipe-card.component */
      "e+Na");
      /* harmony import */


      var _prayer_edit_prayer_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./prayer-edit/prayer-edit.component */
      "fdJT");
      /* harmony import */


      var _prayer_edit_editable_card_editable_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./prayer-edit/editable-card/editable-card.component */
      "43SA");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_5__["PrayerIOService"]],
        imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _prayer_view_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_10__["CategoryCardComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], _prayer_view_prayer_card_prayer_card_component__WEBPACK_IMPORTED_MODULE_9__["PrayerCardComponent"], _prayer_view_prayer_view_component__WEBPACK_IMPORTED_MODULE_6__["PrayerViewComponent"], _prayer_control_prayer_control_component__WEBPACK_IMPORTED_MODULE_7__["PrayerControlComponent"], _prayer_edit_prayer_edit_component__WEBPACK_IMPORTED_MODULE_12__["PrayerEditComponent"], _prayer_control_swipe_card_swipe_card_component__WEBPACK_IMPORTED_MODULE_11__["SwipeCardComponent"], _prayer_edit_editable_card_editable_card_component__WEBPACK_IMPORTED_MODULE_13__["EditableCardComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _prayer_view_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_10__["CategoryCardComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], _prayer_view_prayer_card_prayer_card_component__WEBPACK_IMPORTED_MODULE_9__["PrayerCardComponent"], _prayer_view_prayer_view_component__WEBPACK_IMPORTED_MODULE_6__["PrayerViewComponent"], _prayer_control_prayer_control_component__WEBPACK_IMPORTED_MODULE_7__["PrayerControlComponent"], _prayer_edit_prayer_edit_component__WEBPACK_IMPORTED_MODULE_12__["PrayerEditComponent"], _prayer_control_swipe_card_swipe_card_component__WEBPACK_IMPORTED_MODULE_11__["SwipeCardComponent"], _prayer_edit_editable_card_editable_card_component__WEBPACK_IMPORTED_MODULE_13__["EditableCardComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_5__["PrayerIOService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "clsX":
    /*!************************************************!*\
      !*** ./src/app/category/category.component.ts ***!
      \************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function clsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent() {
          _classCallCheck(this, CategoryComponent);

          this.category = '';
        }

        _createClass(CategoryComponent, [{
          key: "categoryAttr",
          get: function get() {
            return this.category;
          }
        }]);

        return CategoryComponent;
      }();

      CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
        return new (t || CategoryComponent)();
      };

      CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryComponent,
        selectors: [["app-category"]],
        hostVars: 1,
        hostBindings: function CategoryComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("category", ctx.categoryAttr);
          }
        },
        inputs: {
          category: "category"
        },
        decls: 2,
        vars: 1,
        template: function CategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin: 16px 16px 0 0;\n  width: 168px;\n  height: 58px;\n  padding: 2px 4px;\n  border-radius: 6px;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);\n}\n.badge[_nghost-%COMP%] {\n  margin: 0;\n  width: 128px;\n  height: 48px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.badge[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 100%;\n}\n[category=Versorgung][_nghost-%COMP%] {\n  background: #E57373;\n}\n[category=Heilung][_nghost-%COMP%] {\n  background: #F06292;\n}\n[category=Gesundheit][_nghost-%COMP%] {\n  background: #BA68C8;\n}\n[category=Erweckung][_nghost-%COMP%] {\n  background: #9575CD;\n}\n[category=Kirche][_nghost-%COMP%] {\n  background: #7986CB;\n}\n[category=\"Stadt & Land\"][_nghost-%COMP%] {\n  background: #4DD0E1;\n}\n[category=\"Familie & Freunde\"][_nghost-%COMP%] {\n  background: #81C784;\n}\n[category=Weisheit][_nghost-%COMP%] {\n  background: #DCE775;\n}\n[category=Freisetzung][_nghost-%COMP%] {\n  background: #FFF176;\n}\n[category=\"Schule & Ausbildung\"][_nghost-%COMP%] {\n  background: #FFB74D;\n}\n[category=Trost][_nghost-%COMP%] {\n  background: #FF8A65;\n}\n[category=Job][_nghost-%COMP%] {\n  background: #90A4Ae;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  align-self: center;\n  text-align: center;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUVBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFESjtBQUdJO0VBQ0ksU0FBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSwwQkFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFIWjtBQU9JO0VBQXNDLG1CQUFBO0FBSjFDO0FBS0k7RUFBc0MsbUJBQUE7QUFGMUM7QUFHSTtFQUFzQyxtQkFBQTtBQUExQztBQUNJO0VBQXNDLG1CQUFBO0FBRTFDO0FBREk7RUFBc0MsbUJBQUE7QUFJMUM7QUFISTtFQUFzQyxtQkFBQTtBQU0xQztBQUxJO0VBQXNDLG1CQUFBO0FBUTFDO0FBUEk7RUFBc0MsbUJBQUE7QUFVMUM7QUFUSTtFQUFzQyxtQkFBQTtBQVkxQztBQVhJO0VBQXNDLG1CQUFBO0FBYzFDO0FBYkk7RUFBc0MsbUJBQUE7QUFnQjFDO0FBZkk7RUFBc0MsbUJBQUE7QUFrQjFDO0FBaEJJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQWdCUiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWFyZ2luOiAxNnB4IDE2cHggMCAwO1xuXG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIGhlaWdodDogNThweDtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgICAmLmJhZGdlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJltjYXRlZ29yeT1cIlZlcnNvcmd1bmdcIl0gICAgICAgICAgICB7IGJhY2tncm91bmQ6ICNFNTczNzM7IH1cbiAgICAmW2NhdGVnb3J5PVwiSGVpbHVuZ1wiXSAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZDogI0YwNjI5MjsgfVxuICAgICZbY2F0ZWdvcnk9XCJHZXN1bmRoZWl0XCJdICAgICAgICAgICAgeyBiYWNrZ3JvdW5kOiAjQkE2OEM4OyB9XG4gICAgJltjYXRlZ29yeT1cIkVyd2Vja3VuZ1wiXSAgICAgICAgICAgICB7IGJhY2tncm91bmQ6ICM5NTc1Q0Q7IH1cbiAgICAmW2NhdGVnb3J5PVwiS2lyY2hlXCJdICAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZDogIzc5ODZDQjsgfVxuICAgICZbY2F0ZWdvcnk9XCJTdGFkdCAmIExhbmRcIl0gICAgICAgICAgeyBiYWNrZ3JvdW5kOiAjNEREMEUxOyB9XG4gICAgJltjYXRlZ29yeT1cIkZhbWlsaWUgJiBGcmV1bmRlXCJdICAgICB7IGJhY2tncm91bmQ6ICM4MUM3ODQ7IH1cbiAgICAmW2NhdGVnb3J5PVwiV2Vpc2hlaXRcIl0gICAgICAgICAgICAgIHsgYmFja2dyb3VuZDogI0RDRTc3NTsgfVxuICAgICZbY2F0ZWdvcnk9XCJGcmVpc2V0enVuZ1wiXSAgICAgICAgICAgeyBiYWNrZ3JvdW5kOiAjRkZGMTc2OyB9XG4gICAgJltjYXRlZ29yeT1cIlNjaHVsZSAmIEF1c2JpbGR1bmdcIl0gICB7IGJhY2tncm91bmQ6ICNGRkI3NEQ7IH1cbiAgICAmW2NhdGVnb3J5PVwiVHJvc3RcIl0gICAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZDogI0ZGOEE2NTsgfVxuICAgICZbY2F0ZWdvcnk9XCJKb2JcIl0gICAgICAgICAgICAgICAgICAgeyBiYWNrZ3JvdW5kOiAjOTBBNEFlOyB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.scss']
          }]
        }], null, {
          category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          categoryAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.category']
          }]
        });
      })();
      /***/

    },

    /***/
    "e+Na":
    /*!*******************************************************************!*\
      !*** ./src/app/prayer-control/swipe-card/swipe-card.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SwipeCardComponent */

    /***/
    function eNa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwipeCardComponent", function () {
        return SwipeCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../category/category.component */
      "clsX");

      var SwipeCardComponent = function SwipeCardComponent() {
        _classCallCheck(this, SwipeCardComponent);

        this.prayer = src_app_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_1__["EMPTY_PRAYER"];
      };

      SwipeCardComponent.ɵfac = function SwipeCardComponent_Factory(t) {
        return new (t || SwipeCardComponent)();
      };

      SwipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwipeCardComponent,
        selectors: [["app-swipe-card"]],
        inputs: {
          prayer: "prayer"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "kind"], [1, "badge", 3, "category"]],
        template: function SwipeCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-category", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prayer.thanks ? "Dank" : "F\xFCrbitte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.prayer.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prayer.content);
          }
        },
        directives: [_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  padding-bottom: 8px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  color: #efefef;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  padding: 16px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   app-category[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin-top: 8px;\n  padding: 32px;\n  color: #555;\n  background-color: #efefef;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N3aXBlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFNSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUFOUiIsImZpbGUiOiJzd2lwZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnY29uc3QnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG5cbiAgICAgICAgLmtpbmQge1xuICAgICAgICAgICAgY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtY2F0ZWdvcnkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZzogMzJweDtcblxuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcblxuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwipeCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-swipe-card',
            templateUrl: './swipe-card.component.html',
            styleUrls: ['./swipe-card.component.scss']
          }]
        }], null, {
          prayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fJEj":
    /*!******************************************************!*\
      !*** ./src/app/prayer-view/prayer-view.component.ts ***!
      \******************************************************/

    /*! exports provided: PrayerViewComponent */

    /***/
    function fJEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrayerViewComponent", function () {
        return PrayerViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _prayer_card_prayer_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./prayer-card/prayer-card.component */
      "DQVS");
      /* harmony import */


      var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-card/category-card.component */
      "Kfgs");

      function PrayerViewComponent_app_prayer_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-prayer-card", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prayer", ctx_r0.prayer);
        }
      }

      function PrayerViewComponent_app_category_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-card", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r1.categories);
        }
      }

      function PrayerViewComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerViewComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.router.navigateByUrl("control");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PrayerViewComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerViewComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.router.navigateByUrl("edit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PrayerViewComponent = /*#__PURE__*/function () {
        function PrayerViewComponent(prayerIO, router) {
          var _this2 = this;

          _classCallCheck(this, PrayerViewComponent);

          this.prayerIO = prayerIO;
          this.router = router;
          this.prayer = undefined;
          this.subscription = this.prayerIO.activePrayer$.subscribe({
            next: function next(prayer) {
              return _this2.prayer = prayer;
            }
          });
        }

        _createClass(PrayerViewComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "categories",
          get: function get() {
            return this.prayerIO.categories;
          }
        }, {
          key: "prod",
          get: function get() {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
          }
        }]);

        return PrayerViewComponent;
      }();

      PrayerViewComponent.ɵfac = function PrayerViewComponent_Factory(t) {
        return new (t || PrayerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["PrayerIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      PrayerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrayerViewComponent,
        selectors: [["ng-component"]],
        decls: 4,
        vars: 4,
        consts: [[3, "prayer", 4, "ngIf"], [3, "categories", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "prayer"], [3, "categories"], [3, "click"]],
        template: function PrayerViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrayerViewComponent_app_prayer_card_0_Template, 1, 1, "app-prayer-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrayerViewComponent_app_category_card_1_Template, 1, 1, "app-category-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrayerViewComponent_button_2_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PrayerViewComponent_button_3_Template, 2, 0, "button", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prod);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prod);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _prayer_card_prayer_card_component__WEBPACK_IMPORTED_MODULE_5__["PrayerCardComponent"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCardComponent"]],
        styles: ["[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 870px;\n  height: 507px;\n  background: linear-gradient(253.35deg, #1F1E2D 3.3%, #05040F 84.13%);\n  position: relative;\n  padding: 0 36px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  text-transform: uppercase;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 49px;\n  line-height: 73px;\n  letter-spacing: 0.19em;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   app-category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 160px;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  color: #E5E5E5;\n}\n[_nghost-%COMP%]   .prayer-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 24px 0 58px 0;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 183.3%;\n  color: #E5E5E5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByYXllci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxvRUFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBQUhSO0FBS1E7RUFDSSxhQUFBO0FBSFo7QUFLWTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGNBQUE7QUFOaEI7QUFTWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFQaEI7QUFXUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVRaO0FBWVE7RUFDSSxxQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7QUFaWiIsImZpbGUiOiJwcmF5ZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAucHJheWVyLWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogODcwcHg7XG4gICAgICAgIGhlaWdodDogNTA3cHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1My4zNWRlZywgIzFGMUUyRCAzLjMlLCAjMDUwNDBGIDg0LjEzJSk7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIHBhZGRpbmc6IDAgMzZweDtcblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3M3B4O1xuXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTllbTtcblxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRTVFNUU1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcHAtY2F0ZWdvcnkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmtpbmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgY29sb3I6ICNFNUU1RTU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCA1OHB4IDA7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxODMuMyU7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjRTVFNUU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYm94LXNoYWRvdzogIzAwMDAwMDc1IDAgMCAyMHB4IDEwcHg7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Z1ZXJiaXR0ZS5wbmcnKTtcbiAgICAgICAgLy8gJi50aGFua3Mge1xuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RhbmsucG5nJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrayerViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './prayer-view.component.html',
            styleUrls: ['./prayer-view.component.scss']
          }]
        }], function () {
          return [{
            type: _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["PrayerIOService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fdJT":
    /*!******************************************************!*\
      !*** ./src/app/prayer-edit/prayer-edit.component.ts ***!
      \******************************************************/

    /*! exports provided: PrayerEditComponent */

    /***/
    function fdJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrayerEditComponent", function () {
        return PrayerEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/prayer-io.service */
      "vf3M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["new"];

      function PrayerEditComponent_div_0_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r4 = ctx.$implicit;

          var prayer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r4)("selected", category_r4 === prayer_r2.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4);
        }
      }

      function PrayerEditComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerEditComponent_div_0_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.startEditing();
          })("blur", function PrayerEditComponent_div_0_Template_span_blur_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var prayer_r2 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.changeContent(prayer_r2, $event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrayerEditComponent_div_0_Template_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var prayer_r2 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.changeCategory(prayer_r2, $event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrayerEditComponent_div_0_option_5_Template, 2, 3, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrayerEditComponent_div_0_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var prayer_r2 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.changeThank(prayer_r2, $event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerEditComponent_div_0_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var prayer_r2 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11["delete"](prayer_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "L\xF6schen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prayer_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", prayer_r2.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prayer_r2 == null ? null : prayer_r2.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", prayer_r2.thanks);
        }
      }

      var PrayerEditComponent = /*#__PURE__*/function () {
        function PrayerEditComponent(prayerIO, router) {
          _classCallCheck(this, PrayerEditComponent);

          this.prayerIO = prayerIO;
          this.router = router;
          this.categories = _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["Categories"];
          this.prayers = [];
          this.editing = false;
          this.newRow = null;
        }

        _createClass(PrayerEditComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.updatePrayers();
          }
        }, {
          key: "updatePrayers",
          value: function updatePrayers() {
            var _this3 = this;

            this.prayerIO.prayers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe({
              next: function next(prayers) {
                _this3.prayers = prayers;
              }
            });
          }
        }, {
          key: "startEditing",
          value: function startEditing() {
            this.editing = true;
          }
        }, {
          key: "changeContent",
          value: function changeContent(prayer, target) {
            var _a;

            if (target instanceof HTMLElement) {
              prayer.content = target.innerText;
              this.submit();

              if ((_a = this.newRow) === null || _a === void 0 ? void 0 : _a.nativeElement.innerText) {
                this.newRow.nativeElement.innerText = '';
              }
            }
          }
        }, {
          key: "changeCategory",
          value: function changeCategory(prayer, target) {
            if (target && target instanceof HTMLSelectElement) {
              prayer.category = target.value;
              this.submit();
            }
          }
        }, {
          key: "changeThank",
          value: function changeThank(prayer, target) {
            if (target && target instanceof HTMLInputElement) {
              prayer.thanks = target.checked;
              this.submit();
            }
          }
        }, {
          key: "delete",
          value: function _delete(prayer) {
            var index = this.prayers.findIndex(function (p) {
              return p === prayer;
            });

            if (index >= 0) {
              this.prayers.splice(index, 1);
              this.submit();
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            this.prayerIO.writePrayers(this.prayers);
            this.editing = false;
            this.updatePrayers();
          }
        }, {
          key: "createPrayer",
          value: function createPrayer() {
            var prayer = _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["EMPTY_PRAYER"];
            this.prayers.push(prayer);
            return prayer;
          }
        }, {
          key: "next",
          value: function next() {
            var index = this.prayers.findIndex(function (p) {
              return p.active;
            });
            this.activate(this.prayers[index + 1]);
          }
        }, {
          key: "activate",
          value: function activate(prayer) {
            // deactivate previous prayer
            var index = this.prayers.findIndex(function (p) {
              return p.active;
            });

            if (index >= 0) {
              this.prayers[index].active = false;
            }

            if (prayer) {
              prayer.active = true;
            }

            this.submit();
          }
        }]);

        return PrayerEditComponent;
      }();

      PrayerEditComponent.ɵfac = function PrayerEditComponent_Factory(t) {
        return new (t || PrayerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["PrayerIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      PrayerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrayerEditComponent,
        selectors: [["app-prayer-edit"]],
        viewQuery: function PrayerEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newRow = _t.first);
          }
        },
        decls: 8,
        vars: 1,
        consts: [["class", "prayer-row", 3, "active", 4, "ngFor", "ngForOf"], [1, "prayer-row", "new"], ["contenteditable", "true", 3, "click", "blur"], ["new", ""], [1, "button", 3, "click"], [1, "prayer-row"], ["contenteditable", "true", 1, "content", 3, "click", "blur"], [1, "row"], [1, "category", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "thanks", 3, "checked", "change"], [1, "delete", 3, "click"], [3, "value", "selected"]],
        template: function PrayerEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrayerEditComponent_div_0_Template, 9, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerEditComponent_Template_span_click_2_listener() {
              return ctx.startEditing();
            })("blur", function PrayerEditComponent_Template_span_blur_2_listener($event) {
              return ctx.changeContent(ctx.createPrayer(), $event.target);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerEditComponent_Template_button_click_4_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "N\xE4chstes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrayerEditComponent_Template_button_click_6_listener() {
              return ctx.activate(undefined);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kategorien anzeigen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prayers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 4px 0;\n  padding: 8px;\n  border-radius: 8px;\n  color: #fff;\n  background-color: #666;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]:hover {\n  background-color: #777;\n}\n[_nghost-%COMP%]   .prayer-row.active[_ngcontent-%COMP%] {\n  background-color: #949;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .thanks[_ngcontent-%COMP%]::after {\n  content: \"Dank\";\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .prayer-row[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .prayer-row.new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty::after {\n  content: \"Neues Gebet hinzuf\xFCgen...\";\n}\n[_nghost-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border: none;\n  padding: 12px;\n  border-radius: 16px;\n  color: #fff;\n  background-color: #4070c0;\n}\n[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #4a7aca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByYXllci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtBQURSO0FBR1E7RUFDSSxzQkFBQTtBQURaO0FBSVE7RUFDSSxzQkFBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQU9ZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTGhCO0FBU1E7RUFDSSxrQkFBQTtBQVBaO0FBV1k7RUFDSSxvQ0FBQTtBQVRoQjtBQWNJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0FBYlI7QUFlUTtFQUNJLHlCQUFBO0FBYloiLCJmaWxlIjoicHJheWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgLnByYXllci1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk7XG4gICAgICAgIH1cblxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRoYW5rcyB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ0RhbmsnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAmLm5ldyB7XG4gICAgICAgICAgICBzcGFuOmVtcHR5OjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ05ldWVzIEdlYmV0IGhpbnp1ZsO8Z2VuLi4uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDcwYzA7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE3YWNhO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrayerEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prayer-edit',
            templateUrl: './prayer-edit.component.html',
            styleUrls: ['./prayer-edit.component.scss']
          }]
        }], function () {
          return [{
            type: _utils_prayer_io_service__WEBPACK_IMPORTED_MODULE_2__["PrayerIOService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          newRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['new', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _prayer_control_prayer_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prayer-control/prayer-control.component */
      "NzyP");
      /* harmony import */


      var _prayer_view_prayer_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./prayer-view/prayer-view.component */
      "fJEj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _prayer_edit_prayer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./prayer-edit/prayer-edit.component */
      "fdJT");

      var routes = [{
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      }, {
        path: 'view',
        component: _prayer_view_prayer_view_component__WEBPACK_IMPORTED_MODULE_3__["PrayerViewComponent"]
      }, {
        path: 'control',
        component: _prayer_control_prayer_control_component__WEBPACK_IMPORTED_MODULE_2__["PrayerControlComponent"]
      }, {
        path: 'edit',
        component: _prayer_edit_prayer_edit_component__WEBPACK_IMPORTED_MODULE_5__["PrayerEditComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vf3M":
    /*!********************************************!*\
      !*** ./src/app/utils/prayer-io.service.ts ***!
      \********************************************/

    /*! exports provided: EMPTY_PRAYER, Categories, PrayerIOService */

    /***/
    function vf3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EMPTY_PRAYER", function () {
        return EMPTY_PRAYER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Categories", function () {
        return Categories;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrayerIOService", function () {
        return PrayerIOService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EMPTY_PRAYER = {
        content: '',
        category: '',
        thanks: false,
        active: false
      };
      var Categories = ['Versorgung', 'Heilung', 'Gesundheit', 'Erweckung', 'Kirche', 'Stadt & Land', 'Familie & Freunde', 'Weisheit', 'Freisetzung', 'Schule & Ausbildung', 'Trost', 'Job'
      /*
      &[category="Versorgung"]            { background: #E57373; }
      &[category="Heilung"]               { background: #F06292; }
      &[category="Gesundheit"]            { background: #BA68C8; }
      &[category="Erweckung"]             { background: #9575CD; }
      &[category="Kirche"]                { background: #7986CB; }
      &[category="Stadt & Land"]          { background: #4DD0E1; }
      &[category="Familie & Freunde"]     { background: #81C784; }
      &[category="Weisheit"]              { background: #DCE775; }
      &[category="Freisetzung"]           { background: #FFF176; }
      &[category="Schule & Ausbildung"]   { background: #FFB74D; }
      &[category="Trost"]                 { background: #FF8A65; }
      &[category="Job"]                   { background: #90A4Ae; }
      */
      ];
      /**
       * Regularly requests prayers from the backend and stores current ones
       */

      var PrayerIOService = /*#__PURE__*/function () {
        function PrayerIOService(http) {
          var _this4 = this;

          _classCallCheck(this, PrayerIOService);

          this.http = http; // tslint:disable-next-line:variable-name

          this._prayers = [];
          this.prayersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.pending = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.activePrayer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
          this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Set());
          setInterval(function () {
            if (!_this4.isPending()) {
              _this4.pending.next(true);

              _this4.request().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                return _this4.pending.next(false);
              })).subscribe(function (prayers) {
                return _this4.readPrayers(prayers);
              });
            }
          }, PrayerIOService.INTERVAL);
        }

        _createClass(PrayerIOService, [{
          key: "isPending",
          value: function isPending() {
            return this.pending.value;
          }
        }, {
          key: "request",
          value: function request() {
            // MOCK: For tests with WebServer without PUT (enabled for non-production)
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production && this.prayers.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.prayers);
            } // END MOCK


            return this.http.get('assets/prayers.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "readPrayers",
          value: function readPrayers(prayers) {
            this._prayers = prayers !== null && prayers !== void 0 ? prayers : []; // TODO performance: check differences and only update if such

            this.prayersSubject.next(this.prayers);
            this.activePrayer.next(this.prayers.find(function (prayer) {
              return prayer.active;
            }));
            this.categoriesSubject.next(new Set(this.prayers.map(function (prayer) {
              return prayer.category;
            })));
          }
        }, {
          key: "writePrayers",
          value: function writePrayers(prayers) {
            // only write if no reading is pending
            // const s: Subscription = this.pending.pipe(
            //     filter(pending => pending),
            //     finalize(() => s.unsubscribe())
            // ).subscribe(() => {
            this.http.put('assets/prayers.json', JSON.stringify(prayers)).subscribe();
            this.readPrayers(this.prayers); // });
          }
        }, {
          key: "next",
          value: function next() {
            var index = this.prayers.findIndex(function (p) {
              return p.active;
            });
            this.activate(this.prayers[index + 1]);
          }
        }, {
          key: "previous",
          value: function previous() {
            var index = this.prayers.findIndex(function (p) {
              return p.active;
            }); // if categories are active, select last prayer next

            if (index === -1) {
              index = this.prayers.length;
            }

            this.activate(this.prayers[index - 1]);
          }
        }, {
          key: "activate",
          value: function activate(prayer) {
            // deactivate previous prayer
            var index = this.prayers.findIndex(function (p) {
              return p.active;
            });

            if (index >= 0) {
              this.prayers[index].active = false;
            }

            if (prayer) {
              prayer.active = true;
            }

            this.writePrayers(this.prayers);
          }
        }, {
          key: "prayers",
          get: function get() {
            return this._prayers;
          }
        }, {
          key: "categories",
          get: function get() {
            return this.categoriesSubject.value;
          }
        }, {
          key: "prayers$",
          get: function get() {
            return this.prayersSubject.asObservable();
          }
        }, {
          key: "activePrayer$",
          get: function get() {
            return this.activePrayer.asObservable();
          }
        }]);

        return PrayerIOService;
      }();

      PrayerIOService.INTERVAL = 500;

      PrayerIOService.ɵfac = function PrayerIOService_Factory(t) {
        return new (t || PrayerIOService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      PrayerIOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: PrayerIOService,
        factory: PrayerIOService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PrayerIOService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map