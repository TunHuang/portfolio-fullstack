const start = document.getElementById('start');

const typewriter = new Typewriter(start, {
  loop: true,
  delay: 75,
  deleteSpeed: 30,
  cursor: ''
});

typewriter
  .typeString(`<pre><span style="color: green;">let</span> <span style="color: darkorchid">object</span> = &#123;</pre>
  <pre>    <span style="color: cornflowerblue;">name:</span> <span style="color: coral;">'Tun Huang'</span>,</pre>
  <pre>    <span style="color: cornflowerblue;">species:</span> <span style="color: coral;">'homo sapiens'</span>,</pre>
  <pre>    <span style="color: cornflowerblue;">location:</span> <span style="color: coral;">'Berlin'</span>,</pre>
  <pre>    <span style="color: cornflowerblue;">profession:</span> <span style="color: coral;">'web developer'</span>,</pre>
  <pre>    <span style="color: cornflowerblue;">available:</span> <span style="color: gold;">true,</span></pre>
  <pre>&#125;;</pre>`)
  .pauseFor(2500)
  .start()
;