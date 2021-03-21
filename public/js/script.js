"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function Button(props) {
    return React.createElement("div", {
        className: "button"
    }, React.createElement("button", {
        "data-bs-toggle": "modal",
        "data-bs-target": "#staticBackdrop"
    }, props.text));
}

function CheckBox(props) {
    return React.createElement("div", {
        className: "form-check"
    }, React.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        value: "",
        id: props.id
    }), React.createElement("label", {
        className: "form-check-label",
        htmlFor: props.id
    }, props.label));
}

function FileInput(props) {
    return React.createElement("div", {
        className: "mb-3"
    }, React.createElement("input", {
        className: "form-control",
        type: "file",
        id: "formFile"
    }));
}

function FilterBloc(props) {
    return React.createElement("aside", null, React.createElement("div", null, React.createElement("h4", null, "Rechercher"), React.createElement(TextBox, {
        id: "username",
        placeholder: "Nom d'utilisateur"
    })), React.createElement("h4", null, "Trier par"), React.createElement(GroupCheckBox, {
        title: "Sexe"
    }, React.createElement(CheckBox, {
        id: "male",
        label: "Male"
    }), React.createElement(CheckBox, {
        id: "female",
        label: "Female"
    })), React.createElement(GroupCheckBox, {
        title: "Date de naissance"
    }, React.createElement(CheckBox, {
        id: "petit",
        label: "Plus petit"
    }), React.createElement(CheckBox, {
        id: "grand",
        label: "Plus grand"
    })), React.createElement(Button, {
        text: "Ajouter un utilisateur"
    }));
}

function GroupCheckBox(props) {
    return React.createElement("div", {
        className: "group-check-div"
    }, React.createElement("h4", null, props.title), React.createElement("div", null, props.children));
}

function Header() {
    return React.createElement("header", null, React.createElement("div", null, React.createElement("span", null, "TP MERN"), "produced by Don TSIANGA Govane"), React.createElement("div", {
        className: "image-bloc"
    }, React.createElement("img", {
        src: "images/logo.png",
        alt: "Don TG logo"
    })));
}

function IconButton(props) {
    return React.createElement("div", null, React.createElement("img", {
        src: props.icon,
        alt: "icone"
    }));
}

var Main = function(_React$Component) {
    _inherits(Main, _React$Component);
    var _super = _createSuper(Main);
    function Main(props) {
        var _this;
        _classCallCheck(this, Main);
        _this = _super.call(this, props);
        _this.state = {
            users: []
        };
        _this.getUserListe = _this.getUserListe.bind(_assertThisInitialized(_this));
        _this.displayNewUser = _this.displayNewUser.bind(_assertThisInitialized(_this));
        return _this;
    }
    _createClass(Main, [ {
        key: "componentDidMount",
        value: function componentDidMount() {
            makeRequest("/users", "GET", this.getUserListe);
        }
    }, {
        key: "getUserListe",
        value: function getUserListe(users) {
            users = JSON.parse(users) || [];
            this.setState({
                users: users
            });
        }
    }, {
        key: "displayNewUser",
        value: function displayNewUser(user) {
            var users = this.state.users;
            users.unshift(user);
            this.setState({
                users: users
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", {
                id: "main"
            }, React.createElement(FilterBloc, null), React.createElement(UserList, {
                users: this.state.users
            }), React.createElement(Modal, {
                onUserAdded: this.displayNewUser
            })));
        }
    } ]);
    return Main;
}(React.Component);

