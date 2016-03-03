define(['bootstrap', 'split', 'ace', 'list-of-components'], function(bootstrap, split, ace, listOfComponents) {
    var app = {};
    $(document).ready(function() {
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
            }
        });
        htmlEditor.getSession().on('change', function(e) {
               document.getElementById('component-preview').innerHTML = htmlEditor.session.getValue(); 
        });
        $('.run-code').click(function(){
               eval(jsEditor.session.getValue()); 
        });
    });
    return app;
})
