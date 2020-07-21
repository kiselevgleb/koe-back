const table = document.querySelector('table');
    const trFirst = document.createElement('tr');
    table.appendChild(trFirst);

let eventSource;
eventSource = new EventSource("http://localhost:7070/sse");
eventSource.addEventListener('message', (evt) => {
  trFirst.innerHTML = evt.data;
}, );
eventSource.addEventListener('open', () => {
});
eventSource.addEventListener('error', () => {
});