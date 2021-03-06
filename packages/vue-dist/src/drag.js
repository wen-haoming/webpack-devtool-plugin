export function draggable(dom,callbacks){
    if(!dom) return
    const {mousedownCb,mousemoveCb,mouseupCb} = callbacks || {}
    function handleEvent(event){
        switch(event.type){
            case 'mousedown':
                handleEvent._distance_left = event.clientX - dom.offsetLeft
                handleEvent._distance_top = event.clientY - dom.offsetTop
                mousedownCb&&mousedownCb(event)
                window.addEventListener('mousemove',handleEvent)
                window.addEventListener('mouseup',handleEvent)
            return
            case 'mousemove':
                requestAnimationFrame(function(){
                    mousemoveCb&&mousemoveCb(event)
                    dom.style.left = event.clientX - handleEvent._distance_left + 'px'
                    dom.style.top = event.clientY - handleEvent._distance_top + 'px'
                })
            return
            case 'mouseup':
                mouseupCb&&mouseupCb(event)
                window.removeEventListener('mousemove',handleEvent)
                window.removeEventListener('mouseup',handleEvent)
            return
        }
    }
    dom.addEventListener('mousedown',handleEvent)
}