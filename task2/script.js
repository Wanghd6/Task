window.addEventListener('load', function () {

    var toolfunction = document.querySelector('.function');
    var lis = toolfunction.children;
    // 下拉菜单
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.children[1].style.display = 'block';
        }
        lis[i].onmouseout = function () {
            this.children[1].style.display = 'none';
        }
    }
    document.querySelector('.file-input').addEventListener('change', function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const fileContent = e.target.result;
                document.querySelector('.file-content').value = fileContent;
                convertMarkdownToHtml(fileContent); // Convert upon loading the file
                sessionStorage.setItem('markdownContent', fileContent);
            };
            reader.readAsText(file);
        } else {
            alert("Please select a file to load.");
        }
    });

    // Function to convert markdown to HTML and display in the preview area
    function convertMarkdownToHtml(markdownText) {
        const htmlContent = marked.parse(markdownText);
        document.querySelector('.preview-area').innerHTML = htmlContent;

        const tables = document.querySelector('.preview-area').querySelectorAll('table');
        tables.forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('table-container');
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }


    // Event listener for real-time markdown conversion
    document.querySelector('.file-content').addEventListener('input', function () {
        const markdownText = this.value;
        convertMarkdownToHtml(markdownText);
        sessionStorage.setItem('markdownContent', markdownText);
    });

    //添加删除线
    var tools = this.document.querySelector('.tools');
    var toollis = tools.children;
    toollis[0].addEventListener('click', function () {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        const newText = `~~${selectedText}~~`;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Optionally, reselect the bolded text
        const cursorPosition = start + 2;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        convertMarkdownToHtml(textarea.value);
        sessionStorage.setItem('markdownContent', textarea.value);
    });
    //加粗
    toollis[1].addEventListener('click', function () {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        const newText = `**${selectedText}**`;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Optionally, reselect the bolded text
        const cursorPosition = start + 2;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        convertMarkdownToHtml(textarea.value);
        sessionStorage.setItem('markdownContent', textarea.value);
    });
    // 斜体
    toollis[2].addEventListener('click', function () {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        const newText = `*${selectedText}*`;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Optionally, reselect the bolded text
        const cursorPosition = start + 1;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        convertMarkdownToHtml(textarea.value);
        sessionStorage.setItem('markdownContent', textarea.value);
    });
    //代码块
    toollis[3].addEventListener('click', function () {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        const newText = `\n\`\`\`\n${selectedText}\n\`\`\`\n`;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Optionally, reselect the bolded text
        const cursorPosition = start + 5;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        convertMarkdownToHtml(textarea.value);
        sessionStorage.setItem('markdownContent', textarea.value);
    });
    //行内代码
    toollis[4].addEventListener('click', function () {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        const newText = `\`${selectedText}\``;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Optionally, reselect the bolded text
        const cursorPosition = start + 1;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        convertMarkdownToHtml(textarea.value);
        sessionStorage.setItem('markdownContent', textarea.value);
    });


    //重置
    var reseticon = document.querySelector('.reseticon');
    var bg = document.querySelector('.bg');
    var reset = this.document.querySelector('.reset');
    reseticon.addEventListener('click', function () {
        bg.style.display = 'block';
        reset.style.display = 'block';
    });
    var no = document.querySelector('.no');
    no.addEventListener('click', function () {
        bg.style.display = 'none';
        reset.style.display = 'none';
    });
    var yes = document.querySelector('.yes');
    yes.addEventListener('click', function () {
        fetch('./test.md')
            .then(response => response.text())
            .then(data => {
                document.querySelector('.file-content').value = data;
                convertMarkdownToHtml(data);
                sessionStorage.setItem('markdownContent', data); // Save to sessionStorage
            })
            .catch(error => console.error('Error loading the default markdown file:', error));
        bg.style.display = 'none';
        reset.style.display = 'none';
    });

    //表格
    // toollis[5].addEventListener('click', function () {
    //     const textarea = document.querySelector('.file-content');
    //     const start = textarea.selectionStart;
    //     const end = textarea.selectionEnd;

    //     const selectedText = textarea.value.substring(start, end);
    //     const newText = `\`${selectedText}\``;
    //     textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

    //     // Optionally, reselect the bolded text
    //     textarea.setSelectionRange(start, start + newText.length);
    //     convertMarkdownToHtml(textarea.value);
    //     sessionStorage.setItem('markdownContent', textarea.value);
    // });


    // var previewArea = document.querySelector('.preview-area');
    // var fileContent = document.querySelector('.file-content');
    // function syncScroll(source, target) {
    //     target.scrollTop = source.scrollTop * (target.scrollHeight / source.scrollHeight);
    // }

    // fileContent.addEventListener('scroll', function () {
    //     syncScroll(fileContent, previewArea);
    // });

    // previewArea.addEventListener('scroll', function () {
    //     syncScroll(previewArea, fileContent);
    // });

    // Restore content from localStorage on page load
    const savedContent = sessionStorage.getItem('markdownContent');
    if (savedContent) {
        document.querySelector('.file-content').value = savedContent;
        convertMarkdownToHtml(savedContent);
    }
})