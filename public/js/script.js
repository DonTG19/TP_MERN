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

var Button = function(_React$Component) {
    _inherits(Button, _React$Component);
    var _super = _createSuper(Button);
    function Button(props) {
        var _this;
        _classCallCheck(this, Button);
        _this = _super.call(this, props);
        _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    _createClass(Button, [ {
        key: "handleClick",
        value: function handleClick() {
            this.props.click();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "button"
            }, React.createElement("button", {
                disabled: this.props.disabled,
                onClick: this.handleClick
            }, this.props.text));
        }
    } ]);
    return Button;
}(React.Component);

var CheckBox = function(_React$Component2) {
    _inherits(CheckBox, _React$Component2);
    var _super2 = _createSuper(CheckBox);
    function CheckBox(props) {
        var _this2;
        _classCallCheck(this, CheckBox);
        _this2 = _super2.call(this, props);
        _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
        return _this2;
    }
    _createClass(CheckBox, [ {
        key: "handleChange",
        value: function handleChange(e) {
            if (e.target.checked) this.props.onValueChange(e.target.value); else this.props.onValueChange(0);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "form-check"
            }, React.createElement("input", {
                onChange: this.handleChange,
                className: "form-check-input",
                value: this.props.value,
                type: "checkbox",
                checked: this.props.checked == this.props.value,
                id: this.props.id
            }), React.createElement("label", {
                className: "form-check-label",
                htmlFor: this.props.id
            }, this.props.label));
        }
    } ]);
    return CheckBox;
}(React.Component);

var DeleteUser = function(_React$Component3) {
    _inherits(DeleteUser, _React$Component3);
    var _super3 = _createSuper(DeleteUser);
    function DeleteUser(props) {
        var _this3;
        _classCallCheck(this, DeleteUser);
        _this3 = _super3.call(this, props);
        _this3["delete"] = _this3["delete"].bind(_assertThisInitialized(_this3));
        _this3.getDeleteResponse = _this3.getDeleteResponse.bind(_assertThisInitialized(_this3));
        return _this3;
    }
    _createClass(DeleteUser, [ {
        key: "delete",
        value: function _delete() {
            makeRequest("/users/" + this.props.id, "DELETE", this.getDeleteResponse);
        }
    }, {
        key: "getDeleteResponse",
        value: function getDeleteResponse(response) {
            console.log(response);
            this.props.onUserDeleted(this.props.id);
            bootstrap.Modal.getInstance(document.getElementById("deleteUser")).hide();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "modal fade",
                id: "deleteUser",
                "data-bs-backdrop": "static",
                "data-bs-keyboard": "false",
                tabIndex: "-1",
                "aria-labelledby": "deleteUserLabel",
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
            }, "Supprimer un utilisateur"), React.createElement("button", {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            })), React.createElement("div", {
                className: "modal-body"
            }, React.createElement("p", null, "Voulez vous vraiment supprimer cet utilisateur ?")), React.createElement("div", {
                className: "modal-footer"
            }, React.createElement("button", {
                type: "button",
                className: "btn btn-secondary",
                "data-bs-dismiss": "modal"
            }, "Annuler"), React.createElement("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: this["delete"]
            }, "Supprimer")))));
        }
    } ]);
    return DeleteUser;
}(React.Component);

function FileInput(props) {
    return React.createElement("div", {
        className: "mb-3"
    }, React.createElement("input", {
        className: "form-control",
        type: "file",
        id: "formFile"
    }));
}

