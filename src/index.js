import './stylesheets/main.scss'
import { slider } from './scripts/slider'

/* Library for animation on scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';

window.onload = function() {
    AOS.init({
        duration: 1500,
        once: true
    });
    window.addEventListener('load', AOS.refresh);

    slider()
}

// buttons redirection
document.querySelectorAll('.downloadButton button').forEach(button => button.addEventListener('click', () => window.open('https://app-mobilite-test.web.app/', '_blank')))