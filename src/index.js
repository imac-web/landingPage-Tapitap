import './stylesheets/main.scss'
import { slider } from './scripts/slider'

/* Library for animation on scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';

slider()

AOS.init();

// buttons redirection
document.querySelectorAll('.downloadButton button').forEach( button => button.addEventListener('click', () => window.open('https://tapitap.netlify.app/', '_blank')))