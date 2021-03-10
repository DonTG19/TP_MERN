"use strict";

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

function FilterBloc(props) {
    return React.createElement("aside", null, React.createElement("div", null, React.createElement("h4", null, "Rechercher"), React.createElement(TextBox, {
        id: "username",
        placeholder: "Username"
    })), React.createElement(GroupCheckBox, {
        title: "Trier par"
    }, React.createElement(CheckBox, {
        id: "male",
        label: "male"
    }), React.createElement(CheckBox, {
        id: "female",
        label: "female"
    })), React.createElement(GroupCheckBox, {
        title: "Date de naissance"
    }, React.createElement(CheckBox, {
        id: "petit",
        label: "Plus petit"
    }), React.createElement(CheckBox, {
        id: "grand",
        label: "Plus grand"
    })));
}

function GroupCheckBox(props) {
    return React.createElement("div", null, React.createElement("h4", null, props.title), React.createElement("div", null, props.children));
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

function Main() {
    return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", null, React.createElement(FilterBloc, null), React.createElement(UserList, null)));
}

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
        href: "#",
        "aria-label": "Next"
    }, React.createElement("span", {
        "aria-hidden": "true"
    }, "»")))));
}

function TextBox(props) {
    return React.createElement("div", {
        className: "mb-3"
    }, props.label != null && React.createElement("label", {
        htmlFor: props.id,
        className: "form-label"
    }, props.label), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: props.id,
        placeholder: props.placeholder
    }));
}

function UserCard(props) {
    return React.createElement("div", {
        className: "user-card"
    }, React.createElement("div", null, React.createElement("img", {
        src: props.image || "images/user.png",
        alt: "User profil photo"
    })), React.createElement("div", null, props.children), React.createElement("div", null, React.createElement(IconButton, {
        icon: "images/edit.svg"
    }), React.createElement(IconButton, {
        icon: "images/delete.svg"
    })));
}

function UserList() {
    return React.createElement("section", null, React.createElement("h3", null, "Liste des utilisateurs"), React.createElement("div", null, React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997"))), React.createElement(Pagination, null));
}

ReactDOM.render(React.createElement(Main, null), document.querySelector("main"));