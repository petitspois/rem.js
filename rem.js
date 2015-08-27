!function(win) {
            //changed html font size
            function changeRem() {
                win.rem = docEl.getBoundingClientRect().width / 16, 
                docEl.style.fontSize = win.rem + "px"
            }
            var cTime,
                ratio = win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1, //苹果设备获取物理像数与独立像数比
                devicePixelRatio = 1 / ratio, //实际的独立像数效果
                docEl = document.documentElement,
                metaNode = document.createElement("meta");
            if (
                win.dpr = ratio, 
                
                win.addEventListener("resize", function() {
                    clearTimeout(cTime), 
                    cTime = setTimeout(changeRem, 300)
                }, false), 
                
                win.addEventListener("pageshow", function(a) {
                    event.persisted && (clearTimeout(cTime), cTime = setTimeout(changeRem, 300))
                }, false), 
                
                docEl.setAttribute("data-dpr", ratio), 
                
                metaNode.setAttribute("name", "viewport"), 
                
                metaNode.setAttribute("content", "initial-scale=" + devicePixelRatio + ", maximum-scale=" + devicePixelRatio + ", minimum-scale=" + devicePixelRatio + ", user-scalable=no"),
                
                docEl.firstElementChild
                ) 
                
                docEl.firstElementChild.appendChild(metaNode);
            else {
                var node = document.createElement("div");
                node.appendChild(metaNode), 
                document.write(h.innerHTML)
            }
            changeRem();
}(window);