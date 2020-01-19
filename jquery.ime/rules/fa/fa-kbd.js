( function ( $ ) {
	'use strict';

	var faKbd = {
		id: 'fa-kbd',
		name: 'kbd',
		description: 'Persian standard (ISIRI 9147) keyboard layout',
		date: '2013-08-30',
		URL: 'http://www.isiri.org/portal/files/std/9147.pdf',
		author: 'Ebrahim Byagowi',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '`', '\u200d' ],
			[ '1', '۱' ],
			[ '2', '۲' ],
			[ '3', '۳' ],
			[ '4', '۴' ],
			[ '5', '۵' ],
			[ '6', '۶' ],
			[ '7', '۷' ],
			[ '8', '۸' ],
			[ '9', '۹' ],
			[ '0', '۰' ],

			[ 'q', 'ض' ],
			[ 'w', 'ص' ],
			[ 'e', 'ث' ],
			[ 'r', 'ق' ],
			[ 't', 'ف' ],
			[ 'y', 'غ' ],
			[ 'u', 'ع' ],
			[ 'i', 'ه' ],
			[ 'o', 'خ' ],
			[ 'p', 'ح' ],
			[ '\\[', 'ج' ],
			[ '\\]', 'چ' ],

			[ 'a', 'ش' ],
			[ 's', 'س' ],
			[ 'd', 'ی' ],
			[ 'f', 'ب' ],
			[ 'g', 'ل' ],
			[ 'h', 'ا' ],
			[ 'j', 'ت' ],
			[ 'k', 'ن' ],
			[ 'l', 'م' ],
			[ ';', 'ک' ],
			[ '\'', 'گ' ],

			[ 'z', 'ظ' ],
			[ 'x', 'ط' ],
			[ 'c', 'ز' ],
			[ 'v', 'ر' ],
			[ 'b', 'ذ' ],
			[ 'n', 'د' ],
			[ 'm', 'پ' ],
			[ ',', 'و' ],
			[ '\\.', '.' ],
			[ '/', '/' ],

			[ '~', '÷' ],
			[ '\\!', '!' ],
			[ '@', '٬' ],
			[ '#', '٫' ],
			[ '\\$', '﷼' ],
			[ '%', '٪' ],
			[ '\\^', '×' ],
			[ '&', '،' ],
			[ '\\*', '*' ],
			[ '\\(', ')' ],
			[ '\\)', '(' ],
			[ '_', 'ـ' ],

			[ 'Q', 'ْ' ],
			[ 'W', 'ٌ' ],
			[ 'E', 'ٍ' ],
			[ 'R', 'ً' ],
			[ 'T', 'ُ' ],
			[ 'Y', 'ِ' ],
			[ 'U', 'َ' ],
			[ 'I', 'ّ' ],
			[ 'O', ']' ],
			[ 'P', '[' ],
			[ '\\{', '}' ],
			[ '\\}', '{' ],

			[ 'A', 'ؤ' ],
			[ 'S', 'ئ' ],
			[ 'D', 'ي' ],
			[ 'F', 'إ' ],
			[ 'G', 'أ' ],
			[ 'H', 'آ' ],
			[ 'J', 'ة' ],
			[ 'K', '»' ],
			[ 'L', '«' ],
			[ '\\:', ':' ],
			[ '"', '؛' ],

			[ 'Z', 'ك' ],
			[ 'X', 'ٓ' ],
			[ 'C', 'ژ' ],
			[ 'V', 'ٰ' ],
			[ 'B', '\u200c' ],
			[ 'N', 'ٔ' ],
			[ 'M', 'ء' ],
			[ '<', '>' ],
			[ '>', '<' ],
			[ '\\?', '؟' ]
		],
		patterns_x: [
			[ '`', '~' ],
			[ '1', '`' ],
			[ '2', '@' ],
			[ '3', '#' ],
			[ '4', '$' ],
			[ '5', '%' ],
			[ '6', '^' ],
			[ '7', '&' ],
			[ '8', '•' ],
			[ '9', '\u200e' ],
			[ '0', '\u200f' ],

			[ 'q', '°' ],
			[ 'w', '' ],
			[ 'e', '€' ],
			[ 'r', '' ],
			[ 't', '' ],
			[ 'y', '' ],
			[ 'u', '' ],
			[ 'i', '\u202d' ],
			[ 'o', '\u202e' ],
			[ 'p', '\u202c' ],
			[ '\\[', '\u202a' ],
			[ '\\]', '\u202b' ],

			[ 'a', '' ],
			[ 's', '' ],
			[ 'd', 'ى' ],
			[ 'f', '' ],
			[ 'g', '' ],
			[ 'h', 'ٱ' ],
			[ 'j', '' ],
			[ 'k', '﴾' ],
			[ 'l', '﴿' ],
			[ ';', ';' ],
			[ '\'', '"' ],

			[ 'z', '' ],
			[ 'x', '' ],
			[ 'c', '' ],
			[ 'v', 'ٖ' ],
			[ 'b', '\u200d' ],
			[ 'n', 'ٕ' ],
			[ 'm', '…' ],
			[ ',', ',' ],
			[ '\\.', '\'' ],
			[ '/', '?' ],
			[ ' ', '\xa0' ]
		],
		patterns_shift: [
			[ ' ', '\u200c' ]
		]
	};

	$.ime.register( faKbd );
}( jQuery ) );