var Modal = function(_React$Component2) {
    _inherits(Modal, _React$Component2);
    var _super2 = _createSuper(Modal);
    function Modal(props) {
        var _this2;
        _classCallCheck(this, Modal);
        _this2 = _super2.call(this, props);
        _this2.state = {
            username: "",
            gender: "male",
            dob: "",
            news: false,
            email: ""
        };
        _this2.create = _this2.create.bind(_assertThisInitialized(_this2));
        _this2.onUsernameChange = _this2.onUsernameChange.bind(_assertThisInitialized(_this2));
        _this2.onEmailChange = _this2.onEmailChange.bind(_assertThisInitialized(_this2));
        _this2.onDobChange = _this2.onDobChange.bind(_assertThisInitialized(_this2));
        _this2.onGenderChange = _this2.onGenderChange.bind(_assertThisInitialized(_this2));
        _this2.onNewsChange = _this2.onNewsChange.bind(_assertThisInitialized(_this2));
        _this2.getCreateResponse = _this2.getCreateResponse.bind(_assertThisInitialized(_this2));
        return _this2;
    }
    _createClass(Modal, [ {
        key: "create",
        value: function create() {
            makeRequest("/users", "POST", this.getCreateResponse, this.state);
        }
    }, {
        key: "getCreateResponse",
        value: function getCreateResponse(response) {
            response = JSON.parse(response);
            console.log(response.message);
            this.props.onUserAdded({
                _id: response.id,
                username: this.state.username,
                gender: this.state.gender
            });
            this.setState({
                username: "",
                gender: "male",
                dob: "",
                news: false,
                email: ""
            });
            bootstrap.Modal.getInstance(document.getElementById("staticBackdrop")).hide();
        }
    }, {
        key: "onUsernameChange",
        value: function onUsernameChange(username) {
            this.setState({
                username: username
            });
        }
    }, {
        key: "onEmailChange",
        value: function onEmailChange(email) {
            this.setState({
                email: email
            });
        }
    }, {
        key: "onDobChange",
        value: function onDobChange(dob) {
            this.setState({
                dob: dob
            });
        }
    }, {
        key: "onGenderChange",
        value: function onGenderChange(gender) {
            this.setState({
                gender: gender
            });
        }
    }, {
        key: "onNewsChange",
        value: function onNewsChange(news) {
            this.setState({
                news: news
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "modal fade",
                id: "staticBackdrop",
                "data-bs-backdrop": "static",
                "data-bs-keyboard": "false",
                tabIndex: "-1",
                "aria-labelledby": "staticBackdropLabel",
                "aria-hidden": "true"
            }, React.createElement("div", {
                className: "modal-dialog modal-dialog-centered"
            }, React.createElement("div", {
                className: "modal-content"
            }, React.createElement("div", {
                className: "modal-header"
            }, React.createElement("h5", {
                className: "modal-title",
                id: "staticBackdropLabel"
            }, "Ajouter un utilisateur"), React.createElement("button", {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            })), React.createElement("div", {
                className: "modal-body"
            }, React.createElement(TextBox, {
                id: "user",
                value: this.state.username,
                onValueChange: this.onUsernameChange,
                name: "username",
                placeholder: "Nom d'utilisateur"
            }), React.createElement("div", null, React.createElement(RadioBox, {
                id: "genre1",
                value: "male",
                checked: this.state.gender == "male",
                onValueChange: this.onGenderChange,
                name: "gender",
                label: "Masculin"
            }), React.createElement(RadioBox, {
                id: "genre2",
                value: "female",
                checked: this.state.gender == "female",
                onValueChange: this.onGenderChange,
                name: "gender",
                label: "Féminin"
            })), React.createElement(TextBox, {
                id: "dob",
                value: this.state.dob,
                onValueChange: this.onDobChange,
                name: "dob",
                placeholder: "Date de naissance"
            }), React.createElement("div", null, React.createElement(RadioBox, {
                id: "news1",
                value: "true",
                checked: this.state.news,
                onValueChange: this.onNewsChange,
                name: "news",
                label: "Oui"
            }), React.createElement(RadioBox, {
                id: "news2",
                value: "false",
                checked: !this.state.news,
                onValueChange: this.onNewsChange,
                name: "news",
                label: "Non"
            })), React.createElement(TextBox, {
                id: "email",
                value: this.state.email,
                onValueChange: this.onEmailChange,
                name: "email",
                placeholder: "Adresse électronique"
            }), React.createElement(FileInput, null)), React.createElement("div", {
                className: "modal-footer"
            }, React.createElement("button", {
                type: "button",
                className: "btn btn-secondary",
                "data-bs-dismiss": "modal"
            }, "Annuler"), React.createElement("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: this.create
            }, "Enregistrer")))));
        }
    } ]);
    return Modal;
}(React.Component);