var FilterBloc = function(_React$Component4) {
    _inherits(FilterBloc, _React$Component4);
    var _super4 = _createSuper(FilterBloc);
    function FilterBloc(props) {
        var _this4;
        _classCallCheck(this, FilterBloc);
        _this4 = _super4.call(this, props);
        _this4.state = {
            username: "",
            gender: 0,
            dob: 0
        };
        _this4.onNameChange = _this4.onNameChange.bind(_assertThisInitialized(_this4));
        _this4.onGenderChange = _this4.onGenderChange.bind(_assertThisInitialized(_this4));
        _this4.onDobChange = _this4.onDobChange.bind(_assertThisInitialized(_this4));
        _this4.openModalAddUser = _this4.openModalAddUser.bind(_assertThisInitialized(_this4));
        return _this4;
    }
    _createClass(FilterBloc, [ {
        key: "onNameChange",
        value: function onNameChange(username) {
            this.setState({
                username: username
            }, function() {
                this.props.onFiltered(this.state);
            });
        }
    }, {
        key: "onGenderChange",
        value: function onGenderChange(gender) {
            this.setState({
                gender: gender
            }, function() {
                this.props.onFiltered(this.state);
            });
        }
    }, {
        key: "onDobChange",
        value: function onDobChange(dob) {
            this.setState({
                dob: dob
            }, function() {
                this.props.onFiltered(this.state);
            });
        }
    }, {
        key: "openModalAddUser",
        value: function openModalAddUser() {
            new bootstrap.Modal(document.getElementById("staticBackdrop"), {}).show();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("aside", null, React.createElement(Mock, {
                numberOfUsers: this.props.numberOfUsers,
                onFetched: this.props.onFetched
            }), React.createElement("hr", null), React.createElement("div", null, React.createElement("h4", {
                id: "label-search"
            }, "Rechercher"), React.createElement(TextBox, {
                id: "username",
                value: this.state.username,
                onValueChange: this.onNameChange,
                name: "username",
                placeholder: "Nom d'utilisateur"
            })), React.createElement("hr", null), React.createElement("h4", null, "Trier par"), React.createElement(GroupCheckBox, {
                title: "Sexe"
            }, React.createElement(CheckBox, {
                id: "male",
                checked: this.state.gender,
                onValueChange: this.onGenderChange,
                value: "-1",
                label: "Male"
            }), React.createElement(CheckBox, {
                id: "female",
                checked: this.state.gender,
                onValueChange: this.onGenderChange,
                value: "1",
                label: "Female"
            })), React.createElement(GroupCheckBox, {
                title: "Date de naissance"
            }, React.createElement(CheckBox, {
                id: "petit",
                checked: this.state.dob,
                onValueChange: this.onDobChange,
                value: "-1",
                label: "Plus petit"
            }), React.createElement(CheckBox, {
                id: "grand",
                checked: this.state.dob,
                onValueChange: this.onDobChange,
                value: "1",
                label: "Plus grand"
            })), React.createElement("hr", null), React.createElement(Button, {
                click: this.openModalAddUser,
                text: "Ajouter un utilisateur"
            }));
        }
    } ]);
    return FilterBloc;
}(React.Component);

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

var IconButton = function(_React$Component5) {
    _inherits(IconButton, _React$Component5);
    var _super5 = _createSuper(IconButton);
    function IconButton(props) {
        var _this5;
        _classCallCheck(this, IconButton);
        _this5 = _super5.call(this, props);
        _this5.handleClick = _this5.handleClick.bind(_assertThisInitialized(_this5));
        return _this5;
    }
    _createClass(IconButton, [ {
        key: "handleClick",
        value: function handleClick() {
            this.props.clickAction(this.props.id);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement("img", {
                src: this.props.icon,
                onClick: this.handleClick,
                alt: "icon"
            }));
        }
    } ]);
    return IconButton;
}(React.Component);

