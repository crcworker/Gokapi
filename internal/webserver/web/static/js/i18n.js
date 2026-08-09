(function () {
    "use strict";

    const STORAGE_KEY = "gokapi-language";
    const DEFAULT_LANGUAGE = "en";
    const SAFE_TABLE_VALUES = new Set(["Unlimited", "None", "Active", "Inactive", "Unknown"]);

    const translations = {
        "Upload": "上传",
        "File Requests": "文件请求",
        "Users": "用户",
        "API": "API",
        "Status": "状态",
        "Logout": "退出登录",
        "Login": "登录",
        "Username": "用户名",
        "Password": "密码",
        "Forgot password": "忘记密码",
        "New Password": "新密码",
        "Confirm New Password": "确认新密码",
        "Change Password": "修改密码",
        "Passwords do not match": "两次输入的密码不一致",
        "The login page was open too long and expired. Please try again.": "登录页面打开时间过长，已过期，请重试。",
        "Incorrect username or password!": "用户名或密码错误！",
        "Please wait": "请稍候",
        "Loading end-to-end encryption...": "正在加载端到端加密……",
        "Drag & drop files here": "将文件拖拽到这里",
        "or paste or click to select.": "也可以粘贴或点击选择文件。",
        "or paste or click to select": "也可以粘贴或点击选择文件",
        "Download Limit": "下载次数限制",
        "Downloads": "下载次数",
        "Expiry": "有效期",
        "Days": "天",
        "No password": "不设置密码",
        "Password protected": "已设置密码",
        "Filename": "文件名",
        "Size": "大小",
        "Downloads remaining": "剩余下载次数",
        "Stored until": "保存至",
        "ID": "ID",
        "Actions": "操作",
        "Unlimited": "不限",
        "URL": "链接",
        "Copy URL": "复制链接",
        "Copy hotlink": "复制直链",
        "Hotlink": "直链",
        "Hotlink not available": "直链不可用",
        "Share": "分享",
        "Open QR Code": "打开二维码",
        "QR Code": "二维码",
        "Share via email": "通过邮件分享",
        "Email": "邮件",
        "Download": "下载",
        "Download File": "下载文件",
        "Download all": "下载全部",
        "Replace Content": "替换内容",
        "Limit Downloads": "限制下载次数",
        "Downloads Remaining": "剩余下载次数",
        "Require password": "需要密码",
        "Expire files": "设置文件有效期",
        "Replace file content": "替换文件内容",
        "Close": "关闭",
        "Save changes": "保存修改",
        "Save": "保存",
        "Cancel": "取消",
        "Continue": "继续",
        "Confirm": "确认",
        "OK": "确定",
        "Title": "标题",
        "Max Files": "文件数量上限",
        "Max Size": "大小上限",
        "Friendly name": "显示名称",
        "Notes": "备注",
        "Notes about the request": "关于此请求的备注",
        "Name": "名称",
        "Uploaded Files": "已上传文件",
        "Total Size": "总大小",
        "Last Upload": "最近上传",
        "User": "用户",
        "Edit request": "编辑请求",
        "Delete File Request": "删除文件请求",
        "Are you sure you want to delete the filerequest": "确定要删除文件请求",
        "This also permanently deletes": "这也会永久删除",
        "associated file(s) and cannot be undone.": "个关联文件，且无法撤销。",
        "Restore": "恢复",
        "Uploaded files": "已上传文件",
        "Active uploads": "正在上传",
        "File limit": "文件数量限制",
        "Expand / Collapse": "展开 / 收起",
        "Group": "分组",
        "Last online": "最后在线",
        "Uploads": "上传数",
        "Permissions": "权限",
        "Permission Legend": "权限说明",
        "Show permission legend": "显示权限说明",
        "Create file requests": "创建文件请求",
        "Replace own uploads": "替换自己的上传",
        "List other uploads": "查看其他上传",
        "Edit other uploads": "编辑其他上传",
        "Delete other uploads": "删除其他上传",
        "Replace other uploads": "替换其他上传",
        "Manage system logs": "管理系统日志",
        "Manage users": "管理用户",
        "Manage all API keys": "管理所有 API 密钥",
        "Reset Password": "重置密码",
        "Promote User": "提升为管理员",
        "Demote User": "取消管理员",
        "Delete User": "删除用户",
        "Delete": "删除",
        "Are you sure you want to delete user": "确定要删除用户",
        "This action cannot be undone.": "此操作无法撤销。",
        "Permanently delete all files uploaded by this user.": "永久删除此用户上传的所有文件。",
        "Create New User": "创建新用户",
        "Enter a username": "请输入用户名",
        "Add User": "添加用户",
        "Choose an option to reset the password for the user": "请选择重置此用户密码的方式",
        "Force user to set a new password on next login": "强制用户下次登录时设置新密码",
        "Generate a new random password (user will be forced to change it on next login)": "生成随机密码（用户下次登录时必须修改）",
        "New Password:": "新密码：",
        "Copy Password": "复制密码",
        "API Keys": "API 密钥",
        "API documentation": "API 文档",
        "Please visit the": "请访问",
        "for more information about the API.": "了解更多 API 信息。",
        "Click on the API key name to give it a new name. Permissions can be changed by clicking on them.": "点击 API 密钥名称可以修改名称，点击权限图标可以修改权限。",
        "API Key": "API 密钥",
        "Last Used": "最后使用",
        "List uploads": "查看上传",
        "Upload files": "上传文件",
        "Edit uploads": "编辑上传",
        "Delete uploads": "删除上传",
        "Replace uploads": "替换上传",
        "Download files": "下载文件",
        "Manage file requests": "管理文件请求",
        "Manage API keys": "管理 API 密钥",
        "Uptime": "运行时间",
        "CPU Load": "CPU 负载",
        "Memory Usage": "内存使用",
        "Disk Usage": "磁盘使用",
        "Data Served": "已提供数据",
        "Total": "总计",
        "System Logs": "系统日志",
        "Loading...": "加载中……",
        "Filter": "筛选",
        "All Events": "全部事件",
        "Warnings": "警告",
        "Authentication": "认证",
        "Modifications": "修改",
        "Info": "信息",
        "Reset Traffic": "重置流量",
        "Reset the traffic statistic": "重置流量统计",
        "Delete Logs...": "删除日志……",
        "Older than 30 days": "早于 30 天",
        "Older than 14 days": "早于 14 天",
        "Older than 7 days": "早于 7 天",
        "Older than 2 days": "早于 2 天",
        "Delete all logs": "删除全部日志",
        "Execute": "执行",
        "Upload Files": "上传文件",
        "Note": "备注",
        "Upload restrictions": "上传限制",
        "Upload possible until:": "可上传至：",
        "Maximum file size:": "最大文件大小：",
        "Maximum number of files:": "最大文件数量：",
        "Unable to upload": "无法上传",
        "Success": "成功",
        "All files have been successfully uploaded. No further files can be uploaded anymore. You can close this page now.": "所有文件已成功上传，不能再上传其他文件了。现在可以关闭此页面。",
        "Decrypting...": "正在解密……",
        "Encrypted": "已加密",
        "Error:": "错误：",
        "File not found": "文件不存在",
        "The link may have expired or the file has been downloaded too many times.": "链接可能已过期，或文件下载次数已用尽。",
        "Unable to upload files": "无法上传文件",
        "This can happen for one of the following reasons:": "可能原因如下：",
        "- The upload request has expired (time limit reached)": "上传请求已过期（已达到时间限制）",
        "- The file limit for this upload request has been reached": "已达到此上传请求的文件数量限制",
        "- An invalid upload URL was submitted": "提交的上传链接无效",
        "Missing or invalid decryption key": "解密密钥缺失或无效",
        "Unauthorised user": "未授权用户",
        "Log in as different user": "使用其他用户登录",
        "Try again": "重试",
        "OIDC Provider Error:": "OIDC 提供商错误：",
        "If you forgot your user password, please ask your administrator to reset it.": "如果忘记用户密码，请联系管理员重置。",
        "A password change has been requested.": "已请求修改密码。",
        "Please enter a new password.": "请输入新密码。",
        "End-to-End Encryption Setup": "端到端加密设置",
        "Your password for decryption is:": "你的解密密码是：",
        "Generating.......": "正在生成……",
        "Save this password to a secure location, without it you will not be able to decrypt/share your files if your browser data gets deleted or you login from a different machine! This password will only be shown once.": "请将此密码保存到安全位置。如果浏览器数据被删除，或从其他设备登录，没有它将无法解密或分享文件！此密码只显示一次。",
        "If you need to reset the password, run the Gokapi setup again.": "如需重置密码，请重新运行 Gokapi 设置。",
        "End-to-end encryption has been set up, however no key was found on the local machine. Please enter the password in the text field below. If you do not know the decryption password, please re-run the Gokapi setup to reset the password.": "端到端加密已设置，但本机没有找到密钥。请在下方输入密码。如果不知道解密密码，请重新运行 Gokapi 设置来重置密码。",
        "Uploaded files are not end-to-end encrypted and will be stored in plain text on the server": "上传的文件不会进行端到端加密，将以明文存储在服务器上",
        "Powered by": "由",
        "Password required": "需要密码",
        "Enter password": "输入密码",
        "Incorrect password!": "密码错误！",
        "In Queue...": "排队中……",
        "Processing file...": "正在处理文件……",
        "Saving file...": "正在保存文件……",
        "Finalising...": "正在完成……",
        "Server Error": "服务器错误",
        "Unknown status": "未知状态",
        "Upload is still in progress. Do you want to close this page?": "上传仍在进行中，确定要关闭此页面吗？",
        "Language": "语言",
        "Files stored: _TOTAL_": "已存储文件：_TOTAL_",
        "No files stored yet": "还没有存储文件",
        "API key copied to clipboard": "API 密钥已复制到剪贴板",
        "URL copied to clipboard": "链接已复制到剪贴板",
        "Invalid notification": "无效通知"
    };

    const attributeTranslations = {
        "Language": "语言",
        "Username": "用户名",
        "Password": "密码",
        "New Password": "新密码",
        "Confirm New Password": "确认新密码",
        "Enter password": "输入密码",
        "No password": "不设置密码",
        "Friendly name": "显示名称",
        "Notes": "备注",
        "Permission Legend": "权限说明",
        "Show permission legend": "显示权限说明",
        "Copy URL": "复制链接",
        "Copy hotlink": "复制直链",
        "Share": "分享",
        "Open QR Code": "打开二维码",
        "Share via email": "通过邮件分享",
        "Download": "下载",
        "Download all": "下载全部",
        "Edit request": "编辑请求",
        "Delete": "删除",
        "Reset Password": "重置密码",
        "Promote User": "提升为管理员",
        "Demote User": "取消管理员",
        "Uploaded files": "已上传文件",
        "Active uploads": "正在上传",
        "File limit": "文件数量限制",
        "Expand / Collapse": "展开 / 收起",
        "List Uploads": "查看上传",
        "Upload": "上传",
        "Edit Uploads": "编辑上传",
        "Delete Uploads": "删除上传",
        "Replace Uploads": "替换上传",
        "Download Files": "下载文件",
        "Manage File Requests": "管理文件请求",
        "Manage Users": "管理用户",
        "Manage System Logs": "管理系统日志",
        "Manage API Keys": "管理 API 密钥",
        "Reset the traffic statistic": "重置流量统计",
        "Close": "关闭",
        "Cancel": "取消",
        "Replace File Content": "替换文件内容",
        "Expire files": "设置文件有效期",
        "Require password": "需要密码",
        "Limit downloads": "限制下载次数",
        "Downloads Remaining": "剩余下载次数",
        "Replacing content is not available for end-to-end encrypted files": "端到端加密文件不支持替换内容"
    };

    let currentLanguage = DEFAULT_LANGUAGE;
    let isApplying = false;
    const originalTexts = new WeakMap();
    const originalAttributes = new WeakMap();

    function normalise(value) {
        return String(value).replace(/\s+/g, " ").trim();
    }

    function preserveWhitespace(source, replacement) {
        const leading = String(source).match(/^\s*/)[0];
        const trailing = String(source).match(/\s*$/)[0];
        return leading + replacement + trailing;
    }

    function translateMessage(source) {
        const value = String(source);
        if (currentLanguage === "en") {
            return value;
        }

        const key = normalise(value);
        if (translations[key]) {
            return preserveWhitespace(value, translations[key]);
        }

        let match = key.match(/^Files stored:\s*(\d+)$/);
        if (match) {
            return preserveWhitespace(value, "已存储文件：" + match[1]);
        }
        match = key.match(/^Showing (\d+) to (\d+) of (\d+) entries$/);
        if (match) {
            return preserveWhitespace(value, "显示第 " + match[1] + " 至 " + match[2] + " 条，共 " + match[3] + " 条");
        }
        match = key.match(/^Showing 0 to 0 of 0 entries$/);
        if (match) {
            return preserveWhitespace(value, "没有记录");
        }
        match = key.match(/^(\d+) entries$/);
        if (match) {
            return preserveWhitespace(value, match[1] + " 条");
        }
        return value;
    }

    function shouldTranslateTextNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, noscript, #gokapi-language-switcher")) {
            return false;
        }

        const cell = parent.closest("td");
        if (cell) {
            return SAFE_TABLE_VALUES.has(normalise(node.nodeValue));
        }
        return true;
    }

    function applyTextTranslations(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let node;
        while ((node = walker.nextNode())) {
            nodes.push(node);
        }

        nodes.forEach(textNode => {
            if (!shouldTranslateTextNode(textNode)) {
                return;
            }
            if (!originalTexts.has(textNode)) {
                originalTexts.set(textNode, textNode.nodeValue);
            }
            const source = originalTexts.get(textNode);
            textNode.nodeValue = translateMessage(source);
        });
    }

    function translateAttributeValue(source) {
        if (currentLanguage === "en") {
            return source;
        }
        let result = String(source);
        Object.keys(attributeTranslations).sort((left, right) => right.length - left.length).forEach(key => {
            result = result.split(key).join(attributeTranslations[key]);
        });
        return result;
    }

    function applyAttributeTranslations(root) {
        root.querySelectorAll("[title], [placeholder], [aria-label], [data-default], [data-bs-content]").forEach(element => {
            if (element.id === "gokapi-language-switcher") {
                return;
            }
            ["title", "placeholder", "aria-label", "data-default", "data-bs-content"].forEach(attribute => {
                if (!element.hasAttribute(attribute)) {
                    return;
                }
                let saved = originalAttributes.get(element);
                if (!saved) {
                    saved = {};
                    originalAttributes.set(element, saved);
                }
                if (!Object.prototype.hasOwnProperty.call(saved, attribute)) {
                    saved[attribute] = element.getAttribute(attribute);
                }
                element.setAttribute(attribute, translateAttributeValue(saved[attribute]));
            });
        });
    }

    function applyLanguage() {
        if (!document.body || isApplying) {
            return;
        }
        isApplying = true;
        document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
        applyTextTranslations(document.body);
        applyAttributeTranslations(document.body);
        const switcher = document.getElementById("gokapi-language-switcher");
        if (switcher) {
            switcher.value = currentLanguage;
        }
        isApplying = false;
    }

    function setLanguage(language) {
        currentLanguage = language === "zh" ? "zh" : "en";
        localStorage.setItem(STORAGE_KEY, currentLanguage);
        applyLanguage();
    }

    function init() {
        currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
        const switcher = document.getElementById("gokapi-language-switcher");
        if (switcher) {
            switcher.value = currentLanguage;
            switcher.addEventListener("change", () => setLanguage(switcher.value));
        }

        const nativeAlert = window.alert;
        window.alert = function (message) {
            nativeAlert(translateMessage(message));
        };

        applyLanguage();
        const observer = new MutationObserver(() => {
            if (currentLanguage === "zh" && !isApplying) {
                applyLanguage();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    window.gokapiTranslate = translateMessage;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
