(function(){
    var content = document.querySelector(".content-area");
    if(!content) return;

    var headings = content.querySelectorAll("h2, h3");

    // Assign IDs to headings
    headings.forEach(function(h, i){
        if(!h.id) h.id = "heading-" + i;
    });

    // --- LEFT SIDEBAR: h2 only (sections) ---
    var leftNav = document.getElementById("left-nav");
    if(leftNav){
        var h2s = content.querySelectorAll("h2");
        if(h2s.length > 0){
            h2s.forEach(function(h){
                var a = document.createElement("a");
                a.href = "#" + h.id;
                a.textContent = h.textContent;
                leftNav.appendChild(a);
            });
        } else {
            document.querySelector(".sidebar-left")?.remove();
        }
    }

    // --- RIGHT SIDEBAR: h2 + h3 (full TOC) ---
    var rightToc = document.getElementById("right-toc");
    if(rightToc){
        if(headings.length > 0){
            headings.forEach(function(h){
                var a = document.createElement("a");
                a.href = "#" + h.id;
                a.textContent = h.textContent;
                if(h.tagName === "H3") a.classList.add("h3");
                rightToc.appendChild(a);
            });
        } else {
            document.querySelector(".sidebar-right")?.remove();
        }
    }

    // If no headings at all, remove both sidebars
    if(headings.length === 0){
        document.querySelector(".sidebar-left")?.remove();
        document.querySelector(".sidebar-right")?.remove();
    }

    // --- Active heading tracking (both sidebars) ---
    var allLinks = document.querySelectorAll(".left-nav a, .right-toc a");
    if(allLinks.length === 0) return;

    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                allLinks.forEach(function(l){ l.classList.remove("active"); });
                var id = entry.target.id;
                document.querySelectorAll('.left-nav a[href="#' + id + '"], .right-toc a[href="#' + id + '"]')
                    .forEach(function(el){ el.classList.add("active"); });
            }
        });
    }, { rootMargin: "-80px 0px -70% 0px" });

    headings.forEach(function(h){ observer.observe(h); });
})();
