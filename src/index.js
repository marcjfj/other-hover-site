import otherHover from 'other-hover';
import Splitting from 'splitting';

Splitting({
  target: document.querySelector('.title'),
  by: 'chars'
})

otherHover({
  selector: '.title .char'
})

otherHover({
  selector: '.cards .card-wrapper'
})

otherHover({
  selector: '.example .hover-me'
})