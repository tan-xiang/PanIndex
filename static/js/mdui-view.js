$(function () {
    $('#theme-toggle').on('click', function(){
        $('body').removeClass('mdui-theme-layout-auto');
        if($('body').hasClass('mdui-theme-layout-dark')){
            $('body').removeClass('mdui-theme-layout-dark');
            $('#theme-toggle i').text('brightness_4');
            $.cookie("Theme", "mdui-light", {path:"/"});
        }else{
            $('body').addClass('mdui-theme-layout-dark');
            $('#theme-toggle i').text('brightness_5');
            $.cookie("Theme", "mdui-dark", {path:"/"});
        }
    });
    var path = $("#file_link").attr("data-path");
    var mode = $("#file_link").attr("data-mode");
    var fullUrl = encodeURI(window.location.protocol + "//"+window.location.host + path);
    $("#file_link").attr("href", fullUrl);
    $("#file_link").text(fullUrl);
    if(mode == "native"){
        $("#view_down_link").attr("href", fullUrl);
    }
    var clipboard = new ClipboardJS('.copyBtn', {
        text: function(trigger) {
            var content = $(trigger).data("content");
            return content;
        }
    });
    clipboard.on('success', function(e) {
        mdui.snackbar({
            message: "已复制到剪切板"
        });
        e.clearSelection();
    });
    var inst = new mdui.Collapse('#info_panel');
    var si = $.cookie("Show-Info")
    if(si == "0"){
        inst.close('#item-1');
    }else{
        inst.open('#item-1');
    }
    document.getElementById('info-toggle').addEventListener('click', function () {
        inst.toggle('#item-1');
    });
    document.getElementById('item-1').addEventListener('open.mdui.collapse', function () {
        $.cookie("Show-Info", "1", {path:"/"});
    });
    document.getElementById('item-1').addEventListener('close.mdui.collapse', function () {
        $.cookie("Show-Info", "0", {path:"/"});
    });
});
