const inlinePxReg = /[0-9]+px/g;

interface ViewPortInterface {
	viewportWidth: number;
}
function InlineStylePxToVw(source: string, options: ViewPortInterface) {
	// const options = loaderUtils.getOptions(this)
	const viewportWidth = (options && options.viewportWidth) || 375;
	if (source.match(inlinePxReg)) {
		source = source.replace(inlinePxReg, px => {
			let vw = accDiv(parseInt(px.split('px')[0]), accDiv(viewportWidth, 100)); //vw = width / (viewportWidth/100)
			return vw + 'vw';
		})
	}

	return source
}
//精确除法
function accDiv(arg1: number, arg2: number) {
	var t1 = 0,
		t2 = 0,
		r1,
		r2
	try {
		t1 = arg1.toString().split('.')[1].length
	} catch (e) { }
	try {
		t2 = arg2.toString().split('.')[1].length
	} catch (e) { }
	r1 = Number(arg1.toString().replace('.', ''))
	r2 = Number(arg2.toString().replace('.', ''))
	return (r1 / r2) * Math.pow(10, t2 - t1)
}

export default InlineStylePxToVw;
