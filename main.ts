import './style.css';
import {fromEvent} from 'rxjs';
import {throttleTime} from 'rxjs/operators';

document.getElementById('spanSize').textContent = `${window.innerWidth} x ${window.innerHeight}`;

fromEvent<MouseEvent>(window, 'mousemove')
    .pipe(throttleTime(50))
    .subscribe(e => {
        document.getElementById('spanMouse').textContent = `m ${e.x}, ${e.y}`;
    });

fromEvent<void>(window, 'resize')
    .pipe(throttleTime(100))
    .subscribe(() => {
        document.getElementById('spanSize').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    });
