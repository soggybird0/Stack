(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = (link.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  var headings = document.querySelectorAll(".content h2[id]");
  var sideLinks = document.querySelectorAll(".side a[href^='#']");
  if (!headings.length || !sideLinks.length || !("IntersectionObserver" in window)) return;

  var map = {};
  sideLinks.forEach(function (link) {
    map[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      sideLinks.forEach(function (link) { link.classList.remove("active"); });
      var current = map[entry.target.id];
      if (current) current.classList.add("active");
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  headings.forEach(function (heading) { observer.observe(heading); });
})();
