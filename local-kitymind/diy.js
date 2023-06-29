(function () {
    var oldData;
    var html = '';
    html += '<a href="" class="diy export" data-type="json">导出json</a>',
    html += '<a href="" class="diy export" data-type="md">导出md</a>',
    html += '<a href="" class="diy export" data-type="km">导出km</a>',
    html += '<a href="" class="diy export" data-type="svg">导出svg</a>',
    html += '<a href="" class="diy export" data-type="txt">导出text</a>',
    html += '<a href="" class="diy export" data-type="png">导出png</a>',
    html += '<button class="diy input">',
    html += '导入<input type="file" id="fileInput" accept=".km,.txt,.md,.json" >',
    html += '</button>'
    html += '<button class="diy httpinput">后台api查询</button>',
    html += '<button class="diy httpinput2">后台api插入</button>';

    $('.editor-title').append(html);

    $('.diy').css({
        // 'height': '30px',
        // 'line-height': '30px',
        'margin-top': '0px',
        'float': 'right',
        'background-color': '#fff',
        'min-width': '60px',
        'text-decoration': 'none',
        color: '#999',
        'padding': '0 10px',
        border: 'none',
        'border-right': '1px solid #ccc',
    });
    $('.input').css({
        'overflow': 'hidden',
        'position': 'relative',
    }).find('input').css({
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'inline-block',
        opacity: 0
    });
    $('.httpinput').css({
        'overflow': 'hidden',
        'position': 'relative',
    }).find('httpinput').css({
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'inline-block',
        opacity: 0
    });
    $('.httpinput2').css({
        'overflow': 'hidden',
        'position': 'relative',
    }).find('httpinput2').css({
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'inline-block',
        opacity: 0
    });

    $(document).on('click', '.export', function (event) {
        event.preventDefault();
        var $this = $(this),
        type = $this.data('type'),
        exportType;
        switch (type) {
        case 'km':
            exportType = 'json';
            break;
        case 'md':
            exportType = 'markdown';
            break;
        case 'svg':
            exportType = 'svg';
            break;
        case 'txt':
            exportType = 'text';
            break;
        case 'png':
            exportType = 'png';
            break;
        default:
            exportType = type;
            break;
        }

        editor.minder.exportData(exportType).then(function (content) {
            switch (exportType) {
            case 'json':
                console.log($.parseJSON(content));
                break;
            default:
                console.log(content);
                break;
            }
            var blob = new Blob();
            switch (exportType) {
            case 'png':
                blob = dataURLtoBlob(content); //将base64编码转换为blob对象
                break;
            default:
                blob = new Blob([content]);
                break;
            }
            var a = document.createElement("a"); //建立标签，模拟点击下载
            a.download = $('#node_text1').text() + '.' + type;
            a.href = URL.createObjectURL(blob);
            a.click();

        });
    });
    //api按钮查看
    $(document).on('click', '.httpinput', function (event) {
        console.log('shangyi123')
        var content = '{"root":{"data":{"id":"ctojgfitvug0","created":1687981368534,"text":"测试123"},"children":[]},"template":"default","theme":"fresh-blue","version":"1.4.33"} '
        editor.minder.importData('json', content).then(function (data) {
            console.log(data)
        });
        myApp.openDialog();

        console.log(321)


        event.preventDefault();
		var content;
		var ct;
        $.get('http://127.0.0.1:5000/api/getNaotuData', {}, function(res) {
            //console.log(res[0][2])
            //ct = res[0][2];
            //console.log('--'+ct);
            //content = JSON.parse(ct)
			content = res[0][2];
        console.log(content)
        editor.minder.importData('json', content).then(function (data) {
             console.log(data)
        });
        console.log('-------hyb-----')
        })
         
    });
    //api按钮插入
    $(document).on('click', '.httpinput2', async function (event) {
        console.log('shangyi')
        event.preventDefault();
		var ct;
		var urlData;
		console.log('-------insert start-----')
		//editor.minder.exportData('json').then(function (content) {
			//ct = content;
		//});
		ct = await editor.minder.exportData('json')
		console.log(ct);
		var contValue = ct;
		urlData = {cont: contValue }
		//$.post('http://124.220.104.247:8088/api/postNaotuData', urlData, function(res) {
        $.post('http://127.0.0.1:5000/api/postNaotuData', urlData, function(res) {
           console.log('-------print ct value -----')
		   console.log(ct);
		   console.log(urlData);
			content = res[0];
        console.log(content)
        
        console.log('-------hyb2-----')
        })
         
    });

    // 导入
    window.onload = function () {
        var fileInput = document.getElementById('fileInput');

        fileInput.addEventListener('change', function (e) {
            var file = fileInput.files[0],
            // textType = /(md|km)/,
            fileType = file.name.substr(file.name.lastIndexOf('.') + 1);
            console.log(file);
            switch (fileType) {
            case 'md':
                fileType = 'markdown';
                break;
            case 'txt':
                fileType = 'text';
                break;				
            case 'km':
            case 'json':
                fileType = 'json';
                break;
            default:
                console.log("File not supported!");
                alert('只支持.km、.md、、text、.json文件');
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var content = reader.result;
                editor.minder.importData(fileType, content).then(function (data) {
                    console.log(data)
                    $(fileInput).val('');
                });
            }
            reader.readAsText(file);
        });
    }

})();

//base64转换为图片blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(',');
    //注意base64的最后面中括号和引号是不转译的
    var _arr = arr[1].substring(0, arr[1].length - 2);
    var mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(_arr),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}
