window.modules = {};
function hello(output, name) {
	return 'I love ' + output + '; name: ' + name;
}
function template(tmpl, view) {
	var content = document.getElementById(tmpl).innerHTML;
	var compiled = new jSmart(content);
	var output = compiled.fetch(view);
	return output;
}
$.fn.template = function(tmpl, view) {
	this.html(template(tmpl, view));
};

$.fn.run = function() {
	var $elem = this;
	var module = $elem.data('module');
	var tmpl = $elem.data('tmpl');
	var settings = modules[module];
	var runningTmpl = settings.tmpl || tmpl;
	var runningSettings = settings.data || settings;
	runningSettings.module = 'modules.' +module;
	runningSettings.tmpl = tmpl;
	runningSettings.$elem = $elem;
	$elem.template(runningTmpl, runningSettings);
};
$(function() {
	$('.template').each(function(index, elem) {
		$(elem).run();
	});
});

function createModule(settings){
	var module = function() {
	};
	$.extend(module.prototype, settings || {});
	return module;
}