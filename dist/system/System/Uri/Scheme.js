System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isValid(scheme) {
        return All.indexOf(scheme) != -1;
    }
    exports_1("isValid", isValid);
    var File, FTP, GOPHER, HTTP, HTTPS, LDAP, MAILTO, PIPE, TCP, NEWS, NNTP, TELNET, UUID, All;
    return {
        setters: [],
        execute: function () {
            exports_1("File", File = "file");
            exports_1("FTP", FTP = "ftp");
            exports_1("GOPHER", GOPHER = "gopher");
            exports_1("HTTP", HTTP = "http");
            exports_1("HTTPS", HTTPS = "https");
            exports_1("LDAP", LDAP = "ldap");
            exports_1("MAILTO", MAILTO = "mailto");
            exports_1("PIPE", PIPE = "net.pipe");
            exports_1("TCP", TCP = "net.tcp");
            exports_1("NEWS", NEWS = "news");
            exports_1("NNTP", NNTP = "nntp");
            exports_1("TELNET", TELNET = "telnet");
            exports_1("UUID", UUID = "uuid");
            exports_1("All", All = Object.freeze([
                File, FTP, GOPHER, HTTP, HTTPS, LDAP, MAILTO, PIPE, TCP, NEWS, NNTP, TELNET, UUID
            ]));
        }
    };
});
//# sourceMappingURL=Scheme.js.map