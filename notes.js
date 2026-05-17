(function(){
    var content = document.querySelector(".content-area");
    var rightToc = document.getElementById("right-toc");
    if(!content || !rightToc) return;

    var headings = content.querySelectorAll("h2, h3");
    if(headings.length === 0){
        document.querySelector(".sidebar-right")?.remove();
        return;
    }

    // Assign IDs and build right TOC
    headings.forEach(function(h, i){
        if(!h.id) h.id = "heading-" + i;
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        if(h.tagName === "H3") a.classList.add("h3");
        rightToc.appendChild(a);
    });

    var links = rightToc.querySelectorAll("a");
    if(links.length === 0) return;

    // Active heading tracking
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                links.forEach(function(l){ l.classList.remove("active"); });
                var id = entry.target.id;
                var active = rightToc.querySelector('a[href="#' + id + '"]');
                if(active) active.classList.add("active");
            }
        });
    }, { rootMargin: "-80px 0px -70% 0px" });

    headings.forEach(function(h){ observer.observe(h); });
})();