function Pagination() {
    return React.createElement("nav", {
        "aria-label": "Page navigation example"
    }, React.createElement("ul", {
        className: "pagination"
    }, React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#",
        "aria-label": "Previous"
    }, React.createElement("span", {
        "aria-hidden": "true"
    }, "«"))), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "1")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "2")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "3")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "1")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "2")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#"
    }, "3")), React.createElement("li", {
        className: "page-item"
    }, React.createElement("a", {
        className: "page-link",
        href: "#",
        "aria-label": "Next"
    }, React.createElement("span", {
        "aria-hidden": "true"
    }, "»")))));
}

var RadioBox = function(_React$Component3) {
    _inherits(RadioBox, _React$Component3);
    var _super3 = _createSuper(RadioBox);
    function RadioBox(props) {
        var _this3;
        _classCallCheck(this, RadioBox);
        _this3 = _super3.call(this, props);
        _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_this3));
        return _this3;
    }
    _createClass(RadioBox, [ {
        key: "handleChange",
        value: function handleChange(e) {
            if (e.target.checked) this.props.onValueChange(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "form-check"
            }, React.createElement("input", {
                checked: this.props.checked && "checked",
                className: "form-check-input",
                value: this.props.value,
                onChange: this.handleChange,
                name: this.props.name,
                type: "radio",
                id: this.props.id
            }), React.createElement("label", {
                className: "form-check-label",
                htmlFor: this.props.id
            }, this.props.label));
        }
    } ]);
    return RadioBox;
}(React.Component);

var TextBox = function(_React$Component4) {
    _inherits(TextBox, _React$Component4);
    var _super4 = _createSuper(TextBox);
    function TextBox(props) {
        var _this4;
        _classCallCheck(this, TextBox);
        _this4 = _super4.call(this, props);
        _this4.handleChange = _this4.handleChange.bind(_assertThisInitialized(_this4));
        return _this4;
    }
    _createClass(TextBox, [ {
        key: "handleChange",
        value: function handleChange(e) {
            this.props.onValueChange(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "mb-3"
            }, this.props.label != null && React.createElement("label", {
                htmlFor: this.props.id,
                className: "form-label"
            }, this.props.label), React.createElement("input", {
                type: "text",
                value: this.props.value,
                name: this.props.name,
                autoComplete: "off",
                className: "form-control",
                id: this.props.id,
                placeholder: this.props.placeholder,
                onChange: this.handleChange
            }));
        }
    } ]);
    return TextBox;
}(React.Component);

function UserCard(props) {
    return React.createElement("div", {
        className: "user-card"
    }, React.createElement("div", {
        className: "image-bloc"
    }, React.createElement("img", {
        src: props.image || "images/user.png",
        alt: "User profil photo"
    })), React.createElement("div", null, props.children), React.createElement("div", {
        className: "icons"
    }, React.createElement(IconButton, {
        icon: "images/edit.svg"
    }), React.createElement(IconButton, {
        icon: "images/delete.svg"
    })));
}

var UserList = function(_React$Component5) {
    _inherits(UserList, _React$Component5);
    var _super5 = _createSuper(UserList);
    function UserList(props) {
        _classCallCheck(this, UserList);
        return _super5.call(this, props);
    }
    _createClass(UserList, [ {
        key: "render",
        value: function render() {
            return this.props.users.length != 0 ? React.createElement("section", null, React.createElement("div", null, this.props.users.map(function(user) {
                return React.createElement(UserCard, {
                    key: user._id,
                    image: "images/logo.png"
                }, React.createElement("h4", null, user.username), React.createElement("h4", null, user.gender));
            })), React.createElement(Pagination, null)) : React.createElement("section", null, React.createElement("p", null, "Aucun utilisateur dans la base de données !"));
        }
    } ]);
    return UserList;
}(React.Component);

function makeRequest(route, method, callBack) {
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                callBack(httpRequest.responseText);
            } else {
                console.log("Il y a eu un problème avec la requête.");
            }
        }
    };
    httpRequest.open(method, route, true);
    data && httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(data));
}

ReactDOM.render(React.createElement(Main, null), document.querySelector("main"));