define(['bootstrap', 'split', 'ace', 'ZeroClipboard', 'list-of-components'], function(bootstrap, split, ace, ZeroClipboard, listOfComponents) {
    var app = {};
    $(document).ready(function() {
        // var clip=new clipboard('#cpy');

        var client1 = new ZeroClipboard( $('#cpy-html') );
        var client2 = new ZeroClipboard( $('#cpy-js') );

        client1.on('copy', function(event) {
          client1.setText(htmlEditor.session.getValue());
          $("#cpy-html").attr("title","Copied");
        });

        client2.on('copy', function(event) {
          client2.setText(jsEditor.session.getValue());
          $("#cpy-js").attr("title","Copied");
        });

        var jsEditor = ace.edit("js-editor");
        jsEditor.setTheme("ace/theme/textmate");
        jsEditor.getSession().setMode("ace/mode/javascript");

        var htmlEditor = ace.edit("html-editor");
        htmlEditor.setTheme("ace/theme/textmate");
        htmlEditor.getSession().setMode("ace/mode/html");
        htmlEditor.getSession().setUseWorker(false);

        Split(['#grid-preview', '#grid-code'], {
            gutterSize: 8,
            cursor: 'col-resize'
        });

        Split(['#grid-code-html', '#grid-code-js'], {
            direction: 'vertical',
            sizes: [50, 50],
            gutterSize: 8,
            cursor: 'row-resize',
            onDragEnd: function() {
                jsEditor.resize();
                htmlEditor.resize();
            }
        });

        $('.component-btn').click(function() {
            $(this).addClass("active");
            $(this).parent().siblings().find('a').removeClass("active");

            type = $(this).data('type');

            htmlEditor.session.setValue(listOfComponents[type]["html"]);
            document.getElementById('component-preview').innerHTML = listOfComponents[type]["html"];

            jsEditor.session.setValue(listOfComponents[type]["js"]);
            // document.getElementById('code-editor').innerHTML=listOfComponents[type]["js"];
            $(".btn.btn-small").click(function() { alert("Button is Clicked !!!"); });
            if (type == 'tooltip') {
                $('[data-toggle="tooltip"]').tooltip()
            } else if(type == 'popover'){
                $('[data-toggle="popover"]').popover();
            }
        });
        htmlEditor.getSession().on('change', function(e) {
               document.getElementById('component-preview').innerHTML = htmlEditor.session.getValue(); 
        });
        $('.run-code').click(function(){
               eval(jsEditor.session.getValue()); 
        });
        // popover
        $('body').on('click', function (e) {
            $('[data-toggle="popover"]').each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });
    });
    return app;
})