var Main = function(_React$Component6) {
    _inherits(Main, _React$Component6);
    var _super6 = _createSuper(Main);
    function Main(props) {
        var _this6;
        _classCallCheck(this, Main);
        _this6 = _super6.call(this, props);
        _this6.state = {
            users: [],
            userNumber: 0
        };
        _this6.modal = React.createRef();
        _this6.modalInfosUser = React.createRef();
        _this6.getUserListe = _this6.getUserListe.bind(_assertThisInitialized(_this6));
        _this6.displayNewUser = _this6.displayNewUser.bind(_assertThisInitialized(_this6));
        _this6.removeUser = _this6.removeUser.bind(_assertThisInitialized(_this6));
        _this6.showUpdateUserUI = _this6.showUpdateUserUI.bind(_assertThisInitialized(_this6));
        _this6.getUserForUpdate = _this6.getUserForUpdate.bind(_assertThisInitialized(_this6));
        _this6.getUserForInfos = _this6.getUserForInfos.bind(_assertThisInitialized(_this6));
        _this6.updateUser = _this6.updateUser.bind(_assertThisInitialized(_this6));
        _this6.getNumberOfUser = _this6.getNumberOfUser.bind(_assertThisInitialized(_this6));
        _this6.requestForUsers = _this6.requestForUsers.bind(_assertThisInitialized(_this6));
        _this6.requestForCountUsers = _this6.requestForCountUsers.bind(_assertThisInitialized(_this6));
        _this6.onFiltered = _this6.onFiltered.bind(_assertThisInitialized(_this6));
        _this6.showInfosUserUI = _this6.showInfosUserUI.bind(_assertThisInitialized(_this6));
        _this6.onFetched = _this6.onFetched.bind(_assertThisInitialized(_this6));
        return _this6;
    }
    _createClass(Main, [ {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.requestForUsers();
            this.requestForCountUsers();
        }
    }, {
        key: "requestForUsers",
        value: function requestForUsers() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var dob = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            makeRequest("/users/" + page + "/10?search=" + search + "&gender=" + gender + "&dob=" + dob, "GET", this.getUserListe);
        }
    }, {
        key: "requestForCountUsers",
        value: function requestForCountUsers() {
            var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var dob = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            makeRequest("/countusers?search=" + search + "&gender=" + gender + "&dob=" + dob, "GET", this.getNumberOfUser);
        }
    }, {
        key: "onFiltered",
        value: function onFiltered(filters) {
            this.requestForUsers(1, filters.username, filters.gender, filters.dob);
            this.requestForCountUsers(filters.username, filters.gender, filters.dob);
        }
    }, {
        key: "onFetched",
        value: function onFetched(rab) {
            this.requestForUsers();
            this.setState(function(state) {
                return {
                    userNumber: parseInt(state.userNumber) + parseInt(rab)
                };
            });
        }
    }, {
        key: "getNumberOfUser",
        value: function getNumberOfUser(res) {
            this.setState({
                userNumber: res
            });
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
            this.setState(function(state) {
                return {
                    users: users,
                    userNumber: state.userNumber++
                };
            });
        }
    }, {
        key: "removeUser",
        value: function removeUser(id) {
            this.setState(function(state) {
                return {
                    users: state.users.filter(function(user) {
                        return user._id != id;
                    }),
                    userNumber: state.userNumber--
                };
            });
        }
    }, {
        key: "updateUser",
        value: function updateUser(userUpdate) {
            this.setState(function(state) {
                return {
                    users: state.users.map(function(user) {
                        if (user._id == userUpdate._id) return userUpdate;
                        return user;
                    })
                };
            });
        }
    }, {
        key: "showUpdateUserUI",
        value: function showUpdateUserUI(idUser) {
            makeRequest("/users/" + idUser, "GET", this.getUserForUpdate);
        }
    }, {
        key: "showInfosUserUI",
        value: function showInfosUserUI(idUser) {
            makeRequest("/users/" + idUser, "GET", this.getUserForInfos);
        }
    }, {
        key: "getUserForUpdate",
        value: function getUserForUpdate(user) {
            user = JSON.parse(user);
            this.modal.current.setState({
                _id: user._id,
                username: user.username,
                gender: user.gender,
                dob: user.dob,
                news: user.news,
                email: user.email,
                update: true
            });
            new bootstrap.Modal(document.getElementById("staticBackdrop"), {}).show();
        }
    }, {
        key: "getUserForInfos",
        value: function getUserForInfos(user) {
            user = JSON.parse(user);
            this.modalInfosUser.current.displayUser(user);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", {
                id: "main"
            }, React.createElement(FilterBloc, {
                numberOfUsers: this.state.userNumber,
                onFetched: this.onFetched,
                onFiltered: this.onFiltered
            }), React.createElement(UserList, {
                users: this.state.users,
                numberUser: this.state.userNumber,
                updateUserUI: this.showUpdateUserUI,
                infosUserUI: this.showInfosUserUI,
                onUserDeleted: this.removeUser,
                onPaginate: this.requestForUsers
            }), React.createElement(Modal, {
                ref: this.modal,
                onUserAdded: this.displayNewUser,
                onUserUpdated: this.updateUser,
                title: "Modifier un utilisateur"
            }), React.createElement(ShowUser, {
                ref: this.modalInfosUser
            })));
        }
    } ]);
    return Main;
}(React.Component);

