const menu = document.querySelector('.header__nav');
const menuList = document.querySelector('.nav__list');
const menuCaption = document.querySelectorAll('.dropdown');
const menuBTN = document.querySelector('.burger');
const closeBTN = document.querySelector('.close');

function openMenu(){
 menu.classList.toggle('open');
   menuCaption.forEach(elem => {
   elem.classList.remove('open');
 });
};

menuBTN.addEventListener('click', openMenu);

menuList.addEventListener('click', toggleMenuItem);
function toggleMenuItem(evt) {
 const current = evt.target.closest('.dropdown');
 if (current) {
  current.classList.toggle('open');
  toggleOtherItems(current)
 }
};

function toggleOtherItems(menuItem) {
 menuCaption.forEach(elem => {
  if (elem !== menuItem) {
   elem.classList.remove('open');
  };
 });
};

function closeMenu() {
 menu.classList.remove('open');
};

function closeMenuByOutside(evt) {
 const current = evt.target.closest('.header__nav');
 const btn = evt.target.closest('.burger')
 if (!current && !btn) {
  menu.classList.remove('open');
 }
};

closeBTN.addEventListener('click', closeMenu);
document.addEventListener('click', closeMenuByOutside);

/*SCROLL*/

;( function ( document, window, index )
	{
		'use strict';

		var elSelector		= '.header',
			elClassHidden	= 'header--hidden',
			throttleTimeout	= 500,
			element			= document.querySelector( elSelector );

		if( !element ) return true;

		var dHeight			= 0,
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0,

			hasElementClass		= function( element, className ){ return element.classList ? element.classList.contains( className ) : new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( element.className ); },
			addElementClass		= function( element, className ){ element.classList ? element.classList.add( className ) : element.className += ' ' + className; },
			removeElementClass	= function( element, className ){ element.classList ? element.classList.remove( className ) : element.className = element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' ); },

			throttle = function( delay, fn )
			{
				var last, deferTimer;
				return function()
				{
					var context = this, args = arguments, now = +new Date;
					if( last && now < last + delay )
					{
						clearTimeout( deferTimer );
						deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
					}
					else
					{
						last = now;
						fn.apply( context, args );
					}
				};
			};

		window.addEventListener( 'scroll', throttle( throttleTimeout, function()
		{
			dHeight			= document.body.offsetHeight;
			wHeight			= window.innerHeight;
			wScrollCurrent	= window.pageYOffset;
			wScrollDiff		= wScrollBefore - wScrollCurrent;

			if( wScrollCurrent <= 200 ) // scrolled to the very top; element sticks to the top
				removeElementClass( element, elClassHidden );

			else if( wScrollDiff > 0 && hasElementClass( element, elClassHidden ) ) // scrolled up; element slides in
				removeElementClass( element, elClassHidden );

			else if( wScrollDiff < 0 ) // scrolled down
			{
				if( wScrollCurrent + wHeight >= dHeight && hasElementClass( element, elClassHidden ) ) // scrolled to the very bottom; element slides in
					removeElementClass( element, elClassHidden );

				else // scrolled down; element slides out
					addElementClass( element, elClassHidden );
			}

			wScrollBefore = wScrollCurrent;
		}));

	}( document, window, 0 ));
