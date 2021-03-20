"use strict";

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

function Main() {
    return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", {
        id: "main"
    }, React.createElement(FilterBloc, null), React.createElement(UserList, null), React.createElement(Modal, null)));
}

function Modal() {
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
        id: "username",
        placeholder: "Nom d'utilisateur"
    }), React.createElement("div", null, React.createElement(RadioBox, {
        id: "genre1",
        name: "gender",
        label: "Masculin"
    }), React.createElement(RadioBox, {
        id: "genre2",
        name: "gender",
        label: "Féminin"
    })), React.createElement(TextBox, {
        id: "dob",
        placeholder: "Date de naissance"
    }), React.createElement("div", null, React.createElement(RadioBox, {
        id: "news1",
        name: "news",
        label: "Oui"
    }), React.createElement(RadioBox, {
        id: "news2",
        name: "news",
        label: "Non"
    })), React.createElement(TextBox, {
        id: "email",
        placeholder: "Adresse électronique"
    }), React.createElement(FileInput, null)), React.createElement("div", {
        className: "modal-footer"
    }, React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-bs-dismiss": "modal"
    }, "Annuler"), React.createElement("button", {
        type: "button",
        className: "btn btn-primary"
    }, "Enregistrer")))));
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

function RadioBox(props) {
    return React.createElement("div", {
        className: "form-check"
    }, React.createElement("input", {
        className: "form-check-input",
        name: props.name,
        type: "radio",
        id: props.id
    }), React.createElement("label", {
        className: "form-check-label",
        htmlFor: props.id
    }, props.label));
}

function TextBox(props) {
    return React.createElement("div", {
        className: "mb-3"
    }, props.label != null && React.createElement("label", {
        htmlFor: props.id,
        className: "form-label"
    }, props.label), React.createElement("input", {
        type: "text",
        autoComplete: "off",
        className: "form-control",
        id: props.id,
        placeholder: props.placeholder
    }));
}

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

function UserList() {
    return React.createElement("section", null, React.createElement("div", null, React.createElement(UserCard, {
        image: "images/logo.png"
    }, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997")), React.createElement(UserCard, null, React.createElement("h4", null, "Don TSIANGA Govane"), React.createElement("h4", null, "19 décembre 1997"))), React.createElement(Pagination, null));
}

ReactDOM.render(React.createElement(Main, null), document.querySelector("main"));