var Mock = function(_React$Component7) {
    _inherits(Mock, _React$Component7);
    var _super7 = _createSuper(Mock);
    function Mock(props) {
        var _this7;
        _classCallCheck(this, Mock);
        _this7 = _super7.call(this, props);
        _this7.state = {
            disabled: true
        };
        _this7.getRandomUsers = _this7.getRandomUsers.bind(_assertThisInitialized(_this7));
        _this7.handleErrors = _this7.handleErrors.bind(_assertThisInitialized(_this7));
        _this7.parseJSON = _this7.parseJSON.bind(_assertThisInitialized(_this7));
        _this7.showUser = _this7.showUser.bind(_assertThisInitialized(_this7));
        _this7.printError = _this7.printError.bind(_assertThisInitialized(_this7));
        _this7.getFetchResponse = _this7.getFetchResponse.bind(_assertThisInitialized(_this7));
        _this7.disableButton = _this7.disableButton.bind(_assertThisInitialized(_this7));
        return _this7;
    }
    _createClass(Mock, [ {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.disableButton();
        }
    }, {
        key: "disableButton",
        value: function disableButton() {
            var totalUsers = this.props.numberOfUsers, add;
            if (totalUsers < 5) {
                add = 5 - totalUsers;
                this.setState({
                    disabled: false
                });
            } else {
                this.setState({
                    disabled: true
                });
            }
        }
    }, {
        key: "getRandomUsers",
        value: function getRandomUsers() {
            fetch("https://randomuser.me/api/?inc=gender,email,login,picture,dob&results=2").then(this.handleErrors).then(this.parseJSON).then(this.showUser)["catch"](this.printError);
        }
    }, {
        key: "handleErrors",
        value: function handleErrors(res) {
            if (!res.ok) {
                throw error(res.status);
            }
            return res;
        }
    }, {
        key: "parseJSON",
        value: function parseJSON(res) {
            return res.json();
        }
    }, {
        key: "showUser",
        value: function showUser(res) {
            var results = res.results;
            results = results.map(function(result) {
                return {
                    username: result.login.username,
                    gender: result.gender,
                    dob: result.dob.date,
                    news: result.dob.age > 24,
                    email: result.email,
                    photo: result.picture.medium
                };
            });
            makeRequest("/fetchusers", "POST", this.getFetchResponse, {
                users: results
            });
            return 1;
        }
    }, {
        key: "getFetchResponse",
        value: function getFetchResponse(res) {
            res = JSON.parse(res);
            console.log(res.message);
            this.props.onFetched(res.number);
            this.disableButton();
        }
    }, {
        key: "printError",
        value: function printError(error) {
            console.log(error);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                id: "mock"
            }, React.createElement("h4", null, this.props.numberOfUsers, " utilisateurs"), React.createElement(Button, {
                disabled: this.state.disabled,
                click: this.getRandomUsers,
                text: "Fetch"
            }));
        }
    } ]);
    return Mock;
}(React.Component);

