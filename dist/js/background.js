!function(a){function b(a){e=a,chrome.tabs.get(a,function(a){f=a.url,g=a.title,c(e,f)})}function c(a,b){var c=-1!==b.indexOf("chrome://")||-1!==b.indexOf("chrome-extension://")||-1!==b.indexOf("file://");return c?(chrome.browserAction.setBadgeText({text:"",tabId:a}),void 0):(h!==b&&(h=b,d.isAuthenticated&&(chrome.browserAction.setBadgeBackgroundColor({color:"#66cc33"}),d.API.getPost(b).done(function(b){var c=0!==b.posts.length;chrome.browserAction.setBadgeText({text:c?"✓":"",tabId:a})}).fail(function(){chrome.browserAction.setBadgeText({text:"",tabId:a})}))),void 0)}var d=a.Pinput||{},e=(d.Background||{},0),f="",g="",h="",i=chrome.storage.sync;i.get([d.StorageKey.APIToken,d.StorageKey.isAuthenticated],function(a){d.authToken=a[d.StorageKey.APIToken],d.isAuthenticated=!!a[d.StorageKey.isAuthenticated]}),chrome.tabs.onActivated.addListener(function(a){b(a.tabId)}),chrome.tabs.onUpdated.addListener(function(a){e===a&&b(a)}),chrome.windows.onFocusChanged.addListener(function(){chrome.windows.getCurrent({populate:!0},function(a){a.tabs.forEach(function(a){a.active&&b(a.id)})})}),chrome.runtime.onMessage.addListener(function(a,b,c){c({url:f,title:g})})}(this);