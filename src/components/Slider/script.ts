import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const rootNode = document.querySelector('.embla')
const viewportNode: HTMLElement = rootNode.querySelector('.embla__viewport')
const prevButtonNode: HTMLElement = rootNode.querySelector('.embla__prev')
const nextButtonNode: HTMLElement = rootNode.querySelector('.embla__next')

const options = {
    loop: true,
    breakpoints: {
        '(min-width: 768px)': {
            slidesToScroll: 2,
        }
    }
}

Autoplay.globalOptions = {
    delay: 3000, 
    stopOnMouseEnter: true,
    stopOnInteraction: true,
}
const plugins = [Autoplay()]

const embla: any = EmblaCarousel(viewportNode, options, plugins)
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)