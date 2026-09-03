chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'resize') { chrome.windows.update(msg.windowId, {width: msg.width, height: msg.height}); resp({success: true}); } });
