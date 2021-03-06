define(function() {
    return {
        "button": {
            "html": '<button type="button" class="btn btn-default">Default</button>\n<button type="button" class="btn btn-primary">Primary</button>\n<button type="button" class="btn btn-success">Success</button>\n<button type="button" class="btn btn-info">Info</button>\n<button type="button" class="btn btn-warning">Warning</button>\n<button type="button" class="btn btn-danger">Danger</button>\n<button type="button" class="btn btn-link">Link</button>',
            "js": '',
            "css": ''
        },
        "dropdown": {
            "html": '<select>\n\t<option value="volvo">Volvo</option>\n\t<option value="saab">Saab</option>\n\t<option value="mercedes">Mercedes</option>\n\t<option value="audi">Audi</option>\n</select>',
            "js": '',
            "css": ''
        },
        "forms": {
            "html": '<div class="form-group">\n\t<label for="exampleInputEmail1">Input field</label>\n\t<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">\n</div>\n\n<div class="form-group">\n\t<label for="ro">Readonly input field</label>\n\t<input class="form-control" type="text" placeholder="Readonly input here…" readonly>\n</div>\n\n<div class="form-group">\n\t<label for="comment">Comment:</label>\n\t<textarea class="form-control" rows="5" id="comment"></textarea>\n</div>\n\n<div class="form-group">\n\t<label for="exampleInputPassword1">Password</label>\n\t<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n</div>\n\n<div class="form-group">\n\t<label for="exampleInputFile">File input</label>\n\t<input type="file" id="exampleInputFile">\n</div>\n\n<div class="form-group">\n\t<label for="checkboxinput">Checkbox input</label>\n\t<div class="checkbox">\n\t\t<label>\n\t\t\t<input type="checkbox">Check me out\n\t\t</label>\n\t</div>\n</div>\n\n<div class="form-group">\n\t<label for="radioinput">Radio input</label>\n\t<div class="checkbox">\n\t\t<label>\n\t\t\t<input type="radio" name="r1"> Option 1\n\t\t\t<input type="radio" name="r1"> Option 2\n\t\t\t<input type="radio" name="r1"> Option 3\n\t\t</label>\n\t</div>\n</div>\n\n<label for="dropdown">Dropdown</label>\n<div class="dropdown">\n\t<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n\tDropdown list\n\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu1">\n\t\t<li><a href="#">Option 1</a></li>\n\t\t<li><a href="#">Option 2</a></li>\n\t\t<li><a href="#">Option 3</a></li>\n\t</ul>\n</div>',
            "js": '',
            "css": ''
        },
        "tabs": {
            "html": '<ul class="nav nav-tabs">\n\t<li role="presentation" class="active"><a href="#">Home</a></li>\n\t<li role="presentation"><a href="#">Profile</a></li>\n\t<li role="presentation"><a href="#">Messages</a></li>\n</ul>',
            "js": '',
            "css": ''
        },
        "tooltip": {
            "html": '<button type="button" data-container="body" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>\n<button type="button" data-container="body" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>\n<button type="button" data-container="body" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>\n<button type="button" data-container="body" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>\n',
            "js": '$(document).ready(function(){\n\t$(\'[data-toggle="tooltip"]\').tooltip();\n});',
            "css": ''
        },
        "tables": {
            "html": '<table class="table table-bordered">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>First Name</th>\n\t\t\t<th>Last Name</th>\n\t\t\t<th>Username</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th scope="row">1</th>\n\t\t\t<td>Mark</td>\n\t\t\t<td>Otto</td>\n\t\t\t<td>@mdo</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th scope="row">2</th>\n\t\t\t<td>Jacob</td>\n\t\t\t<td>Thornton</td>\n\t\t\t<td>@fat</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th scope="row">3</th>\n\t\t\t<td>Larry</td>\n\t\t\t<td>the Bird</td>\n\t\t\t<td>@twitter</td>\n\t\t</tr>\n\t</tbody>\n</table>',
            "js": '',
            "css": ''
        },
        "popover": {
            "html": '<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on top</button>\n\n<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on bottom</button>\n\n<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on right</button>\n\n<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on left</button>',
            "js": '',
            "css": ''
        },
    };
});


