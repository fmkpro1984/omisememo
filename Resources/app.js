/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

var win = Ti.UI.createWindow();
var view = Ti.UI.createView({backgroundColor:"#eee", width: 320, height: 480});
win.add(view);

var label1 = Ti.UI.createLabel({
	color: '#333',
	font: { fontSize: 20 },
	text: 'お店の名前とメモ',
	top: 30,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
})
win.add(label1);


var textArea = Ti.UI.createTextArea({
	borderWidth: 2,
	borderColor: '#666',
	borderRadius: 5,
	color: '#888',
	font: {fontSize:20, fontweight:'normal'},
	returnKeyType: Ti.UI.RETURNKEY_GO,
	textAlign: 'left',
	top: 60,
	width:300,
	height: 200,
});
win.add(textArea);

var button = Ti.UI.createButton({
	title: '保存する',
	top: 300,
	width: 200,
	height: 50,
});
win.add(button);

var button_allview = Ti.UI.createButton({
	title: '一覧をみる',
	top: 370,
	width: 200,
	height: 50,
})
win.add(button_allview);

/*
var view2 = Ti.UI.createView({backgroundColor:"#AA2222", borderRadius:10, width: 280, height: 360});
win.add(view2);
*/

win.open();

/*
var webview = Titanium.UI.createWebView({url:'http://www.google.com/', width: 320, height: 100});
win.add(webview);
/*

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open();
})();

*/
