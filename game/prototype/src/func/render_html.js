function renderHTML(canvas, html) {
    const ctx = canvas.getContext("2d");
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
    </foreignObject>
    </svg>`;
    
    const svgBlob = new Blob( [svg], { type: 'image/svg+xml;charset=utf-8' } );
    const svgObjectUrl = URL.createObjectURL( svgBlob );

    const tempImg = new Image();
    tempImg.addEventListener( 'load', function() {
        ctx.drawImage( tempImg, 0, 0 );
        URL.revokeObjectURL( svgObjectUrl );
    } );

    tempImg.src = svgObjectUrl;
}
