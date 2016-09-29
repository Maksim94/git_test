var tpl = {};

tpl.replacer = function (str, obj) {
    for (var key in obj) {
        str = str.replace(':' + key, obj[key]);
    }

    return str;
}

tpl.infoTpl =
    `<p>Last Name: :lastName</p>
    <p>Name: :name</p>
    <p>Gender: :gender</p>
    <p>Skype: :skype</p>`;

tpl.editTpl =
    `<p>Last Name: <input type="text" name="lastName" value=":lastName"></p>
    <p>Name: <input type="text" name="name" value=":name"></p>
    <p>Gender: <input type="text" name="gender" value=":gender"></p>
    <p>Skype: <input type="text" name="skype" value=":skype"</p>`;

tpl.oneStudent = ':lastName :name<a class="delBtn"></a>';