var Modal = function(_React$Component8) {
    _inherits(Modal, _React$Component8);
    var _super8 = _createSuper(Modal);
    function Modal(props) {
        var _this8;
        _classCallCheck(this, Modal);
        _this8 = _super8.call(this, props);
        _this8.state = {
            _id: 0,
            username: "",
            gender: "male",
            dob: "",
            news: false,
            email: "",
            update: false
        };
        _this8.create = _this8.create.bind(_assertThisInitialized(_this8));
        _this8.update = _this8.update.bind(_assertThisInitialized(_this8));
        _this8.onUsernameChange = _this8.onUsernameChange.bind(_assertThisInitialized(_this8));
        _this8.onEmailChange = _this8.onEmailChange.bind(_assertThisInitialized(_this8));
        _this8.onDobChange = _this8.onDobChange.bind(_assertThisInitialized(_this8));
        _this8.onGenderChange = _this8.onGenderChange.bind(_assertThisInitialized(_this8));
        _this8.onNewsChange = _this8.onNewsChange.bind(_assertThisInitialized(_this8));
        _this8.getCreateResponse = _this8.getCreateResponse.bind(_assertThisInitialized(_this8));
        _this8.getUpdateResponse = _this8.getUpdateResponse.bind(_assertThisInitialized(_this8));
        _this8.closeModal = _this8.closeModal.bind(_assertThisInitialized(_this8));
        return _this8;
    }
    _createClass(Modal, [ {
        key: "create",
        value: function create() {
            makeRequest("/users", "POST", this.getCreateResponse, this.state);
        }
    }, {
        key: "update",
        value: function update() {
            makeRequest("/users/" + this.state._id, "PUT", this.getUpdateResponse, this.state);
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
            this.closeModal();
        }
    }, {
        key: "getUpdateResponse",
        value: function getUpdateResponse(resp) {
            console.log(resp);
            this.props.onUserUpdated({
                _id: this.state._id,
                username: this.state.username,
                gender: this.state.gender
            });
            this.closeModal();
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            bootstrap.Modal.getInstance(document.getElementById("staticBackdrop")).hide();
            this.setState({
                _id: 0,
                username: "",
                gender: "male",
                dob: "",
                news: false,
                email: "",
                update: false
            });
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
            }, this.state.update ? "Modifier un utilisateur" : "Ajouter un utilisateur"), React.createElement("button", {
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
                onClick: this.state.update ? this.update : this.create
            }, "Enregistrer")))));
        }
    } ]);
    return Modal;
}(React.Component);

var Pagination = function(_React$Component9) {
    _inherits(Pagination, _React$Component9);
    var _super9 = _createSuper(Pagination);
    function Pagination(props) {
        var _this9;
        _classCallCheck(this, Pagination);
        _this9 = _super9.call(this, props);
        _this9.makePagination = _this9.makePagination.bind(_assertThisInitialized(_this9));
        _this9.handleClick = _this9.handleClick.bind(_assertThisInitialized(_this9));
        return _this9;
    }
    _createClass(Pagination, [ {
        key: "handleClick",
        value: function handleClick(e) {
            e.preventDefault();
            this.props.onPaginate(e.target.text);
        }
    }, {
        key: "makePagination",
        value: function makePagination() {
            var links = [], index = 0, page = Math.ceil(this.props.numberUser / 10);
            for (index; index < page; index++) {
                links.push(React.createElement("li", {
                    key: index,
                    className: "page-item"
                }, React.createElement("a", {
                    className: "page-link",
                    onClick: this.handleClick,
                    href: "#"
                }, index + 1)));
            }
            return links;
        }
    }, {
        key: "render",
        value: function render() {
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
            }, "«"))), this.makePagination(), React.createElement("li", {
                className: "page-item"
            }, React.createElement("a", {
                className: "page-link",
                href: "#",
                "aria-label": "Next"
            }, React.createElement("span", {
                "aria-hidden": "true"
            }, "»")))));
        }
    } ]);
    return Pagination;
}(React.Component);

var RadioBox = function(_React$Component10) {
    _inherits(RadioBox, _React$Component10);
    var _super10 = _createSuper(RadioBox);
    function RadioBox(props) {
        var _this10;
        _classCallCheck(this, RadioBox);
        _this10 = _super10.call(this, props);
        _this10.handleChange = _this10.handleChange.bind(_assertThisInitialized(_this10));
        return _this10;
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

var ShowUser = function(_React$Component11) {
    _inherits(ShowUser, _React$Component11);
    var _super11 = _createSuper(ShowUser);
    function ShowUser(props) {
        var _this11;
        _classCallCheck(this, ShowUser);
        _this11 = _super11.call(this, props);
        _this11.state = {
            user: {}
        };
        _this11.ok = _this11.ok.bind(_assertThisInitialized(_this11));
        return _this11;
    }
    _createClass(ShowUser, [ {
        key: "ok",
        value: function ok() {
            bootstrap.Modal.getInstance(document.getElementById("showUser")).hide();
        }
    }, {
        key: "displayUser",
        value: function displayUser(user) {
            this.setState({
                user: user
            });
            new bootstrap.Modal(document.getElementById("showUser"), {}).show();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: "modal fade",
                id: "showUser",
                "data-bs-backdrop": "static",
                "data-bs-keyboard": "false",
                tabIndex: "-1",
                "aria-labelledby": "deleteUserLabel",
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
            }, "Informations utilisateur"), React.createElement("button", {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            })), React.createElement("div", {
                className: "modal-body"
            }, React.createElement("h4", null, React.createElement("span", null, "Username : "), React.createElement("span", null, this.state.user.username)), React.createElement("h4", null, React.createElement("span", null, "Gender : "), React.createElement("span", null, this.state.user.gender)), React.createElement("h4", null, React.createElement("span", null, "Dob : "), React.createElement("span", null, this.state.user.dob)), React.createElement("h4", null, React.createElement("span", null, "News : "), React.createElement("span", null, this.state.user.news)), React.createElement("h4", null, React.createElement("span", null, "Email : "), React.createElement("span", null, this.state.user.email))), React.createElement("div", {
                className: "modal-footer"
            }, React.createElement("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: this.ok
            }, "Ok")))));
        }
    } ]);
    return ShowUser;
}(React.Component);

var TextBox = function(_React$Component12) {
    _inherits(TextBox, _React$Component12);
    var _super12 = _createSuper(TextBox);
    function TextBox(props) {
        var _this12;
        _classCallCheck(this, TextBox);
        _this12 = _super12.call(this, props);
        _this12.handleChange = _this12.handleChange.bind(_assertThisInitialized(_this12));
        return _this12;
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
        src: props.image,
        alt: "User profil photo"
    })), React.createElement("div", null, props.children), React.createElement("div", {
        className: "icons"
    }, React.createElement(IconButton, {
        id: props.id,
        clickAction: props.infosUserUI,
        icon: "images/more.svg"
    }), React.createElement(IconButton, {
        id: props.id,
        clickAction: props.updateUserUI,
        icon: "images/edit.svg"
    }), React.createElement(IconButton, {
        id: props.id,
        clickAction: props.confirmDelete,
        icon: "images/delete.svg"
    })));
}

var UserList = function(_React$Component13) {
    _inherits(UserList, _React$Component13);
    var _super13 = _createSuper(UserList);
    function UserList(props) {
        var _this13;
        _classCallCheck(this, UserList);
        _this13 = _super13.call(this, props);
        _this13.state = {
            idUser: 0
        };
        _this13.showConfirmDeleteModal = _this13.showConfirmDeleteModal.bind(_assertThisInitialized(_this13));
        _this13.mapUser = _this13.mapUser.bind(_assertThisInitialized(_this13));
        return _this13;
    }
    _createClass(UserList, [ {
        key: "showConfirmDeleteModal",
        value: function showConfirmDeleteModal(idUser) {
            this.setState({
                idUser: idUser
            });
            new bootstrap.Modal(document.getElementById("deleteUser"), {}).show();
        }
    }, {
        key: "mapUser",
        value: function mapUser(user) {
            return React.createElement(UserCard, {
                key: user._id,
                id: user._id,
                infosUserUI: this.props.infosUserUI,
                confirmDelete: this.showConfirmDeleteModal,
                updateUserUI: this.props.updateUserUI,
                image: user.photo || "images/logo.png"
            }, React.createElement("h4", null, user.username), React.createElement("h4", null, user.gender));
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.users.length != 0 ? React.createElement("section", null, React.createElement("div", null, this.props.users.map(this.mapUser)), this.props.numberUser > 10 && React.createElement(Pagination, {
                numberUser: this.props.numberUser,
                onPaginate: this.props.onPaginate
            }), React.createElement(DeleteUser, {
                id: this.state.idUser,
                onUserDeleted: this.props.onUserDeleted
            })) : React.createElement("section", null, React.createElement("p", null, "Aucun utilisateur dans la base de données !"));
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